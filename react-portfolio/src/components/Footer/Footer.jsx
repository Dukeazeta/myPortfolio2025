import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-column">
          <nav className="footer-nav">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <a
              href="https://www.self.so/duke-azeta"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-resume-link"
            >
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </nav>
        </div>

        {/* Middle Column */}
        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <a href="mailto:azetaduke@gmail.com">azetaduke@gmail.com</a>
          <a href="tel:+2348165237445">+234 816 523 7445</a>
        </div>

        {/* Right Column */}
        <div className="footer-column footer-social">
          <a 
            href="https://linkedin.com/in/duke-azeta" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Dukeazeta" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="https://x.com/Duke_Azeta_" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            X
          </a>
          <a 
            href="https://www.instagram.com/azetaduke" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Duke Azeta. All rights reserved.</p>
        <a href="#" onClick={handleBackToTop} className="back-to-top">
          Back to the top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
