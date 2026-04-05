const express = require('express');
const pool = require('../db');
const { authenticateToken } = require('../middleware/auth');
const nodemailer = require('nodemailer');

const router = express.Router();

// GET /api/messages - Get all messages (admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Failed to fetch messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// POST /api/messages - Submit a new contact form message (public)
router.post('/', async (req, res) => {
  const { name, city, phone, email, message } = req.body;

  if (!name || (!phone && !email)) {
    return res.status(400).json({ error: 'Name, and either phone or email are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO messages (name, city, phone, email, message) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, city, phone, email, message]
    );

    // Send email notification non-blockingly
    sendEmailNotification(result.rows[0]).catch(err => 
      console.error('Failed to send email notification:', err)
    );

    res.status(201).json({ message: 'Inquiry submitted successfully', data: result.rows[0] });
  } catch (err) {
    console.error('Failed to submit message:', err);
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

// DELETE /api/messages/:id - Delete a message (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM messages WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.json({ message: 'Message deleted successfully' });
  } catch (err) {
    console.error('Failed to delete message:', err);
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

async function sendEmailNotification(msg) {
  // If no email/password is set, log it and return (prevent crashing)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('EMAIL_USER or EMAIL_PASS not configured. Skipping email notification.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'xeushome@gmail.com',
    subject: `New Inquiry from ${msg.name} - XeusHome`,
    html: `
      <h2>New inquiry received via XeusHome Website</h2>
      <p><strong>Name:</strong> ${msg.name}</p>
      <p><strong>City:</strong> ${msg.city || 'N/A'}</p>
      <p><strong>Phone:</strong> ${msg.phone || 'N/A'}</p>
      <p><strong>Email:</strong> ${msg.email || 'N/A'}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${msg.message || 'No additional message provided.'}</p>
      <hr>
      <p><small>Please log in to the <a href="http://localhost:3001/admin">Admin Dashboard</a> to view and manage inquiries.</small></p>
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = router;
