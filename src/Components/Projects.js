import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => (
  <motion.section
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.7, duration: 0.6 }}
    className="projects-section"
  >
    <h3>Projects</h3>
    <ul>
      <li>✅ Project Management System (Django)</li>
      <li>✅ Java Academic Project</li>
      <li>✅ Marksheet Generator in C</li>
      <li>✅ School Management in C++</li>
      <li>✅ HealthPlus in Android App</li>
      <li>✅ Portfolio in React JS</li>
    </ul>
  </motion.section>
);

export default Projects;
