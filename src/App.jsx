import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Schools from './components/Schools';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certs from './components/Certs';
import Contact from './components/Contact';
import './index.css';
import './styles/tailwind.css';

export default function App() {
  return (
    <Router>
      <div className="text-gray-800 bg-bg">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Journey />
              <Skills />
              <Certs />
              <Schools />
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
