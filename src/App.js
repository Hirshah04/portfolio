// App.js
import React from 'react';
import {Route , Routes} from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Header from './Components/Header';
import Education from './Components/Education';
import About from './Components/About';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';

const App = () => (
  <div className="resume-main">
    <Navbar />
    <section id="header"><Header /></section>
    <section id="about"><About /></section>
    <section id="projects"><Projects /></section>
    <section id="education"><Education /></section>
    <section id="skills"><Skills /></section>
  </div>
);

export default App;
