import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Certs from './components/Certs';
import Schools from './components/Schools';
import Projects from './components/Projects';
import Notes from './components/Notes';
import Contact from './components/Contact';
import './index.css';
import './styles/tailwind.css';

export default function App() {
  return (
    <Router>
      <div className="text-[#eeeeff] bg-[#081424] min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={
            <div className="w-full flex flex-col items-center justify-center">
              <Hero />
              <About />
              <Journey />
              <Skills />
              <Certs />
              <Schools />
              <Projects />
              <Notes />
              <Contact />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
