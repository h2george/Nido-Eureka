import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple text-white relative overflow-hidden pt-24 pb-12">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Main CTA Section - Now more vibrant */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-pink rounded-[3rem] blur-xl opacity-30 transform translate-y-4"></div>
          <div className="bg-white p-10 md:p-14 rounded-[3rem] relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-white/50">
            {/* Background doodle/pattern for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-xl z-10 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-brand-purple/5 rounded-full mb-4">
                <span className="text-brand-purple font-black text-xs uppercase tracking-widest">¡Inscripciones Abiertas!</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-brand-purple mb-4 leading-tight">
                ¿Listo para la aventura?
              </h3>
              <p className="text-slate-500 text-lg font-body leading-relaxed">
                Agenda hoy mismo una visita guiada y descubre por qué Eureka es el segundo hogar ideal para tu hijo. <span className="text-brand-coral font-bold">¡Cupos limitados 2026!</span>
              </p>
            </div>

            <Link
              to="/admision"
              onClick={() => window.scrollTo(0, 0)}
              className="group relative z-10 bg-brand-coral text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all whitespace-nowrap overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Agendar Visita Ahora
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">calendar_month</span>
              </span>
              <div className="absolute inset-0 bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-white/10 pt-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex flex-col gap-0 leading-none">
                <span className="text-4xl font-black font-display tracking-tight flex items-baseline filter drop-shadow-lg">
                  <span className="text-brand-coral">E</span>
                  <span className="text-brand-yellow">u</span>
                  <span className="text-brand-green">r</span>
                  <span className="text-white">e</span>
                  <span className="text-brand-blue">k</span>
                  <span className="text-brand-pink">a</span>
                </span>
                <span className="text-xs font-black text-brand-blue uppercase tracking-[0.3em] ml-1 mt-1">Nido - Guardería</span>
              </div>
            </Link>
            <p className="text-white/80 text-base leading-relaxed font-body max-w-sm">
              Cultivando mentes curiosas y corazones felices desde el primer paso. Educación inicial de vanguardia en San Isidro.
            </p>

            <div className="flex gap-4 pt-2">
              {[
                { icon: "star", color: "bg-brand-yellow" },
                { icon: "favorite", color: "bg-brand-pink" },
                { icon: "school", color: "bg-brand-blue" }
              ].map((item, i) => (
                <div key={i} className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-sm font-bold">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links - Updated Order */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="font-black text-base uppercase tracking-widest text-brand-yellow flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-yellow rounded-full"></span>
              Menú
            </h4>
            <ul className="space-y-4 font-bold text-base">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Nuestra Propuesta', path: '/propuesta' },
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Matrícula 2026', path: '/admision' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex items-center gap-2 text-white/70 hover:text-white hover:translate-x-2 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="font-black text-base uppercase tracking-widest text-brand-blue flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-blue rounded-full"></span>
              Contacto
            </h4>
            <ul className="space-y-6 text-white/80 text-sm font-body">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-coral transition-colors">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white mb-1">Visítanos</p>
                  <p className="leading-relaxed">Calle Los Tulipanes 450,<br />San Isidro, Lima</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                  <span className="material-symbols-outlined text-white">call</span>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Llámanos</p>
                  <p>+51 1 234-5678</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow transition-colors">
                  <span className="material-symbols-outlined text-white">mail</span>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Escríbenos</p>
                  <p>hola@eureka.edu.pe</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Socials & Hours */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <h4 className="font-black text-xs uppercase tracking-widest text-brand-pink mb-4">Horarios</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-sm font-bold">Clases</p>
                  <p className="text-white/60 text-xs">L-V: 7:30 AM - 1:30 PM</p>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Admin</p>
                  <p className="text-white/60 text-xs">L-V: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-purple hover:scale-110 transition-all">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:scale-110 transition-all">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 font-bold uppercase tracking-widest">
          <p>© 2026 Eureka Nido - Guardería. Lima, Perú.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
