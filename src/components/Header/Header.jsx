import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_ITEMS } from '../../utils/constants';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/" onClick={closeMenu}>Jemi Arian</a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <ul className="nav-list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name} className="nav-item">
                    <a 
                      href={item.path} 
                      onClick={closeMenu}
                      aria-label={item.name}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="nav-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className="nav-item">
              <a 
                href={item.path} 
                onClick={closeMenu}
                aria-label={item.name}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;