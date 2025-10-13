import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_VARIANTS, SOCIAL_LINKS } from '../../utils/constants';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp,  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Contact.css';

const Contact = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const phoneNumber = '6283802157090'; // Nomor WhatsApp tanpa tanda +
    const message = `Halo, saya ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialIcons = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Twitter: <FaXTwitter />,
    Instagram: <FaInstagram />,
    Whatsapp: <FaWhatsapp />,
  };

  return (
    <section id="contact" ref={elementRef} className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <h2>Hubungi Saya</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <h3>Mari bicarakan proyek Anda</h3>
            <p>
              Saat ini saya Bersedia untuk pekerjaan lepas. Jangan ragu untuk menghubungi saya jika Anda mencari
              pengembang, memiliki pertanyaan, atau hanya ingin terhubung.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>rianpedia.com@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>083802157090</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Ilir Barat 2,Kota Palembang, Sumatera Selatan</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Hubungi Saya</h4>
              <div className="social-icons">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {socialIcons[social.name] || <FaEnvelope />}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={ANIMATION_VARIANTS.slideInRight}
          >
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;