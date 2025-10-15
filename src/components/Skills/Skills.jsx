import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import { SkillService } from '../../services/SkillService';
import '../../styles/Skills.css';
import { useState, useEffect } from 'react';

const Skills = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const result = await SkillService.getAllSkills();
        if (result.success) {
          setSkillsData(result.data);
        } else {
          console.error('Error fetching skills:', result.error);
        }
      } catch (error) {
        console.error('Unexpected error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="skills">
        <div className="container">
          <div className="loading">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" ref={elementRef} className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <h2>My Skills</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-content">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              variants={ANIMATION_VARIANTS.fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;