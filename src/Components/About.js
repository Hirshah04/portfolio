import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.6 }}
    className="about-section"
  >
    <h3>About Me</h3>
    <p>
      Highly-motivated IT student at L.J University, passionate about coding and problem-solving.
      Skilled in C, C++, Java, Python, and web technologies. Quick-learner with hands-on academic project experience.
    </p>
  </motion.section>
);

export default About;
