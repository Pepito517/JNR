import React from 'react';
import { PROFILE } from '../constants';
import { LinkedinIcon, MailIcon, LocationIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Hablemos de tu próximo desafío
            </h2>
            <p className="text-slate-400 text-base mb-6">
              Estoy siempre interesado en escuchar sobre nuevos proyectos y oportunidades de colaboración.
            </p>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-brand-400 group-hover:bg-brand-900 transition-colors">
                  <MailIcon className="w-4 h-4" />
                </div>
                <span className="text-sm">{PROFILE.email}</span>
              </a>
              
              <a 
                href={PROFILE.linkedinUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-brand-400 group-hover:bg-brand-900 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span className="text-sm">linkedin.com/in/josep-nunez-riba</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300 group">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-brand-400">
                  <LocationIcon className="w-4 h-4" />
                </div>
                <span className="text-sm">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-fit">
             <h3 className="text-lg font-semibold mb-3">¿Preguntas rápidas?</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Usa el <strong>asistente virtual</strong> (icono de chat abajo a la derecha) para obtener respuestas inmediatas sobre mi experiencia y disponibilidad, potenciado por inteligencia artificial.
             </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} {PROFILE.name}. Todos los derechos reservados.
        </div>
      </div>
    </section>
  );
};