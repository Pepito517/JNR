import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Casos de éxito', href: '#work' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Experiencia', href: '#experience' },
  ];

  // Determine header styles based on state
  // If menu is open, force transparent background and white text so the overlay (z-40) shows through
  const headerBgClass = mobileMenuOpen 
    ? 'bg-transparent' 
    : isScrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-sm' 
      : 'bg-transparent';

  const headerTextColorClass = mobileMenuOpen 
    ? 'text-white' 
    : isScrolled 
      ? 'text-brand-900' 
      : 'text-white';
      
  const navLinkColorClass = isScrolled ? 'text-slate-600' : 'text-slate-200';
  const hamburgerColorClass = mobileMenuOpen ? 'text-white' : (isScrolled ? 'text-slate-900' : 'text-white');

  return (
    <>
      {/* Main Header Bar - Z-Index 50 to stay on top of the menu overlay */}
      <header 
        className={`fixed top-0 w-full transition-all duration-300 z-50 ${headerBgClass} ${isScrolled ? 'py-3' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${headerTextColorClass}`}>
            JNR<span className="text-brand-500">.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-brand-500 transition-colors cursor-pointer ${navLinkColorClass}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                isScrolled 
                  ? 'bg-brand-900 text-white hover:bg-brand-800' 
                  : 'bg-white text-brand-900 hover:bg-slate-100'
              }`}
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
               <CloseIcon className="w-8 h-8 text-white" />
            ) : (
               <MenuIcon className={`w-6 h-6 ${hamburgerColorClass}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Sibling to Header (Z-Index 40) 
          Moved outside <header> to avoid backdrop-filter clipping/context issues */}
      <div 
        className={`fixed inset-0 bg-brand-900 z-40 transition-transform duration-300 flex flex-col justify-center items-center ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center items-center w-full px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-serif text-white hover:text-brand-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-4 px-8 py-3 rounded-full border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-brand-900 transition-all cursor-pointer"
          >
            Contactar
          </a>
        </nav>
      </div>
    </>
  );
};