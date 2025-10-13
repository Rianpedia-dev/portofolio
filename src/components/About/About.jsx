import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_VARIANTS } from '../../utils/constants';
import './About.css';

const About = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  // Sample timeline data
  const timelineData = [
    {
      year: '2008 – 2014',
      title: 'Sekolah Dasar',
      description: 'Mulai mengenal dunia komputer dan teknologi dasar. Dari sini muncul rasa ingin tahu tentang bagaimana teknologi membantu aktivitas manusia.',
    },
    {
      year: '2015 - 2018',
      title: 'Sekolah Menengah Pertama (SMP)',
      description: 'Mulai aktif mengikuti kegiatan teknologi dan komputer di sekolah. Rasa penasaran tumbuh menjadi ketertarikan untuk memahami cara kerja perangkat lunak.',
    },
    {
      year: '2019 - 2021',
      title: 'Sekolah Menengah Atas (SMA)',
      description: 'Membuat situs web dan aplikasi web untuk bisnis kecil menggunakan HTML, CSS, dan JavaScript.',
    },
    {
      year: '2022 – Sekarang',
      title: 'Fakultas Ilmu Komputer, Universitas Sjakhayakirti',
      description: 'Menempuh studi di Program Studi Informatika dan fokus menekuni bidang Full Stack Web Development, serta Mulai mendalami teknologi AI dan penerapannya dalam pengembangan web.',
    },
     {
      year: '2023 – Sekarang',
      title: 'Project Development',
      description: 'Web App Fakultas Ekonomi Universitas Palembang danWeb App PMB Universitas Palembang Terus mengembangkan diri menuju impian menjadi Full Stack Developer dan AI Engineer profesional.',
    },
  ];

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
            <h3>Kenali Saya</h3>
            <p>
              Saya adalah mahasiswa Fakultas Ilmu Komputer, Program Studi Informatika, yang memiliki minat besar di bidang Full Stack Web Development dan Artificial Intelligence (AI). Selama lebih dari 1,5 tahun, saya telah mengasah kemampuan dalam pengembangan aplikasi berbasis web menggunakan React.js, Vite, Node.js, Express, dan MySQL, serta mulai mendalami integrasi AI untuk menciptakan solusi digital yang lebih cerdas dan efisien.
            </p>
            <p>
              Saya telah menyelesaikan beberapa project nyata, di antaranya Web App Fakultas Ekonomi Universitas Palembang dan Web App PMB Universitas Palembang. Saya selalu bersemangat untuk belajar teknologi baru, membangun sistem yang berdampak positif, dan berkontribusi di dunia teknologi. Tujuan saya adalah menjadi Full Stack Developer sekaligus AI Engineer yang mampu menghadirkan inovasi dan nilai tambah bagi perusahaan besar di masa depan.
            </p>
          </motion.div>

          <motion.div
            className="timeline"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={ANIMATION_VARIANTS.slideInRight}
          >
            <h3>Perjalanan Saya</h3>
            <div className="timeline-items">
              {timelineData.map((item, index) => (
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