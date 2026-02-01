
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Propuesta: React.FC = () => {
  const methodology = [
    { title: 'Pensamiento Profundo', desc: 'Invitamos a los niños a resolver problemas y construir conocimiento por sí mismos.', icon: 'psychology', color: 'bg-brand-purple', shape: 'shape-pensar' },
    { title: 'Exploración Constante', desc: 'Ambientes que actúan como provocaciones para despertar el asombro y el efecto ¡Eureka!', icon: 'explore', color: 'bg-brand-blue', shape: 'shape-descubrir' },
    { title: 'Lenguajes Naturales', desc: 'El arte, el juego y el movimiento son las herramientas con las que expresan su mundo interno.', icon: 'palette', color: 'bg-brand-coral', shape: 'shape-crear' }
  ];



  const heroImages = [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1587653263995-422546a74569?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-background-light relative overflow-x-hidden">
      {/* Hero Section with Cinematic Background Video - FULL WIDTH NOW */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center mb-20 z-40">
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
            <source src="https://assets.mixkit.co/videos/preview/mixkit-kids-painting-at-a-long-table-41126-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content: The Message */}
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/30">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
                Metodología Eureka
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
                Aprender es<br />
                <span className="text-brand-yellow italic underline decoration-brand-coral decoration-8 underline-offset-8">divertido</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-body font-medium drop-shadow-md">
                Integramos pedagogías activas para que el juego, el arte y el movimiento sean los lenguajes naturales de aprendizaje.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
                <Link to="/admision" className="group bg-brand-coral hover:bg-brand-coral/90 transition-all text-white px-8 py-4 rounded-full text-base font-black shadow-2xl shadow-brand-coral/40 hover:-translate-y-1 flex items-center gap-3">
                  Ver Proceso de Matrícula
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-12 font-bold">arrow_forward</span>
                </Link>

                <div className="flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm font-black">psychology</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-black text-brand-purple uppercase tracking-wider">Documentación</span>
                    <span className="text-[10px] text-slate-600 font-bold">Aprendizaje Visible</span>
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
                  <span className="material-symbols-outlined text-sm">palette</span>
                  Creatividad
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

      {/* Main Content Container - NOW constrained below the Hero */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 pb-16">

        {/* Methodology Section */}
        <section className="mb-32">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Metodología Eureka
              </h2>
              <div className="w-24 h-2 bg-brand-yellow mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
              {methodology.map((m) => (
                <div key={m.title} className="flex flex-col items-center text-center gap-6 group">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className={`absolute inset-0 ${m.color} opacity-10 ${m.shape} scale-110 group-hover:rotate-12 transition-transform duration-500`}></div>
                    <div className={`relative z-10 w-40 h-40 ${m.color} ${m.shape} flex items-center justify-center text-white shadow-xl`}>
                      <span className="material-symbols-outlined text-6xl">{m.icon}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className={`${m.color.replace('bg-', 'text-')} text-3xl font-bold`}>{m.title}</h3>
                    <p className="text-slate-500 font-body text-lg leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-slate-900 text-4xl font-bold tracking-tight">Nuestros Programas</h2>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-[10px] animate-bounce">😊</div>
              <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-[10px] animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Toddlers */}
            <div className="group flex flex-col bg-[#e6f7ff] rounded-[3rem] p-8 transition-all hover:shadow-2xl hover:-translate-y-2 border-b-8 border-brand-blue">
              <div className="relative mb-8">
                <div className="w-full aspect-square bg-white rounded-[2.5rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-inner">
                  <div className="w-full h-full bg-center bg-cover blob-frame-1 scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600")' }}></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-blue text-white px-6 py-2 rounded-full font-bold shadow-lg">1 - 2 años</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-[#005a8d]">Toddlers</h3>
                  <div className="w-6 h-6 bg-brand-pink rounded-full text-[8px] flex items-center justify-center shadow-sm">👀</div>
                </div>
                <p className="text-[#005a8d]/80 font-body text-lg leading-relaxed">Estimulación temprana y desarrollo sensorial para sus primeros pasos hacia la autonomía.</p>
                <div className="pt-4 border-t border-[#005a8d]/10 flex items-center gap-3 text-[#005a8d] font-bold">
                  <span className="material-symbols-outlined text-brand-blue">task_alt</span>
                  Desarrollo psicomotriz
                </div>
              </div>
            </div>

            {/* Pre-Kinder */}
            <div className="group flex flex-col bg-[#f1f9e8] rounded-[3rem] p-8 transition-all hover:shadow-2xl hover:-translate-y-2 border-b-8 border-brand-green">
              <div className="relative mb-8">
                <div className="w-full aspect-square bg-white rounded-[2.5rem] overflow-hidden -rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-inner">
                  <div className="w-full h-full bg-center bg-cover shape-crear scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587653263995-422546a74569?auto=format&fit=crop&q=80&w=600")' }}></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-green text-white px-6 py-2 rounded-full font-bold shadow-lg">3 - 4 años</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-[#3e6216]">Pre-Kinder</h3>
                  <div className="w-6 h-6 bg-brand-yellow rounded-full text-[8px] flex items-center justify-center shadow-sm">🎨</div>
                </div>
                <p className="text-[#3e6216]/80 font-body text-lg leading-relaxed">Fomento del lenguaje, habilidades socio-emocionales y curiosidad por el entorno social.</p>
                <div className="pt-4 border-t border-[#3e6216]/10 flex items-center gap-3 text-[#3e6216] font-bold">
                  <span className="material-symbols-outlined text-brand-green">task_alt</span>
                  Exploración creativa
                </div>
              </div>
            </div>

            {/* Kinder */}
            <div className="group flex flex-col bg-[#fff9e6] rounded-[3rem] p-8 transition-all hover:shadow-2xl hover:-translate-y-2 border-b-8 border-brand-yellow">
              <div className="relative mb-8">
                <div className="w-full aspect-square bg-white rounded-[2.5rem] overflow-hidden rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-inner">
                  <div className="w-full h-full bg-center bg-cover blob-frame-2 scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600")' }}></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-brand-purple px-6 py-2 rounded-full font-bold shadow-lg">5 años</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-[#866a00]">Kinder</h3>
                  <div className="w-6 h-6 bg-brand-blue rounded-full text-[8px] flex items-center justify-center shadow-sm">🧠</div>
                </div>
                <p className="text-[#866a00]/80 font-body text-lg leading-relaxed">Preparación académica integral, pensamiento lógico y madurez motora fina.</p>
                <div className="pt-4 border-t border-[#866a00]/10 flex items-center gap-3 text-[#866a00] font-bold">
                  <span className="material-symbols-outlined text-brand-yellow">task_alt</span>
                  Pensamiento lógico
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Experiences Section - Dynamic & Visual */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-brand-coral font-black uppercase tracking-[0.2em] text-sm">Sin Rutinas Aburridas</span>
            <h2 className="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mt-2">Cada mes, una nueva aventura</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
              En Eureka no existen dos días iguales. Nuestras propuestas cambian mensualmente para mantener viva la chispa del asombro y acompañar los intereses evolutivos de los niños.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Exploración Sensorial", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600", color: "bg-brand-yellow" },
              { title: "Pequeños Artistas", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600", color: "bg-brand-blue" },
              { title: "Mini Científicos", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600", color: "bg-brand-green" },
              { title: "Juego Simbólico", img: "https://images.unsplash.com/photo-1587653263995-422546a74569?auto=format&fit=crop&q=80&w=600", color: "bg-brand-pink" }
            ].map((item, index) => (
              <div key={index} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer">
                <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex items-center justify-center p-6 text-center`}>
                  <div>
                    <span className="material-symbols-outlined text-white text-5xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">smart_toy</span>
                    <h3 className="text-white text-xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                  </div>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 z-0 group-hover:opacity-0 transition-opacity">
                  <span className="text-white font-bold text-lg">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pedagogical Documentation Section */}
        <section className="mb-24 bg-brand-purple text-white rounded-[4rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 lg:p-20 relative z-10">
            <div className="space-y-8">
              <div className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-brand-yellow font-black text-xs uppercase tracking-widest">Lo invisible se hace visible</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Documentación Pedagógica: <br />
                <span className="text-brand-coral">Testigos de su crecimiento</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-body">
                Para nosotros, educar es también narrar. No nos limitamos a cuidar; observamos y registramos. Periódicamente, recibirás <strong>informes de progreso visuales y detallados</strong> que son verdaderos tesoros.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Registro fotográfico de momentos 'Eureka'",
                  "Análisis cualitativo de sus conquistas",
                  "Un recuerdo hermoso de su primera infancia"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-brand-purple shadow-lg">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group perspective-1000">
              {/* Abstract Representation of a Report */}
              <div className="relative z-10 bg-white text-slate-800 p-8 rounded-[2rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=200" alt="Child" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-purple">Informe de Avance</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Marzo 2026</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-brand-yellow text-3xl">stars</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="h-40 bg-slate-100 rounded-xl overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600" alt="Activity" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute bottom-2 right-2 bg-white/90 px-3 py-1 rounded-lg text-[10px] font-bold text-brand-purple">Exploración</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-5/6"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-brand-coral font-black text-xs uppercase tracking-widest justify-end">
                  Más que una nota
                  <span className="material-symbols-outlined text-sm">favorite</span>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-4 -right-4 w-full h-full bg-brand-blue/20 rounded-[2rem] -z-10 rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Propuesta;
