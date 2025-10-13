import { getCurrentYear } from '../../utils/helpers';
import { SOCIAL_LINKS } from '../../utils/constants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = getCurrentYear();
  
 

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Jemi Arian</h3>
            <p>Menciptakan pengalaman digital yang indah</p>
          </div>
          
          
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} Jemi Arian. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;