import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Propuesta', path: '/propuesta' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
        {/* Colorful Vibrant Logo */}
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <div className="flex flex-col gap-0 leading-none">
            <span className="text-3xl font-black font-display tracking-tight flex items-baseline">
              <span className="text-brand-coral">E</span>
              <span className="text-brand-yellow">u</span>
              <span className="text-brand-green">r</span>
              <span className="text-brand-purple">e</span>
              <span className="text-brand-blue relative">k<span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-blue rounded-full"></span></span>
              <span className="text-brand-pink">a</span>
            </span>
            <span className="text-[10px] font-black text-brand-purple uppercase tracking-tighter self-end -mt-1">Nido - Guardería</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-all relative py-2 ${location.pathname === link.path ? 'text-brand-coral' : 'text-brand-purple hover:text-brand-coral'
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-coral rounded-full"></span>
              )}
            </Link>
          ))}
          <Link
            to="/admision"
            className="bg-brand-purple hover:scale-105 active:scale-95 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-purple/25 transition-all"
          >
            Matrícula 2026
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-brand-purple hover:bg-slate-50 rounded-xl transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[9999] md:hidden transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-brand-purple/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <nav className="absolute right-0 top-0 bottom-0 w-[85%] bg-[#ffffff] shadow-2xl p-10 flex flex-col gap-8 rounded-l-[3rem] z-[10000]" style={{ backgroundColor: '#ffffff', opacity: 1, minHeight: '100vh' }}>
          {/* Mobile Menu Header with Logo */}
          <div className="flex justify-between items-center mb-8 relative z-10">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex flex-col gap-0 leading-none">
              <span className="text-3xl font-black font-display tracking-tight flex items-baseline">
                <span className="text-brand-coral">E</span>
                <span className="text-brand-yellow">u</span>
                <span className="text-brand-green">r</span>
                <span className="text-brand-purple">e</span>
                <span className="text-brand-blue relative">k<span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-blue rounded-full"></span></span>
                <span className="text-brand-pink">a</span>
              </span>
              <span className="text-[9px] font-black text-brand-purple uppercase tracking-tighter self-end -mt-0.5">Nido - Guardería</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full hover:bg-slate-100 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-slate-500">close</span>
            </button>
          </div>

          {/* Decorative Playful Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/10 rounded-bl-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pink/5 rounded-tr-[100px] pointer-events-none"></div>
          <div className="absolute bottom-32 right-8 w-6 h-6 rounded-full bg-brand-green/20 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-40 left-8 w-4 h-4 rounded-full bg-brand-blue/30 animate-pulse pointer-events-none"></div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-black transition-colors ${location.pathname === link.path ? 'text-brand-coral' : 'text-brand-purple'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto">
            <Link
              to="/admision"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-brand-purple text-white p-6 rounded-2xl font-black text-lg shadow-xl"
            >
              Matrícula 2026
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
