import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  'Project Management System in Django',
  'Java Academic Project',
  'Marksheet Generator in C',
  'School Management in C++',
  'HealthPlus Android App',
  'Portfolio in React JS',
  'Movie Ticket Booking System in MERN (OnGoing)'
];

const Projects = () => (
  <motion.section
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.7, duration: 0.6 }}
    className="projects-section"
  >
    <h3>Projects</h3>

    <div className="projects-grid">
      {projectList.map((p, i) => (
        <div key={i} className="project-card">✅ {p}</div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
