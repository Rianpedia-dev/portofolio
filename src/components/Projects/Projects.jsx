import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import { ProjectService } from '../../services/ProjectService';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { useState, useEffect } from 'react';

const Projects = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await ProjectService.getAllProjects();
        if (result.success) {
          setProjects(result.data);
        } else {
          console.error('Error fetching projects:', result.error);
        }
      } catch (error) {
        console.error('Unexpected error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={elementRef} className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <h2>My Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isIntersecting={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;