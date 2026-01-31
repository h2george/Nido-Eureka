
import React from 'react';
import { Link } from 'react-router-dom';

const Confirmacion: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-brand-purple/5 via-brand-blue/5 to-brand-pink/5 min-h-screen py-20 px-6 flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center">
                {/* Success Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-32 h-32 bg-brand-green rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                        <span className="material-symbols-outlined text-white text-6xl">check_circle</span>
                    </div>
                </div>

                {/* Main Message */}
                <div className="bg-white rounded-[3rem] p-12 shadow-2xl space-y-6 mb-8">
                    <h1 className="text-5xl font-bold text-brand-purple mb-4">
                        ¡Felicidades! 🎉
                    </h1>
                    <p className="text-2xl text-slate-700 font-body leading-relaxed">
                        Tu familia cumple con los requisitos para unirse a nuestra <strong className="text-brand-purple">comunidad Eureka</strong>
                    </p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                </div>

                {/* Next Steps */}
                <div className="bg-white rounded-[3rem] p-10 shadow-xl space-y-8 mb-8">
                    <h2 className="text-3xl font-bold text-brand-purple">
                        Siguiente Paso: Agenda tu Visita Guiada
                    </h2>
                    <p className="text-lg text-slate-600 font-body leading-relaxed">
                        Conoce nuestras instalaciones, metodología y equipo docente. Durante la visita podrás:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center gap-3 p-6 bg-brand-blue/5 rounded-2xl">
                            <span className="material-symbols-outlined text-brand-blue text-4xl">tour</span>
                            <h3 className="font-bold text-brand-purple">Recorrer el Nido</h3>
                            <p className="text-sm text-slate-500">Conoce nuestras aulas y espacios de juego</p>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-brand-yellow/5 rounded-2xl">
                            <span className="material-symbols-outlined text-brand-yellow text-4xl">groups</span>
                            <h3 className="font-bold text-brand-purple">Conocer al Equipo</h3>
                            <p className="text-sm text-slate-500">Conversa con nuestras maestras</p>
                        </div>

                        <div className="flex flex-col items-center gap-3 p-6 bg-brand-coral/5 rounded-2xl">
                            <span className="material-symbols-outlined text-brand-coral text-4xl">help</span>
                            <h3 className="font-bold text-brand-purple">Resolver Dudas</h3>
                            <p className="text-sm text-slate-500">Todas tus preguntas respondidas</p>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20guiada%20para%20la%20matrícula%202026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-green hover:bg-brand-green/90 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined">chat</span>
                        Agendar por WhatsApp
                    </a>

                    <Link
                        to="/"
                        className="bg-white hover:bg-slate-50 text-brand-purple border-2 border-brand-purple px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all"
                    >
                        Volver al Inicio
                    </Link>
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-brand-purple/10 rounded-2xl border-2 border-dashed border-brand-purple/30">
                    <p className="text-sm text-brand-purple font-bold">
                        📅 Horarios de Visita: Lunes a Viernes, 9:00 AM - 4:00 PM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Confirmacion;
