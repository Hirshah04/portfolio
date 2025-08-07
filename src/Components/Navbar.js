import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">My Portfolio
      <ul className="navbar-links">
        <li><a href="./About">About</a></li>
        <li><a href="./Projects">Projects</a></li>
        <li><a href="./Education">Education</a></li>
        <li><a href="./Skills">Skills</a></li>
      </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
