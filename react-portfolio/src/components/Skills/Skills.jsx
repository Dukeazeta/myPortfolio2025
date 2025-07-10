import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      name: 'Flutter',
      icon: 'ti ti-brand-flutter'
    },
    {
      name: 'Git',
      icon: 'ti ti-brand-git'
    },
    {
      name: 'GitHub',
      icon: 'ti ti-brand-github'
    },
    {
      name: 'HTML',
      icon: 'ti ti-brand-html5'
    },
    {
      name: 'CSS',
      icon: 'ti ti-brand-css3'
    },
    {
      name: 'React',
      icon: 'ti ti-brand-react'
    },
    {
      name: 'JavaScript',
      icon: 'ti ti-brand-javascript'
    },
    {
      name: 'Dart',
      icon: 'ti ti-code'
    }
  ];

  return (
    <motion.section
      id="skills"
      className="skills-section"
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
          SKILLS
        </motion.h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
