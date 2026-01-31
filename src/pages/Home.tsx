
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1587653263995-422546a74569?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section with Cinematic Background Video */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center z-40">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-brand-purple/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/60 via-transparent to-white z-10"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-children-playing-happily-in-a-park-on-a-sunny-day-34533-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content: The Message */}
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/30">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
                Matrículas Abiertas 2026
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
                Un laboratorio de<br />
                <span className="text-brand-yellow">jue</span><span className="text-brand-green">go</span>,
                <span className="text-brand-blue"> ar</span><span className="text-brand-pink">te </span>
                e <span className="relative inline-block">
                  investigación
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow/80" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-body font-medium drop-shadow-md">
                Diseñado para que cada niño brille desde su propia individualidad, acompañado por una mirada sensible que celebra su esencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
                <Link to="/admision" className="group bg-brand-coral hover:bg-brand-coral/90 transition-all text-white px-8 py-4 rounded-full text-base font-black shadow-2xl shadow-brand-coral/40 hover:-translate-y-1 flex items-center gap-3">
                  Ver Proceso de Matrícula
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-12 font-bold">arrow_forward</span>
                </Link>

                <div className="flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-purple">
                    <span className="material-symbols-outlined text-sm font-black">favorite</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-black text-brand-purple uppercase tracking-wider">Cuidado con el corazón</span>
                    <span className="text-[10px] text-slate-600 font-bold">Atención personalizada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Photo Slot with Fade Effect */}
            <div className="hidden lg:block relative group animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-10 bg-white/5 rounded-[4rem] blur-3xl rotate-6 group-hover:bg-white/10 transition-all"></div>
              <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.3)] border-[12px] border-white/10 group-hover:rotate-2 transition-transform duration-700">
                {heroImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Momento Eureka ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent"></div>
              </div>

              {/* Decorative "Polaroid" label overlay */}
              <div className="absolute -bottom-6 -left-6 z-50 bg-white p-4 rounded-2xl shadow-2xl -rotate-3 group-hover:rotate-0 transition-transform">
                <p className="text-brand-purple font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                  Momentos Eureka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-50">expand_more</span>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-black text-brand-purple tracking-tight">Acompañamiento Integral</h2>
            <div className="w-20 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
            <p className="text-slate-500 max-w-xl mx-auto font-body text-lg leading-relaxed">
              Apostamos por el potencial de cada niño, donde el aprendizaje es un descubrimiento constante y no una imposición.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Desarrollo Integral", desc: "A través del juego y la creatividad, los niños construyen sus propios aprendizajes.", icon: "menu_book", color: "bg-brand-purple", light: "bg-brand-purple/5" },
              { title: "Entorno Seguro", desc: "Un espacio cuidado donde escuchamos y ponemos sus necesidades e intereses en el centro.", icon: "verified_user", color: "bg-brand-blue", light: "bg-brand-blue/5" },
              { title: "Comunidad Abierta", desc: "Somos una extensión del hogar. Invitamos a las familias a ser parte activa de nuestra cotidianidad.", icon: "groups", color: "bg-brand-green", light: "bg-brand-green/5" }
            ].map((item) => (
              <div key={item.title} className={`${item.light} p-10 rounded-[3rem] border border-transparent hover:border-brand-purple/10 transition-all flex flex-col group h-full`}>
                <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-brand-purple mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-body">
                  {item.desc}
                </p>
                <Link to="/propuesta" className="text-xs font-black text-brand-blue flex items-center gap-2 group-hover:gap-4 transition-all">
                  Saber más <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="absolute -z-10 -inset-10 bg-brand-coral/5 rounded-[4rem] rotate-3"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Directora"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-brand-coral font-black uppercase tracking-[0.3em] text-[10px]">Nuestro Liderazgo</span>
                <h2 className="text-5xl md:text-6xl font-black text-brand-purple leading-[1.1]">Guiando con amor y experiencia</h2>
                <div className="pt-6 relative">
                  <span className="material-symbols-outlined absolute -left-2 -top-2 text-brand-yellow/40 text-6xl">format_quote</span>
                  <p className="text-xl md:text-2xl text-slate-700 italic font-body leading-relaxed pl-4">
                    "Somos una comunidad educativa que entiende el aprendizaje como un constante ¡Eureka!, un descubrimiento compartido donde cada niño brille."
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-xl font-black text-brand-purple">Dra. Mariana Valdivia</p>
                <p className="text-brand-blue font-bold text-sm">Directora Académica</p>
              </div>
              <Link to="/equipo" className="inline-flex items-center gap-4 bg-brand-purple text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-brand-purple/20 hover:-translate-y-1 transition-all">
                Conoce a nuestro equipo
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
