import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import { AboutService } from '../../services/AboutService';
import { TimelineService } from '../../services/TimelineService';
import './About.css';
import { useState, useEffect } from 'react';

const About = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [aboutSections, setAboutSections] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const result = await AboutService.getAllAboutData();
        if (result.success) {
          setAboutSections(result.data.sections || []);
          setTimeline(result.data.timeline || []);
        } else {
          console.error('Error fetching about data:', result.error);
          // Jika gagal, gunakan data default sebagai fallback
          setAboutSections([{
            id: 1,
            section_title: 'Kenali Saya',
            content: 'Saya adalah mahasiswa Fakultas Ilmu Komputer, Program Studi Informatika, yang memiliki minat besar di bidang Full Stack Web Development dan Artificial Intelligence (AI). Selama lebih dari 1,5 tahun, saya telah mengasah kemampuan dalam pengembangan aplikasi berbasis web menggunakan React.js, Vite, Node.js, Express, dan MySQL, serta mulai mendalami integrasi AI untuk menciptakan solusi digital yang lebih cerdas dan efisien.\n\nSaya telah menyelesaikan beberapa project nyata, di antaranya Web App Fakultas Ekonomi Universitas Palembang dan Web App PMB Universitas Palembang. Saya selalu bersemangat untuk belajar teknologi baru, membangun sistem yang berdampak positif, dan berkontribusi di dunia teknologi. Tujuan saya adalah menjadi Full Stack Developer sekaligus AI Engineer yang mampu menghadirkan inovasi dan nilai tambah bagi perusahaan besar di masa depan.'
          }]);
        }
      } catch (error) {
        console.error('Unexpected error fetching about data:', error);
        // Fallback ke data default
        setAboutSections([{
          id: 1,
          section_title: 'Kenali Saya',
          content: 'Saya adalah mahasiswa Fakultas Ilmu Komputer, Program Studi Informatika, yang memiliki minat besar di bidang Full Stack Web Development dan Artificial Intelligence (AI). Selama lebih dari 1,5 tahun, saya telah mengasah kemampuan dalam pengembangan aplikasi berbasis web menggunakan React.js, Vite, Node.js, Express, dan MySQL, serta mulai mendalami integrasi AI untuk menciptakan solusi digital yang lebih cerdas dan efisien.\n\nSaya telah menyelesaikan beberapa project nyata, di antaranya Web App Fakultas Ekonomi Universitas Palembang dan Web App PMB Universitas Palembang. Saya selalu bersemangat untuk belajar teknologi baru, membangun sistem yang berdampak positif, dan berkontribusi di dunia teknologi. Tujuan saya adalah menjadi Full Stack Developer sekaligus AI Engineer yang mampu menghadirkan inovasi dan nilai tambah bagi perusahaan besar di masa depan.'
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="loading">Loading about information...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" ref={elementRef} className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <h2>Tentang Saya</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <h3>{aboutSections[0]?.section_title || 'Kenali Saya'}</h3>
            {aboutSections[0]?.content?.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="timeline"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={ANIMATION_VARIANTS.slideInRight}
          >
            <h3>Perjalanan Saya</h3>
            <div className="timeline-items">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;