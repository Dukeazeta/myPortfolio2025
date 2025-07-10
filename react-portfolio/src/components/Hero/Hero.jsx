import React from 'react';
import './Hero.css';

const Hero = () => {

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">DUKE AZETA</h1>
            <div className="hero-role">
              <h2 className="role-title">SOFTWARE ENGINEER</h2>
              <div className="role-typing">
                <span className="role-text">Junior</span>
              </div>
            </div>
            <div className="hero-description">
              <p>I'm a junior software engineer who enjoys building minimal, efficient apps and solutions. I'm constantly growing and I am interested in opportunities to help improve.</p>
              <div className="hero-status">
                <span className="status-indicator">Currently at <strong>Sancta Maria Catholic College of Nursing Science</strong>, Open for freelance project and collaboration</span>
              </div>
            </div>
            <div className="hero-cta">
              <a
                href="#contact"
                className="contact-btn"
                onClick={handleScrollToContact}
              >
                CONTACT ME
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img
                src="/assets/Duke.A @google.png"
                alt="Duke Azeta"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-skills">
          <div className="skills-marquee">
            <span>REACT.JS</span>
            <span>•</span>
            <span>TAILWIND CSS</span>
            <span>•</span>
            <span>JAVASCRIPT</span>
            <span>•</span>
            <span>TYPESCRIPT</span>
            <span>•</span>
            <span>FRAMER MOTION</span>
            <span>•</span>
            <span>FLUTTER</span>
            <span>•</span>
            <span>NEXTJS</span>
            <span>•</span>
            <span>FIREBASE</span>
            <span>•</span>
            <span>CSS</span>
            <span>•</span>
            <span>THREE.JS</span>
            <span>•</span>
            <span>GIT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
