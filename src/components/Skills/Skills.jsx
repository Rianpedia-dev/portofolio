import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import { SKILLS_DATA } from '../../data/skills';
import '../../styles/Skills.css';

const Skills = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

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
          {SKILLS_DATA.map((category, index) => (
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