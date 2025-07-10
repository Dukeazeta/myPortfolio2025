import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on homepage, just scroll to section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Close Button */}
      <button
        className={`mobile-close-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Mobile Menu Content */}
      <div className={`mobile-menu-content ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <ul className="nav-menu">
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-footer">
          <div className="mobile-socials-title">SOCIALS</div>
          <div className="mobile-socials">
            <a
              href="https://linkedin.com/in/duke-azeta"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Dukeazeta"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              GitHub
            </a>
            <a
              href="https://x.com/Duke_Azeta_"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/azetaduke"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <svg
                className="sun-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg
                className="moon-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
          </div>

          <div className="nav-right">
            {/* Desktop Navigation Links */}
            <ul className="nav-menu desktop-nav">
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  CONTACT
                </a>
              </li>
            </ul>

            {/* Hamburger Menu for Mobile */}
            <div
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
