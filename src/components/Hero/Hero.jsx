import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import './Hero.css';
import foto1 from '../../../public/assets/images/foto1.jpg';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'FullStack Developer',
    'Frontend Developer',
    'Backend Developer',
    'AI Engineer'
  ];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, typewriterText.length - 1)
        : currentRole.substring(0, typewriterText.length + 1);

      setTypewriterText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* Animated background particles */}
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <motion.div
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="wave">👋</span> Hello, I'm
            </motion.div>

            <h1>
              <span className="highlight">Jemi Arian</span>
            </h1>

            <h2 className="typewriter">
              <span className="typewriter-text">{typewriterText}</span>
              <span className="typewriter-cursor">|</span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Saya adalah seorang Full Stack Developer yang berfokus pada pengembangan aplikasi berbasis web menggunakan React.js, Node.js, Express, dan MySQL. Dengan pengalaman lebih dari 1,5 tahun, saya juga menekuni bidang Artificial Intelligence (AI) untuk menciptakan solusi digital yang cerdas, efisien, dan bermanfaat. Saya bersemangat untuk terus belajar, berinovasi, dan berkontribusi di dunia teknologi modern.
            </motion.p>



            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Lihat Project Saya</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hubungi Saya</span>
              </motion.button>
            </motion.div>

            {/* Social proof badges */}
            <motion.div
              className="hero-badges"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="badge">
                <span className="badge-icon">⚡</span>
                <span>Fast Delivery</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🎯</span>
                <span>100% Quality</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🚀</span>
                <span>Modern Tech</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.slideInRight}
          >
            <div className="profile-circle">
              <div className="profile-ring"></div>
              <div className="profile-ring-2"></div>

              <img
                src={foto1}
                alt="Jemi Arian - FullStack Developer"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'profile-placeholder';
                  placeholder.innerHTML = '<span>JA</span>';
                  e.target.parentElement.appendChild(placeholder);
                }}
              />

              {/* Floating tech icons */}
              <motion.div
                className="tech-icon tech-icon-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span>⚛️</span>
              </motion.div>
              <motion.div
                className="tech-icon tech-icon-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span>📱</span>
              </motion.div>
              <motion.div
                className="tech-icon tech-icon-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span>💻</span>
              </motion.div>
              <motion.div
                className="tech-icon tech-icon-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span>🚀</span>
              </motion.div>
            </div>

            {/* Status indicator */}
            <motion.div
              className="status-indicator"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="status-dot"></div>
              <span>Siap Membantu Anda</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;