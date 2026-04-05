# XeusHome Renovation Website

This repository contains the source code for the XeusHome Renovation Website, built with React and Express. This README documents the technical features implemented during the ongoing redesign process, serving as a portfolio reference and technical study guide.

## Technologies Used
- **Frontend:** React.js, React Router v6, SASS (SCSS), React Toastify
- **Backend:** Node.js, Express.js (v4), PostgreSQL, Multer (File Uploads), JsonWebToken (JWT), bcrypt.js, Nodemailer
- **Architecture:** Client-Server Monorepo (React SPA + Express API running concurrently)

---

## Technical Features Implemented

### Phase 1: Robust Backend Architecture & PostgreSQL DB
- **PostgreSQL Database Integration:** Transitioned from hardcoded frontend data to a dynamic PostgreSQL database schema featuring `users`, `projects`, `project_images`, and `messages` tables.
- **RESTful Express API:** Built API routes for complete CRUD operations on projects and user inquiries.
- **Secure Admin Authentication:** Implemented JWT-based authentication combined with `bcryptjs` password hashing, protecting administrative endpoints.
- **Dynamic File Uploading:** Utilized `multer` to handle both single (cover) and bulk local filesystem image uploads, assigning unique UUIDs to prevent naming collisions.
- **Concurrent Development Environment:** Configured `concurrently` in `package.json` with dedicated proxy settings to run the React client and Express API simultaneously on distinct ports during local development.

### Phase 2: Inquiries Backend & Nodemailer Integration
- **Persisted Contact Messages:** Wired the Contact Us form to save incoming inquiries securely to the PostgreSQL `messages` table, escaping data to prevent injection.
- **Nodemailer Alerts:** Implemented non-blocking email notifications so that the site administrator receives instant Gmail alerts when a potential client fills out the form.

### Phase 3 & 4: Deep Frontend Redesign & Restructuring
- **Component Modularity:** Re-architected monolithic pages (Home, About, Contact) into logical, isolated React components (`Hero`, `About`, `Introduction`, `SlideShow`).
- **Semantic HTML5 & SEO Accessibility:** Replaced nested `<div>` groups with `<main>`, `<section>`, and `<article>` tags to boost semantic value for search engine web crawlers.
- **CSS Architecture & UI Tokens:** Leveraged SASS pre-processor tokens (variables and mixins) to enforce strict brand guidelines, maintaining consistent `$xeus-darkmaroon` and `$xeus-mediumbeige` application across all pages.
- **Intelligent Responsive Design:** Implemented CSS Grid and Flexbox structures to fluidly map layout flow from single-column mobile views to complex overlapping multi-column desktop layouts without resorting to media query hacks.
- **Dashboard Expansion:** Extended the JWT-protected React `AdminDashboard` to utilize structural Tab components, separating Content Management (Projects) from Customer Relations (Inquiries).
