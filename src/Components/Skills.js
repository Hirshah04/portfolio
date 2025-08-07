import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.1, duration: 0.5 }}
    className="side-skills"
  >
    <h3>Languages Known</h3>
    <p>Gujarati, English, Hindi</p>
    <h3>Technical Skills</h3>
    <div className="skills-tags">
      <span>C</span>
      <span>C++</span>
      <span>Java</span>
      <span>Python</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>SQL</span>
      <span>React JS</span>
      <span>Django</span>
    </div>
    <h3>Soft Skills</h3>
    <div className="skills-tags">
      <span>Teamwork</span>
      <span>Team Leader</span>
      <span>Quick Learner</span>
      <span>Problem Solver</span>
      <span>Time Management</span>
      <span>Communication</span>
      <span>Adaptability</span>
    </div>
  </motion.section>
);

export default Skills;
