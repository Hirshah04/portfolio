import React from 'react';
import { motion } from 'framer-motion';

const Education = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.8 }}
    className="education-section"
  >
    <h3>Education</h3>
    <ul>
      <li>MSCIT - L.J University (Pursuing)</li>
      <li>BSc IT – L.J University</li>
      <li>H.S.C – Gujarat Board, 65% (Mar 2022)</li>
      <li>S.S.C – Gujarat Board, 50% (Mar 2020)</li>
    </ul>
  </motion.section>
);

export default Education;
