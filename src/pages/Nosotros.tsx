
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nosotros: React.FC = () => {
    const heroImages = [
        "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const team = [
        { name: 'Miss Claudia', role: 'Coordinadora Pedagógica', grade: 'Kinder', quote: '"Aprendemos jugando y crecemos con amor."', color: 'brand-yellow', photo: 'https://picsum.photos/seed/miss1/400/400' },
        { name: 'Miss Andrea', role: 'Psicomotricista', grade: 'Pre-Kinder', quote: '"El movimiento es la base de todo aprendizaje."', color: 'brand-green', photo: 'https://picsum.photos/seed/miss2/400/400' },
        { name: 'Miss Sofia', role: 'Docente Estimulación', grade: 'Nursery', quote: '"Fomentamos la autonomía y el asombro desde el inicio."', color: 'brand-pink', photo: 'https://picsum.photos/seed/miss3/400/400' }
    ];

    const protocols = [
        { title: 'Vigilancia Permanente', desc: 'Monitoreo constante para la tranquilidad de las familias.', icon: 'shield_with_heart', color: 'brand-blue' },
        { title: 'Higiene Rigurosa', desc: 'Sanitización diaria profunda de todos nuestros espacios.', icon: 'clean_hands', color: 'brand-yellow' },
        { title: 'Primeros Auxilios', desc: 'Tópico equipado y protocolos de emergencia inmediata.', icon: 'medical_services', color: 'brand-coral' },
        { title: 'Entorno Seguro', desc: 'Mobiliario ergonómico y acabados diseñados para evitar accidentes.', icon: 'deck', color: 'brand-green' }
    ];

    return (
        <div className="bg-background-light relative overflow-x-hidden">
            {/* Hero Section - Combined Story & Identity */}
            <section className="relative h-[90vh] min-h-[700px] w-full flex items-center mb-20 z-40">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-purple/40 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/95 via-transparent to-white z-10"></div>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover scale-105"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-little-girl-playing-with-an-old-toy-car-40543-large.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 animate-fadeIn">
                            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/30">
                                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
                                Nuestra Esencia
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
                                Una historia de<br />
                                <span className="text-brand-yellow underline decoration-brand-coral decoration-8 underline-offset-8">amor y vocación</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-body font-medium drop-shadow-md">
                                Eureka nació de un sueño compartido: crear un espacio donde la educación no fuera una tarea, sino una aventura diaria.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
                                <Link to="/admision" className="group bg-brand-coral hover:bg-brand-coral/90 transition-all text-white px-8 py-4 rounded-full text-base font-black shadow-2xl shadow-brand-coral/40 hover:-translate-y-1 flex items-center gap-3">
                                    Ver Proceso de Matrícula
                                    <span className="material-symbols-outlined transition-transform group-hover:rotate-12 font-bold">arrow_forward</span>
                                </Link>

                                <div className="flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
                                    <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined text-sm font-black">history_edu</span>
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-xs font-black text-brand-purple uppercase tracking-wider">Más que un nido</span>
                                        <span className="text-[10px] text-slate-600 font-bold">Una Familia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content: Photo Slot */}
                        <div className="hidden lg:block relative group animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                            <div className="absolute -inset-10 bg-white/5 rounded-[4rem] blur-3xl rotate-6 group-hover:bg-white/10 transition-all"></div>
                            <div className="relative w-full aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.3)] border-[12px] border-white/10 group-hover:rotate-2 transition-transform duration-700">
                                {heroImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Historia Eureka ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 z-50 bg-white p-4 rounded-2xl shadow-2xl -rotate-3 group-hover:rotate-0 transition-transform">
                                <p className="text-brand-purple font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">auto_stories</span>
                                    El Comienzo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <span className="material-symbols-outlined text-white text-4xl opacity-50">expand_more</span>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-20 pb-16">

                {/* Origin Section - Engaging Story */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-yellow/20 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                            <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=800"
                                    alt="Fundación de Eureka"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 z-20 w-48 h-48 bg-brand-blue rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <p className="font-bold text-lg leading-tight">Fundado con propósito</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="inline-block py-2 px-6 rounded-full bg-brand-purple/5 text-brand-purple font-black uppercase tracking-widest text-xs mb-4">
                                Nuestra Tradición
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-purple leading-tight">¿Cómo empezó <span className="text-brand-coral">todo?</span></h2>
                            <div className="space-y-6 text-slate-600 font-body text-lg leading-relaxed">
                                <p>
                                    Hace más de una década, observamos que los nidos convencionales a menudo priorizaban la estructura sobre la chispa individual. En <strong>Eureka</strong>, decidimos invertir esa fórmula.
                                </p>
                                <div className="border-l-4 border-brand-yellow pl-6 py-2 my-6">
                                    <p className="italic text-slate-800 font-medium text-xl">
                                        "Imaginamos un lugar donde '¡Eureka!' no fuera solo una palabra, sino una celebración diaria del descubrimiento."
                                    </p>
                                </div>
                                <p>
                                    Comenzamos en una pequeña casa con 5 niños y un jardín lleno de posibilidades. Hoy, nos hemos convertido en un referente de educación inicial, manteniendo siempre esa esencia familiar y cercana que nos define.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section Integration */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-black uppercase tracking-[0.2em] text-sm">Nuestro Equipo</span>
                        <h2 className="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mt-2">Corazones que educan</h2>
                        <div className="w-24 h-2 bg-brand-coral mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {team.map((member) => (
                            <div key={member.name} className="flex flex-col items-center text-center group bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                                <div className="relative w-48 h-48 mb-8">
                                    <div className={`absolute inset-0 bg-${member.color} rounded-full rotate-12 group-hover:rotate-45 transition-transform duration-700 opacity-10`}></div>
                                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className={`inline-block mx-auto bg-${member.color}/20 text-${member.color === 'brand-yellow' ? 'brand-coral' : member.color} px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest`}>{member.grade}</span>
                                    <h3 className="text-2xl font-black text-slate-800">{member.name}</h3>
                                    <p className="text-brand-purple font-bold text-sm">{member.role}</p>
                                    <p className="text-sm text-slate-500 italic font-body leading-relaxed mt-2">"{member.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety & Protocols Integration */}
                <section className="mb-16 bg-white p-12 lg:p-20 rounded-[3rem] shadow-sm border border-slate-100">
                    <div className="flex items-center justify-center gap-3 mb-16 text-center flex-col">
                        <h2 className="text-slate-800 text-4xl font-black tracking-tight">Cuidado y Protección</h2>
                        <p className="text-slate-500 max-w-2xl font-body text-lg">Porque para aprender a volar, primero necesitan sentirse seguros en el nido.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {protocols.map((p) => (
                            <div key={p.title} className="flex flex-col gap-5 text-center items-center">
                                <div className={`bg-${p.color}/10 text-${p.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-slate-800 text-xl font-bold">{p.title}</h3>
                                    <p className="text-slate-500 text-sm font-body leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Nosotros;
