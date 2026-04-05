import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.scss';

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const handleClick = () => {
    navigate(`/our-projects/${project.slug}`);
  };

  // Determine API base URL for images
  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    // In development, proxy handles /api, but static files need the server URL
    const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001';
    return `${baseUrl}${url}`;
  };

  return (
    <article
      ref={cardRef}
      className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="project-card__image-wrapper">
        <img
          className="project-card__image"
          src={getImageUrl(project.cover_image)}
          alt={project.title}
          loading="lazy"
        />
        <div className="project-card__overlay">
          <span className="project-card__view-btn">View Project</span>
        </div>
      </div>
      <div className="project-card__content">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {project.location}
        </p>
      </div>
    </article>
  );
}
