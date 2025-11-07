import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">My Portfolio</div>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle navigation"
        onClick={() => setOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <a href="#header" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#skills" className="nav-link">Skills</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
