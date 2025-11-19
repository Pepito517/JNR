import React from 'react';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative group max-w-md mx-auto lg:mx-0 w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200 shadow-2xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEuE02DCqQnwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668694478777?e=1765411200&v=beta&t=b6KmfkfwYnrPaM_sGYsZmab9cK1GXIiQlErNp4mX45M" 
                alt={PROFILE.name} 
                className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Sobre mí
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                {PROFILE.about}
              </p>
              <p>
                Como consultor independiente, combino visión estratégica con un profundo conocimiento técnico. Mi enfoque se centra en desmitificar la tecnología para la alta dirección, permitiendo decisiones informadas que impulsan el crecimiento.
              </p>
              <p>
                He trabajado con startups en fase de crecimiento y grandes corporaciones, adaptando metodologías ágiles y arquitecturas modernas a las necesidades específicas de cada negocio.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 transition-colors">
                <h4 className="font-bold text-3xl text-brand-600 mb-1">10+</h4>
                <p className="text-sm text-slate-500">Años de experiencia</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 transition-colors">
                <h4 className="font-bold text-3xl text-brand-600 mb-1">25+</h4>
                <p className="text-sm text-slate-500">Proyectos liderados</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};