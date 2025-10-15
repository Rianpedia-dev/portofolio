import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = memo(({ project, index, isIntersecting }) => {
  return (
    <motion.article
      className="project-card"
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={ANIMATION_VARIANTS.slideInLeft}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      aria-label={project.title}
    >
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          onError={(e) => {
            e.target.src = `https://placehold.co/400x250?text=${encodeURIComponent(project.title)}`;
          }}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech && Array.isArray(project.tech) 
            ? project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))
            : project.tech && typeof project.tech === 'string' 
              ? project.tech.split(',').map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech.trim()}</span>
                ))
              : null
          }
        </div>
        
        <div className="project-links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Source code for ${project.title}`}
            >
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Live demo for ${project.title}`}
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;