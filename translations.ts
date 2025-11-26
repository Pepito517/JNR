
import { TranslationStructure, Language } from './types';
import { PROFILE, IMAGES, LINKS, EDUCATION_DATA } from './constants';
import { EXPERIENCE_DATA } from './experienceInfo';

const getEducationData = (lang: Language) => {
  return {
    badge: lang === 'ca' ? "Formació continuada" : lang === 'es' ? "Formación continua" : "Continuous Learning",
    title: lang === 'ca' ? "Formació i Certificacions" : lang === 'es' ? "Formación y certificaciones" : "Education & Certifications",
    subtitle: lang === 'ca' ? "Compromís constant amb l'aprenentatge i la validació tècnica a través dels estàndards de la indústria." : lang === 'es' ? "Compromiso constante con el aprendizaje y la validación técnica a través de los estándares de la industria." : "Commitment to technical excellence requires constant learning and validation by industry standards.",
    academicTitle: lang === 'ca' ? "Formació Académica" : lang === 'es' ? "Formación Académica" : "Academic Background",
    professionalTitle: lang === 'ca' ? "Certificacions Professionals" : lang === 'es' ? "Certificaciones Profesionales" : "Professional Certifications",
    viewCredential: lang === 'ca' ? "Veure credencial" : lang === 'es' ? "Ver credencial" : "View credential",
    academic: EDUCATION_DATA.academic.map(item => ({
      id: item.id,
      degree: item.degree[lang],
      institution: item.institution,
      year: item.year[lang],
      logoUrl: item.logoUrl,
      description: item.description[lang]
    })),
    professional: EDUCATION_DATA.professional.map(vendor => ({
      id: vendor.id,
      name: vendor.name,
      logoUrl: vendor.logoUrl,
      tags: vendor.tags,
      certifications: vendor.certifications.map(cert => ({
        name: cert.name,
        image: cert.image,
        date: cert.date[lang],
        credentialUrl: cert.credentialUrl
      }))
    }))
  };
};

const getExperienceData = (lang: Language) => {
  return {
    title: lang === 'ca' ? "Trajectòria professional" : lang === 'es' ? "Trayectoria profesional" : "Professional Experience",
    subtitle: lang === 'ca' ? "Fes clic a les targetes per explorar el detall dels projectes." : lang === 'es' ? "Haz clic en las tarjetas para explorar el detalle de los proyectos." : "Click on the cards to explore project details.",
    detailTitle: lang === 'ca' ? "Detall de projectes" : lang === 'es' ? "Detalle de proyectos" : "Project Details",
    expand: lang === 'ca' ? "Veure projectes destacats" : lang === 'es' ? "Ver proyectos destacados" : "View featured projects",
    collapse: lang === 'ca' ? "Ocultar detalls" : lang === 'es' ? "Ocultar detalles" : "Hide details",
    items: EXPERIENCE_DATA.map(item => ({
      id: item.id,
      role: item.role,
      company: item.company,
      period: item.period[lang],
      description: item.description[lang],
      logoUrl: item.logoUrl,
      achievements: item.achievements.map(ach => ({
        year: ach.year,
        sector: ach.sector[lang],
        title: ach.title[lang],
        description: ach.description[lang]
      }))
    }))
  };
};

export const translations: Record<Language, TranslationStructure> = {
  ca: {
    nav: {
      about: "Sobre mi",
      services: "Serveis",
      education: "Formació",
      testimonials: "Testimonis",
      experience: "Experiència",
      contact: "Contactar"
    },
    hero: {
      badge: "Estratègia • Tecnologia • Innovació",
      title: "Consultor d'estratègia tecnològica",
      tagline: "Impulsant l'eficiència operativa i el creixement a través de la transformació digital i la intel·ligència artificial.",
      connect: "Connectar a LinkedIn",
      portfolio: "Veure portafoli"
    },
    about: {
      title: "Sobre mi",
      p1: "Consultor d'estratègia tecnològica orientat a resultats amb més de 10 anys d'experiència especialitzant-me en transformació digital, intel·ligència artificial i ciberseguretat. Compto amb un historial provat alineant iniciatives tecnològiques complexes amb objectius de negoci crítics per millorar dràsticament l'eficiència operativa i accelerar el creixement dels ingressos.",
      p2: "Com a consultor independent, combino visió estratègica amb un profund coneixement tècnic. El meu enfocament es centra en desmitificar la tecnologia per a l'alta direcció, permetent decisions informades que impulsan el creixement.",
      p3: "He treballat amb startups en fase de creixement i grans corporacions, adaptant metodologies àgils i arquitectures modernes a les necessitats específiques de cada negoci.",
      yearsLabel: "Anys d'experiència",
      projectsLabel: "Projectes executats"
    },
    services: {
      title: "Àrees d'especialització",
      subtitle: "Solucions estratègiques dissenyades per tancar la bretxa entre els objectius comercials i les capacitats tecnològiques més avançades.",
      items: [
        {
          id: "s1",
          title: "Estratègia IT i govern",
          description: "Alineació de roadmap tecnològic amb KPIs de negoci i gestió d'inversions.",
          iconName: "Strategy"
        },
        {
          id: "s2",
          title: "Arquitectura empresarial",
          description: "Disseny de mapes de capacitats, gestió de portafoli d'aplicacions i definició d'arquitectures objectiu.",
          iconName: "Architecture"
        },
        {
          id: "s3",
          title: "Transformació cloud i aplicacions",
          description: "Modernització d'arquitectures, estratègies de migració (6R) i disseny d'aplicacions natives al núvol.",
          iconName: "Cloud"
        },
        {
          id: "s4",
          title: "Intel·ligència artificial i GenAI",
          description: "Exploració de casos d'ús, desplegament d'agents intel·ligents i adopció d'IA Generativa.",
          iconName: "AI"
        }
      ]
    },
    education: getEducationData('ca'),
    testimonials: {
      title: "El que diuen els meus clients",
      subtitle: "L'impacte real es mesura en la satisfacció del client i els resultats tangibles del negoci.",
      items: [
        {
          id: "t1",
          quote: "La claredat estratègica del Josep i la seva visió de futur van transformar la nostra infraestructura heretada en una avantatge competitiu modern i àgil.",
          author: "Carlos M.",
          role: "CEO, Sector Retail"
        },
        {
          id: "t2",
          quote: "La seva capacitat per executar implementacions complexes d'IA i automatització sense interrompre les nostres operacions crítiques diàries va ser impressionant.",
          author: "Laura G.",
          role: "Directora de TI, Finances"
        },
        {
          id: "t3",
          quote: "El Josep no només va implementar nova tecnologia, sinó que va instaurar una cultura d'eficiència que va impactar positivament en la nostra rendibilitat des del primer trimestre.",
          author: "Marc R.",
          role: "Líder de Projecte, Logística"
        }
      ]
    },
    experience: getExperienceData('ca'),
    certifications: {
      title: "Certificacions i tecnologies"
    },
    caseStudies: {
      badge: "Casos d'Èxit",
      title: "Projectes amb Impacte",
      subtitle: "Resultats tangibles a través de l'estratègia i la tecnologia.",
      items: [
        {
          id: "cs1",
          title: "Modernització de Plataforma Bancària",
          client: "Banc Nacional Top 3",
          challengeTitle: "El Repte",
          challenge: "Sistemes 'legacy' monolíticos que frenaban el time-to-market de nuevos productos financieros.",
          approachTitle: "L'Enfocament",
          approach: "Disseny de arquitectura orientada a esdeveniments i migració gradual al núvol.",
          resultsTitle: "Resultats",
          results: ["Reducció del 40% en costos d'infraestructura", "Desplegament de features en dies en lloc de mesos"],
          cta: "Veure detalls"
        }
      ]
    },
    contact: {
      title: "Connectem",
      subtitle: "Sempre obert a parlar sobre tecnologia, estratègia i innovació. No dubtis a contactar per compartir idees o explorar sinergies.",
      location: "Barcelona, Espanya",
      rights: "Tots els drets reservats."
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      services: "Servicios",
      education: "Formación",
      testimonials: "Testimonios",
      experience: "Experiencia",
      contact: "Contactar"
    },
    hero: {
      badge: "Estrategia • Tecnología • Innovación",
      title: "Consultor de estrategia tecnológica",
      tagline: "Impulsando la eficiencia operativa y el crecimiento a través de la transformación digital y la inteligencia artificial.",
      connect: "Conectar en LinkedIn",
      portfolio: "Ver portafolio"
    },
    about: {
      title: "Sobre mí",
      p1: "Consultor de estrategia tecnológica orientado a resultados con más de 10 años de experiencia especializándome en transformación digital, inteligencia artificial y ciberseguridad. Cuento con un historial probado alineando iniciativas tecnológicas complejas con objetivos de negocio críticos para mejorar drásticamente la eficiencia operativa y acelerar el crecimiento de los ingresos.",
      p2: "Como consultor independiente, combino visión estratégica con un profundo conocimiento técnico. Mi enfoque se centra en desmitificar la tecnología para la alta dirección, permitiendo decisiones informadas que impulsan el crecimiento.",
      p3: "He trabajado con startups en fase de crecimiento y grandes corporaciones, adaptando metodologías ágiles y arquitecturas modernas a las necesidades específicas de cada negocio.",
      yearsLabel: "Años de experiencia",
      projectsLabel: "Proyectos ejecutados"
    },
    services: {
      title: "Áreas de especialización",
      subtitle: "Soluciones estratégicas diseñadas para cerrar la brecha entre los objetivos comerciales y las capacidades tecnológicas más avanzadas.",
      items: [
        {
          id: "s1",
          title: "Estrategia IT y gobierno",
          description: "Alineación de roadmap tecnológico con KPIs de negocio y gestión de inversiones.",
          iconName: "Strategy"
        },
        {
          id: "s2",
          title: "Arquitectura empresarial",
          description: "Diseño de mapas de capacidades, gestión de portafolio de aplicaciones y definición de arquitecturas objetivo.",
          iconName: "Architecture"
        },
        {
          id: "s3",
          title: "Transformación cloud y aplicaciones",
          description: "Modernización de arquitecturas, estrategias de migración (6R) y diseño de aplicaciones nativas en la nube.",
          iconName: "Cloud"
        },
        {
          id: "s4",
          title: "Inteligencia artificial y GenAI",
          description: "Exploración de casos de uso, despliegue de agentes inteligentes y adopción de IA Generativa.",
          iconName: "AI"
        }
      ]
    },
    education: getEducationData('es'),
    testimonials: {
      title: "Lo que dicen mis clientes",
      subtitle: "El impacto real se mide en la satisfacción del cliente y los resultados tangibles del negocio.",
      items: [
        {
          id: "t1",
          quote: "La claridad estratégica de Josep y su visión de futuro transformaron nuestra infraestructura heredada en una ventaja competitiva moderna y ágil.",
          author: "Carlos M.",
          role: "CEO, Sector Retail"
        },
        {
          id: "t2",
          quote: "Su capacidad para ejecutar implementaciones complejas de IA y automatización sin interrumpir nuestras operaciones críticas diarias fue impresionante.",
          author: "Laura G.",
          role: "Directora de TI, Finanzas"
        },
        {
          id: "t3",
          quote: "Josep no solo implementó nueva tecnología, sinó que instauró una cultura de eficiencia que impactó positivamente en nuestra rentabilidad desde el primer trimestre.",
          author: "Marc R.",
          role: "Líder de Proyecto, Logística"
        }
      ]
    },
    experience: getExperienceData('es'),
    certifications: {
      title: "Certificaciones y tecnologías"
    },
    caseStudies: {
      badge: "Casos de Éxito",
      title: "Proyectos con Impacto",
      subtitle: "Resultados tangibles a través de la estrategia y la tecnología.",
      items: [
        {
          id: "cs1",
          title: "Modernización de Plataforma Bancaria",
          client: "Banco Nacional Top 3",
          challengeTitle: "El Reto",
          challenge: "Sistemas 'legacy' monolíticos que frenaban el time-to-market de nuevos productos financieros.",
          approachTitle: "El Enfoque",
          approach: "Diseño de arquitectura orientada a eventos y migración gradual a la nube.",
          resultsTitle: "Resultados",
          results: ["Reducción del 40% en costes de infraestructura", "Despliegue de features en días en lugar de meses"],
          cta: "Ver detalles"
        }
      ]
    },
    contact: {
      title: "Conectemos",
      subtitle: "Siempre abierto a hablar sobre tecnología, estrategia e innovación. No dudes en contactar para compartir ideas o explorar sinergias.",
      location: "Barcelona, España",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      about: "About me",
      services: "Services",
      education: "Education",
      testimonials: "Testimonials",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      badge: "Strategy • Technology • Innovation",
      title: "Technology Strategy Consultant",
      tagline: "Driving operational efficiency and growth through digital transformation and artificial intelligence.",
      connect: "Connect on LinkedIn",
      portfolio: "View Portfolio"
    },
    about: {
      title: "About me",
      p1: "Results-oriented Technology Strategy Consultant with over 10 years of experience specializing in digital transformation, artificial intelligence, and cybersecurity. I have a proven track record of aligning complex technology initiatives with critical business goals to dramatically improve operational efficiency and accelerate revenue growth.",
      p2: "As an independent consultant, I combine strategic vision with deep technical knowledge. My focus is on demystifying technology for senior management, enabling informed decisions that drive growth.",
      p3: "I have worked with growing startups and large corporations, adapting agile methodologies and modern architectures to the specific needs of each business.",
      yearsLabel: "Years of Experience",
      projectsLabel: "Projects Executed"
    },
    services: {
      title: "Areas of Expertise",
      subtitle: "Strategic solutions designed to bridge the gap between business goals and the most advanced technological capabilities.",
      items: [
        {
          id: "s1",
          title: "IT Strategy & Governance",
          description: "Aligning technology roadmap with business KPIs and investment management.",
          iconName: "Strategy"
        },
        {
          id: "s2",
          title: "Enterprise Architecture",
          description: "Capability map design, application portfolio management, and target architecture definition.",
          iconName: "Architecture"
        },
        {
          id: "s3",
          title: "Cloud & App Transformation",
          description: "Architecture modernization, migration strategies (6R), and cloud-native application development.",
          iconName: "Cloud"
        },
        {
          id: "s4",
          title: "AI & GenAI",
          description: "Use case exploration, intelligent agent deployment, and Generative AI adoption.",
          iconName: "AI"
        }
      ]
    },
    education: getEducationData('en'),
    testimonials: {
      title: "What My Clients Say",
      subtitle: "Real impact is measured in customer satisfaction and tangible business results.",
      items: [
        {
          id: "t1",
          quote: "Josep's strategic clarity and vision for the future transformed our legacy infrastructure into a modern and agile competitive advantage.",
          author: "Carlos M.",
          role: "CEO, Retail Sector"
        },
        {
          id: "t2",
          quote: "His ability to execute complex AI and automation implementations without disrupting our critical daily operations was impressive.",
          author: "Laura G.",
          role: "IT Director, Finance"
        },
        {
          id: "t3",
          quote: "Josep not only implemented new technology but also instilled a culture of efficiency that positively impacted our profitability from the first quarter.",
          author: "Marc R.",
          role: "Project Leader, Logistics"
        }
      ]
    },
    experience: getExperienceData('en'),
    certifications: {
      title: "Certifications and Technologies"
    },
    caseStudies: {
      badge: "Success Stories",
      title: "Impactful Projects",
      subtitle: "Tangible results through strategy and technology.",
      items: [
        {
          id: "cs1",
          title: "Banking Platform Modernization",
          client: "Top 3 National Bank",
          challengeTitle: "The Challenge",
          challenge: "Monolithic legacy systems hindering time-to-market for new financial products.",
          approachTitle: "The Approach",
          approach: "Design of event-driven architecture and gradual migration to the cloud.",
          resultsTitle: "Results",
          results: ["40% reduction in infrastructure costs", "Feature deployment in days instead of months"],
          cta: "View details"
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Always open to discussing technology, strategy, and innovation. Feel free to reach out to share ideas or explore synergies.",
      location: "Barcelona, Spain",
      rights: "All rights reserved."
    }
  }
};
