import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Also ensure document body is at top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Handle back navigation with animation
  const handleBackClick = (e) => {
    e.preventDefault();
    setIsExiting(true);

    // Wait for exit animation to complete before navigating
    setTimeout(() => {
      navigate('/');
    }, 800); // Match the exit animation duration
  };
  const projectsData = [
    {
      id: 1,
      title: 'FUPRE Sport Media',
      description: 'A comprehensive sports media platform for the Federal University of Petroleum Resources Effurun, featuring news, events, and sports coverage with a modern, responsive design.',
      image: '/assets/FSM.png',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://fupre-sports-media-web.vercel.app/sports',
      githubUrl: null // Add if available
    },
    {
      id: 2,
      title: 'TicTacKoko',
      description: 'A modern take on the classic Tic-tac-toe game built with Flutter, featuring a clean UI and state management with Provider.',
      image: '/assets/Tictackoko.jpg',
      tags: ['Flutter', 'Provider'],
      githubUrl: 'https://github.com/Dukeazeta/tictackoko',
      downloadUrl: '/apps/Tictackoko.apk',
      downloadName: 'TicTacKoko.apk'
    },
    {
      id: 3,
      title: 'WeatherKoko',
      description: 'A weather application built with Flutter, implementing BLoC pattern for state management and Provider for dependency injection.',
      image: '/assets/weatherkokodemo.jpg',
      tags: ['Flutter', 'BLoC', 'Provider'],
      githubUrl: 'https://github.com/Dukeazeta/weatherkoko',
      downloadUrl: '/apps/Weather%20Koko.apk',
      downloadName: 'WeatherKoko.apk'
    },
    {
      id: 4,
      title: 'TimerKoko',
      description: 'A minimalist timer application built with Flutter, featuring a clean and intuitive interface for time management.',
      image: '/assets/Timerkokodemo.jpg',
      tags: ['Flutter'],
      githubUrl: 'https://github.com/Dukeazeta/timerkoko',
      downloadUrl: '/apps/Timer%20KOKO.apk',
      downloadName: 'TimerKoko.apk'
    }
  ];

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Page Loading Overlay */}
      <motion.div
        className="page-loading-overlay"
        initial={{ scaleY: 1 }}
        animate={isExiting ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
          delay: isExiting ? 0 : 0
        }}
      />

      {/* Exit Animation Overlay */}
      <motion.div
        className="page-exit-overlay"
        initial={{ scaleY: 0 }}
        animate={isExiting ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Animated Background Elements */}
      <motion.div
        className="page-bg-elements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </motion.div>

      {/* Content Reveal Animation */}
      <motion.div
        className="page-content-wrapper"
        initial={{ y: 50, opacity: 0 }}
        animate={isExiting ?
          { y: -30, opacity: 0 } :
          { y: 0, opacity: 1 }
        }
        transition={{
          duration: isExiting ? 0.4 : 0.8,
          delay: isExiting ? 0 : 0.3,
          ease: [0.76, 0, 0.24, 1]
        }}
      >
        <div className="container">
          {/* Header Section */}
          <motion.div
            className="projects-page-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/" className="back-link" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
          </motion.div>
          <h1 className="projects-page-title">ALL PROJECTS</h1>
          <p className="projects-page-subtitle">
            A comprehensive showcase of my work spanning web development, mobile applications, 
            and digital solutions. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-page-grid"
          initial={{ opacity: 0, y: 40 }}
          animate={isExiting ?
            { opacity: 0, y: 20 } :
            { opacity: 1, y: 0 }
          }
          transition={{
            duration: isExiting ? 0.3 : 0.8,
            delay: isExiting ? 0.1 : 0.7,
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-large"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isExiting ?
                { opacity: 0, y: 30, scale: 0.95 } :
                { opacity: 1, y: 0, scale: 1 }
              }
              transition={{
                duration: isExiting ? 0.2 : 0.6,
                delay: isExiting ? (index * 0.05) : (0.9 + (index * 0.15)),
                ease: [0.76, 0, 0.24, 1]
              }}
              whileHover={!isExiting ? {
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              } : {}}
            >
              <div className="project-image-large">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description.split(',')[0]}`}
                />
                <div className="project-overlay">
                  <div className="project-links-overlay">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        className="project-link-overlay"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="ti ti-external-link"></i>
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        className="project-link-overlay"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="ti ti-brand-github"></i>
                        Source Code
                      </motion.a>
                    )}
                    {project.downloadUrl && (
                      <motion.a
                        href={project.downloadUrl}
                        className="project-link-overlay"
                        download={project.downloadName}
                        aria-label={`Download ${project.title}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="ti ti-download"></i>
                        Download
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content-large">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags-large">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag-large">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
