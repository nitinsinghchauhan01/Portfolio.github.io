import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Learning from '../components/Learning';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Experience />
        <Learning />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
