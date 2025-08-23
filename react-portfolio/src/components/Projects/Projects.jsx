import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedHeading, RevealText } from '../AnimatedText/AnimatedText';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'FUPRE Sport Media',
      description: 'A comprehensive sports media platform for the Federal University of Petroleum Resources Effurun, featuring news, events, and sports coverage.',
      image: '/assets/FSM.png',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      liveUrl: 'https://fupre-sports-media-web.vercel.app/sports'
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
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="section-title">
          <RevealText delay={0.2}>
            <AnimatedHeading>PROJECTS</AnimatedHeading>
          </RevealText>
        </h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              data-magnetic
              data-cursor-text="View Project"
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description.split(',')[0]}`}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      data-magnetic
                      data-cursor-text="View Live"
                      data-cursor-variant="external"
                    >
                      <i className="ti ti-external-link"></i>
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="ti ti-brand-github"></i>
                    </motion.a>
                  )}
                  {project.downloadUrl && (
                    <motion.a
                      href={project.downloadUrl}
                      className="project-link"
                      download={project.downloadName}
                      aria-label={`Download ${project.title} APK`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      data-magnetic
                      data-cursor-text="Download"
                      data-cursor-variant="download"
                    >
                      <i className="ti ti-download"></i>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="view-all-btn"
            data-magnetic
            data-cursor-text="See All Work"
          >
            <span>View All Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
