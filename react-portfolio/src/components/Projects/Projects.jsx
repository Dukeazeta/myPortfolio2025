import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'TicTacKoko',
      description: 'A modern take on the classic Tic-tac-toe game built with Flutter, featuring a clean UI and state management with Provider.',
      image: '/assets/Tictackoko.jpg',
      tags: ['Flutter', 'Provider'],
      githubUrl: 'https://github.com/Dukeazeta/tictackoko',
      downloadUrl: '/apps/Tictackoko.apk',
      downloadName: 'TicTacKoko.apk'
    },
    {
      id: 2,
      title: 'WeatherKoko',
      description: 'A weather application built with Flutter, implementing BLoC pattern for state management and Provider for dependency injection.',
      image: '/assets/weatherkokodemo.jpg',
      tags: ['Flutter', 'BLoC', 'Provider'],
      githubUrl: 'https://github.com/Dukeazeta/weatherkoko',
      downloadUrl: '/apps/Weather%20Koko.apk',
      downloadName: 'WeatherKoko.apk'
    },
    {
      id: 3,
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
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>
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
                  <motion.a
                    href={project.downloadUrl}
                    className="project-link"
                    download={project.downloadName}
                    aria-label={`Download ${project.title} APK`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="ti ti-download"></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
