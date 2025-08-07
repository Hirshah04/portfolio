import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="resume-header"
  >
    <img src="/Hir.jpg" alt="Shah Hirkumar Priteshbhai" className="profile-img" width="150px" height="150px" />
    <h1>Shah Hirkumar Priteshbhai</h1>
    <h2>IT Student</h2>
    <div className="contact-row">
      <span>📞 +91 8980709577</span>
      <span>📧 shahhir0408@gmail.com</span>
      <span>📍 Paldi, Ahmedabad</span>
    </div>
  </motion.header>
);

export default Header;
