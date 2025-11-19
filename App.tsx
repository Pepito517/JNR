import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
