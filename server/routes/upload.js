const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${crypto.randomUUID()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG, WebP, and GIF images are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max per file
});

// POST /api/upload - Upload single image (admin only)
router.post('/', authenticateToken, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(201).json({
      message: 'Image uploaded successfully',
      image_url: imageUrl,
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size,
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// POST /api/upload/multiple - Upload multiple images (admin only)
router.post('/multiple', authenticateToken, upload.array('images', 20), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No image files provided' });
    }

    const uploadedFiles = req.files.map((file) => ({
      image_url: `/uploads/${file.filename}`,
      filename: file.filename,
      originalname: file.originalname,
      size: file.size,
    }));

    res.status(201).json({
      message: `${uploadedFiles.length} images uploaded successfully`,
      files: uploadedFiles,
    });
  } catch (err) {
    console.error('Multiple upload error:', err);
    res.status(500).json({ error: 'Failed to upload images' });
  }
});

// DELETE /api/upload/:filename - Delete an uploaded image (admin only)
router.delete('/:filename', authenticateToken, (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(uploadsDir, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    fs.unlinkSync(filePath);
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

module.exports = router;
