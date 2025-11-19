import React from 'react';

const LOGOS = [
  {
    name: "AWS",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    name: "Microsoft Azure",
    url: "https://www.bizstream.com/wp-content/uploads/2022/04/microsoft-azure-logo.png"
  },
  {
    name: "Google Cloud",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
  },
  {
    name: "The Open Group",
    url: "https://image.makewebeasy.net/makeweb/m_750x0/VC8hKuwUh/PartnerLogos/togaf.png"
  },
  {
    name: "SAFe",
    url: "https://scrumcraft.com/wp-content/uploads/2024/01/SAI_temp-logo_dteal.png" 
  },
  {
    name: "Ardoq",
    url: "https://images.credly.com/images/074823c7-1b50-453c-ad9e-d254b1d89237/large_blob.png"
  },
  {
    name: "LeanIX",
    url: "https://confare.at/wp-content/uploads/Logo_LeanIX-RGB__horizontal_duotone_flat.png"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
          Certificaciones y tecnologías
        </h3>
      </div>
      
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {/* First Loop */}
          {LOGOS.map((logo, index) => (
            <li key={`1-${index}`}>
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-12 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
              />
            </li>
          ))}
          {/* Second Loop (Duplicate for seamless scroll) */}
          {LOGOS.map((logo, index) => (
            <li key={`2-${index}`}>
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-12 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};