import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background-light">
      {/* Decorative Blobs Background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-2xl px-6 animate-fadeIn">
        
        {/* Animated 404 Visual */}
        <div className="relative h-64 w-64 mx-auto mb-8 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral via-brand-yellow to-brand-green opacity-20 shape-pensar animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 bg-white/80 glass-card shape-crear flex items-center justify-center shadow-lg">
                <span className="text-9xl font-display font-bold eureka-gradient-text select-none">404</span>
            </div>
            {/* Playful elements around */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-yellow rounded-full animate-bounce delay-100 opacity-80"></div>
            <div className="absolute -bottom-8 -left-2 w-8 h-8 bg-brand-blue shape-descubrir animate-pulse"></div>
            <div className="absolute top-1/2 -right-12 w-6 h-6 bg-brand-pink rounded-full animate-ping"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-800 mb-6 leading-tight">
          ¡Ups! Esta página está <span className="text-brand-coral">jugando</span> a las escondidas
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 font-body max-w-lg mx-auto leading-relaxed">
          No encontramos lo que buscabas, pero no te preocupes. En nuestro Nido siempre hay un camino de regreso a casa.
        </p>

        <Link 
          to="/" 
          className="premium-button bg-brand-purple text-white hover:bg-brand-purple/90 inline-flex group mx-auto text-lg px-10 py-5"
        >
          <Home className="w-6 h-6 transition-transform group-hover:scale-110" />
          <span>Volver al Nido</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
