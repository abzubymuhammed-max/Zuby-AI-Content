
import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Activities from './components/Activities.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
