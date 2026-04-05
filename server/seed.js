const bcrypt = require('bcryptjs');
const pool = require('./db');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PROJECTS_DATA = [
  {
    slug: 'niagara-project-1',
    title: 'Niagara Project',
    location: 'Niagara Falls, ON',
    category: 'Full Home Renovation',
    description: 'Complete home renovation including living room, dining room, bedrooms, bathroom, and kitchen. Work included drywall, framing, electrical, plumbing, and finishing.',
    cover_image: '/project-assets/1-Niagara-1-project/niagara-1-project2.jpg',
    tags: ['renovation', 'drywall', 'framing', 'electrical', 'plumbing'],
    completed_date: '2023',
    featured: true,
    display_order: 1,
    images: [
      { url: '/project-assets/1-Niagara-1-project/1.jpg', alt: 'Living room renovation drywall and framing' },
      { url: '/project-assets/1-Niagara-1-project/2.jpg', alt: 'Dining room renovation drywall and framing' },
      { url: '/project-assets/1-Niagara-1-project/3.jpg', alt: 'Bedroom renovation drywall and framing' },
      { url: '/project-assets/1-Niagara-1-project/4.jpg', alt: 'Bedroom renovation drywall' },
      { url: '/project-assets/1-Niagara-1-project/5.jpg', alt: 'Renovation ceiling drywall' },
      { url: '/project-assets/1-Niagara-1-project/6.jpg', alt: 'Renovation plumbing & electrical services' },
      { url: '/project-assets/1-Niagara-1-project/7.jpg', alt: 'Bedroom renovation' },
      { url: '/project-assets/1-Niagara-1-project/8.jpg', alt: 'Living room renovation' },
      { url: '/project-assets/1-Niagara-1-project/9.jpg', alt: 'Bathroom renovation' },
      { url: '/project-assets/1-Niagara-1-project/10.jpg', alt: 'Kitchen renovation' },
    ],
  },
  {
    slug: 'oakville-project-1',
    title: 'Oakville Project',
    location: 'Oakville, ON',
    category: 'Bathroom Renovation',
    description: 'Bathroom renovation project featuring complete tile work, vanity installation, and modern fixtures.',
    cover_image: '/project-assets/2-oakville-bath-project/oakville-1-main2.jpg',
    tags: ['bathroom', 'tile', 'vanity'],
    completed_date: '2023',
    featured: true,
    display_order: 2,
    images: [],
  },
  {
    slug: 'ancaster-project-1',
    title: 'Ancaster Project',
    location: 'Ancaster, ON',
    category: 'Full Home Renovation',
    description: 'Comprehensive home renovation project in Ancaster including structural work, finishing, and modern updates.',
    cover_image: '/project-assets/3-Ancaster-1-Project/ancaster-1-main2.jpg',
    tags: ['renovation', 'home', 'remodeling'],
    completed_date: '2023',
    featured: true,
    display_order: 3,
    images: [],
  },
  {
    slug: 'burlington-project-1',
    title: 'Burlington Project',
    location: 'Burlington, ON',
    category: 'Full Home Renovation',
    description: 'Full home renovation in Burlington with emphasis on modern finishes and open-concept living spaces.',
    cover_image: '/project-assets/4-burlington-1-project/Burlington-1-main2.jpg',
    tags: ['renovation', 'home', 'modern'],
    completed_date: '2023',
    featured: false,
    display_order: 4,
    images: [],
  },
  {
    slug: 'mississauga-store-project-1',
    title: 'Mississauga Store Project',
    location: 'Mississauga, ON',
    category: 'Commercial/Store',
    description: 'Commercial store renovation project in Mississauga with custom design elements and professional-grade finishes.',
    cover_image: '/project-assets/5-mississauga-store-project/mississauga-1-main2.jpg',
    tags: ['commercial', 'store', 'renovation'],
    completed_date: '2023',
    featured: false,
    display_order: 5,
    images: [],
  },
  {
    slug: 'milton-project-1',
    title: 'Milton Project',
    location: 'Milton, ON',
    category: 'Full Home Renovation',
    description: 'Complete home renovation in Milton including kitchen, bathrooms, and living spaces.',
    cover_image: '/project-assets/6-milton-project-1/main.jpg',
    tags: ['renovation', 'home', 'kitchen'],
    completed_date: '2024',
    featured: false,
    display_order: 6,
    images: [],
  },
  {
    slug: 'burlington-project-2',
    title: 'Burlington Project No. 2',
    location: 'Burlington, ON',
    category: 'Basement Renovation',
    description: 'Basement and home renovation project in Burlington featuring modern design and functional living spaces.',
    cover_image: '/project-assets/7- burlington-project-2/main.jpg',
    tags: ['basement', 'renovation', 'home'],
    completed_date: '2024',
    featured: false,
    display_order: 7,
    images: [],
  },
  {
    slug: 'colborne-project-1',
    title: 'Colborne Project',
    location: 'Colborne, ON',
    category: 'Full Home Renovation',
    description: 'Full-scale renovation project in Colborne with comprehensive interior updates.',
    cover_image: '/project-assets/8-colborne-project-1/main.png',
    tags: ['renovation', 'home', 'interior'],
    completed_date: '2024',
    featured: false,
    display_order: 8,
    images: [],
  },
  {
    slug: 'mississauga-project-2',
    title: 'Mississauga Project No. 2',
    location: 'Mississauga, ON',
    category: 'Full Home Renovation',
    description: 'Second Mississauga renovation project with complete home interior transformation.',
    cover_image: '/project-assets/9-Mississauga-project-2/main.jpg',
    tags: ['renovation', 'home', 'mississauga'],
    completed_date: '2024',
    featured: false,
    display_order: 9,
    images: [],
  },
  {
    slug: 'toronto-project-1',
    title: 'Toronto Restaurant Project No. 1',
    location: 'Toronto, ON',
    category: 'Commercial/Store',
    description: 'Restaurant renovation in Toronto with custom interior design, kitchen setup, and dining area transformation.',
    cover_image: "/project-assets/10-toronto-shelby's Project-1/main.jpg",
    tags: ['commercial', 'restaurant', 'renovation'],
    completed_date: '2024',
    featured: true,
    display_order: 10,
    images: [],
  },
  {
    slug: 'oakville-project-2',
    title: 'Oakville Project No. 2',
    location: 'Oakville, ON',
    category: 'Basement Renovation',
    description: 'Basement renovation in Oakville with modern flooring, lighting, and functional design.',
    cover_image: '/project-assets/11-oakville-project-2/main.jpg',
    tags: ['basement', 'renovation', 'oakville'],
    completed_date: '2024',
    featured: false,
    display_order: 11,
    images: [],
  },
  {
    slug: 'toronto-project-2',
    title: 'Toronto Restaurant Project No. 2',
    location: 'Toronto, ON',
    category: 'Commercial/Store',
    description: 'Second restaurant renovation project in Toronto featuring premium finishes and atmospheric design.',
    cover_image: "/project-assets/12-toronto-shelby's Project-2/main.jpg",
    tags: ['commercial', 'restaurant', 'renovation'],
    completed_date: '2024',
    featured: false,
    display_order: 12,
    images: [],
  },
];

async function seed() {
  console.log('🌱 Starting database seed...\n');

  try {
    // Run schema first
    const schemaSQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(schemaSQL);
    console.log('✅ Schema created\n');

    // Create admin user
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'XeusAdmin2024!';
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    // Check if admin already exists
    const existingUser = await pool.query('SELECT id FROM users WHERE username = $1', [adminUsername]);
    if (existingUser.rows.length === 0) {
      await pool.query(
        'INSERT INTO users (username, password_hash) VALUES ($1, $2)',
        [adminUsername, hashedPassword]
      );
      console.log(`✅ Admin user created (username: ${adminUsername})\n`);
    } else {
      // Update password in case it changed
      await pool.query('UPDATE users SET password_hash = $1 WHERE username = $2', [hashedPassword, adminUsername]);
      console.log(`✅ Admin user updated (username: ${adminUsername})\n`);
    }

    // Seed projects
    for (const project of PROJECTS_DATA) {
      // Check if project already exists
      const existing = await pool.query('SELECT id FROM projects WHERE slug = $1', [project.slug]);
      
      let projectId;

      if (existing.rows.length === 0) {
        const result = await pool.query(
          `INSERT INTO projects (slug, title, location, category, description, cover_image, tags, completed_date, featured, display_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
           RETURNING id`,
          [project.slug, project.title, project.location, project.category, project.description, project.cover_image, project.tags, project.completed_date, project.featured, project.display_order]
        );
        projectId = result.rows[0].id;
        console.log(`  ✅ Created project: ${project.title}`);
      } else {
        projectId = existing.rows[0].id;
        console.log(`  ⏭️  Skipped (exists): ${project.title}`);
      }

      // Insert images for this project
      if (project.images && project.images.length > 0) {
        // Check if images already exist
        const existingImages = await pool.query('SELECT id FROM project_images WHERE project_id = $1', [projectId]);
        if (existingImages.rows.length === 0) {
          for (let i = 0; i < project.images.length; i++) {
            await pool.query(
              'INSERT INTO project_images (project_id, image_url, alt_text, display_order) VALUES ($1, $2, $3, $4)',
              [projectId, project.images[i].url, project.images[i].alt, i]
            );
          }
          console.log(`     📷 Added ${project.images.length} images`);
        }
      }
    }

    console.log('\n🎉 Database seeded successfully!');
    console.log(`\n📋 Summary:`);
    console.log(`   - Admin: ${adminUsername} / ${adminPassword}`);
    console.log(`   - Projects: ${PROJECTS_DATA.length}`);
    
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  }
}

seed();
