// App.js
import React from 'react';
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
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Education/>
    <Certificates/>
    <Skills/>
  </div>
);

export default App;
