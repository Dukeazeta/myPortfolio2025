import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from '../AnimatedText/AnimatedText';
import './About.css';

const About = () => {
  const timelineData = [
    {
      date: '2025 - Present',
      title: 'IT Support Intern',
      company: 'Sancta Maria Catholic College of Nursing Science',
      location: 'Hybrid',
      description: 'Providing comprehensive IT support services including system maintenance, troubleshooting technical issues, and ensuring optimal performance of college infrastructure. Supporting faculty and students with technology needs and implementing efficient IT solutions.'
    },
    {
      date: '2024 - Present',
      title: 'Flutter Developer',
      company: 'KOKO Labs',
      location: 'Remote',
      description: 'Building and maintaining mobile applications using Flutter. Working on innovative solutions and implementing best practices in mobile development.'
    },
    {
      date: '2024 - Present',
      title: 'Web Management Team',
      company: 'FUPRE Sport Media',
      location: 'Remote',
      description: 'Managing and maintaining FSM web platform, ensuring optimal performance and user experience. Implementing modern web technologies and best practices for sports media content delivery.'
    },
    {
      date: '2024 - Present',
      title: 'Campus Lead',
      company: 'Cowrywise @FUPRE',
      location: 'Hybrid',
      description: 'Leading financial literacy initiatives at the Federal University of Petroleum Resources Effurun (FUPRE), organizing workshops, and building a community of financially aware students.'
    },
    {
      date: '2022 - 2024',
      title: 'Freelance Flutter Developer',
      company: 'Self-Employed',
      location: 'Remote',
      description: 'Developed custom mobile applications for various clients using Flutter. Delivered high-quality solutions while managing multiple projects independently.'
    },
    {
      date: '2021',
      title: 'Content Creator Intern',
      company: 'MOBIcure',
      location: 'Onsite',
      description: 'Created engaging content for digital platforms, contributed to social media strategy, and assisted in content marketing initiatives.'
    },
    {
      date: '2020 - Present',
      title: 'Freelance Frontend Developer',
      company: 'Self-Employed',
      location: 'Remote',
      description: 'Building responsive and user-friendly web applications using modern frontend technologies. Collaborating with clients to deliver tailored solutions.'
    }
  ];

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="section-title">
          <AnimatedHeading delay={0.2}>ABOUT</AnimatedHeading>
        </h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-intro">
              <h3>
                <AnimatedHeading delay={0.4}>I'm a passionate software developer with a keen eye for creating elegant solutions.</AnimatedHeading>
              </h3>
              <AnimatedParagraph delay={0.6}>
                My journey in tech has been driven by curiosity and a desire to build minimalistic
                solutions with core functionality. I specialize in creating scalable, fast and mobile-first
                web applications that deliver exceptional user experiences.
              </AnimatedParagraph>
              <AnimatedParagraph delay={0.8}>
                Currently working at Sancta Maria Catholic College of Nursing Science as a IT Support Intern, providing comprehensive IT support services including system maintenance, troubleshooting technical issues, and ensuring optimal performance of college infrastructure.
              </AnimatedParagraph>
            </div>
          </motion.div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-company">{item.company}</div>
                  <div className="timeline-location">{item.location}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
