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
import { ChatBot } from './components/ChatBot';

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
      
      {/* AI Assistant Integration */}
      <ChatBot />
      
      {/* API Key Warning for Developer (Hidden in production if setup correctly) */}
      {!process.env.API_KEY && (
        <div className="fixed bottom-0 left-0 w-full bg-yellow-100 text-yellow-800 text-xs p-2 text-center z-[100]">
          <strong>Modo Demo:</strong> Configura <code>process.env.API_KEY</code> para habilitar el chat con Gemini AI.
        </div>
      )}
    </div>
  );
}

export default App;