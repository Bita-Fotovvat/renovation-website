import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./FeaturedProjects.scss";

export default function FeaturedProjects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl =
          process.env.NODE_ENV === "production"
            ? "https://renovation-website-pdnn.onrender.com"
            : "http://localhost:5001";
        const res = await fetch(`${baseUrl}/api/projects`);
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const data = await res.json();
        setProjects(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch (err) {
        console.error("Failed to fetch featured projects:", err);
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <section className="home-featured">
      <div className="home-featured__header">
        <span className="home-featured__label">Our Work</span>
        <h2 className="home-featured__title">Featured Projects</h2>
        <div className="home-featured__divider"></div>
      </div>

      <div className="home-featured__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="home-featured__cta">
        <button
          className="home-featured__btn"
          onClick={() => navigate("/our-projects")}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}
