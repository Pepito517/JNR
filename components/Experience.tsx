import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { ChevronDownIcon, BriefcaseIcon } from './Icons';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Helper function to parse the achievement string
  // Expected format: "YEAR: SECTOR - TITLE: DESCRIPTION"
  const parseAchievement = (text: string) => {
    const firstColonIndex = text.indexOf(':');
    if (firstColonIndex === -1) return { description: text };

    const year = text.substring(0, firstColonIndex).trim();
    const remainder1 = text.substring(firstColonIndex + 1).trim();

    const hyphenIndex = remainder1.indexOf(' - ');
    if (hyphenIndex === -1) {
      // Try to see if there is just a title and description without sector separator
      // Or just return everything as description if format doesn't match
      return { year, description: remainder1 };
    }

    const sector = remainder1.substring(0, hyphenIndex).trim();
    const remainder2 = remainder1.substring(hyphenIndex + 3).trim();

    const secondColonIndex = remainder2.indexOf(':');
    if (secondColonIndex === -1) {
      return { year, sector, title: remainder2 };
    }

    const title = remainder2.substring(0, secondColonIndex).trim();
    const description = remainder2.substring(secondColonIndex + 1).trim();

    return { year, sector, title, description };
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trayectoria profesional
          </h2>
          <p className="text-slate-500 text-sm">
            Haz clic en cada experiencia para ver los proyectos detallados.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {EXPERIENCE.map((item) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <div key={item.id} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* Timeline Dot */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 ${isExpanded ? 'bg-brand-600' : 'bg-slate-300 group-hover:bg-brand-400'}`}>
                  <BriefcaseIcon className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-slate-600'}`} />
                </div>
                
                {/* Content Card */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white rounded-xl border shadow-sm transition-all duration-300 cursor-pointer overflow-hidden
                    ${isExpanded 
                      ? 'border-brand-200 shadow-lg ring-1 ring-brand-100' 
                      : 'border-slate-100 hover:border-brand-200 hover:shadow-md'
                    }`}
                >
                  {/* Header Part (Always Visible) */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                       <img 
                          src={item.logoUrl} 
                          alt={`Logo ${item.company}`} 
                          className="h-8 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                       <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded-md whitespace-nowrap shrink-0 ml-2">
                        {item.period}
                      </span>
                    </div>

                    <h3 className={`font-bold text-lg transition-colors duration-300 ${isExpanded ? 'text-brand-700' : 'text-slate-900'}`}>
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-500 mt-1">{item.company}</div>
                    
                    {/* Short Description */}
                     <p className={`text-slate-600 text-sm mt-3 leading-relaxed transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-80 line-clamp-2'}`}>
                      {item.description}
                    </p>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-center mt-4 md:hidden">
                       <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Details (Projects) */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out bg-slate-50 ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-2 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">Principales proyectos</h4>
                        <ul className="space-y-6">
                          {item.achievements.map((achievement, i) => {
                            const { year, sector, title, description } = parseAchievement(achievement);

                            return (
                              <li key={i} className="flex items-start text-sm text-slate-700 group/item relative pl-4 border-l-2 border-brand-100 hover:border-brand-400 transition-colors">
                                <div className="flex flex-col gap-1.5 w-full">
                                  {year ? (
                                    <div className="flex flex-wrap items-center gap-2 text-xs mb-0.5">
                                      <span className="font-mono font-medium text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-100">
                                        {year}
                                      </span>
                                      {sector && (
                                        <span className="text-slate-500 font-bold uppercase tracking-wide text-[10px]">
                                          {sector}
                                        </span>
                                      )}
                                    </div>
                                  ) : null}
                                  
                                  {title ? (
                                    <strong className="block text-slate-900 text-base leading-tight">
                                      {title}
                                    </strong>
                                  ) : null}
                                  
                                  <span className="text-slate-600 leading-relaxed">
                                    {description}
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Hover Indicator (Only visible on hover if not expanded) */}
                  <div className={`hidden md:flex justify-center pb-2 transition-opacity duration-300 ${isExpanded ? 'opacity-0 hidden' : 'opacity-0 group-hover:opacity-100'}`}>
                    <ChevronDownIcon className="w-5 h-5 text-slate-300" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};