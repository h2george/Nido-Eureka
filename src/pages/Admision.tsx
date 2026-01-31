
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admision: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { num: '01', title: 'Contacto', desc: 'Escríbenos por WhatsApp o IG para recibir información detallada.', icon: 'chat', color: 'brand-purple' },
    { num: '02', title: 'Visita / Llamada', desc: 'Conoce nuestras instalaciones y resuelve todas tus dudas.', icon: 'visibility', color: 'brand-blue' },
    { num: '03', title: 'Matrícula', desc: 'Confirma la vacante y realiza el pago correspondiente.', icon: 'verified', color: 'brand-green' },
    { num: '04', title: 'Bienvenida', desc: '¡Listo! Tu familia ya es parte oficial del Nido Eureka.', icon: 'celebration', color: 'brand-yellow' }
  ];

  const faqs = [
    {
      q: "¿Cómo garantizan la seguridad?",
      a: "Contamos con vigilancia permanente, cámaras de seguridad y protocolos estrictos de ingreso y salida. Todo nuestro mobiliario es ergonómico y diseñado específicamente para evitar accidentes, brindando un entorno 100% seguro."
    },
    {
      q: "¿Cuáles son los protocolos de higiene?",
      a: "La salud es prioridad. Realizamos sanitización profunda diaria de todas las aulas y áreas comunes. Además, aplicamos protocolos rigurosos de higiene personal y desinfección constante de materiales pedagógicos."
    },
    {
      q: "¿Cómo es el servicio de alimentación?",
      a: "Promovemos hábitos saludables con menús balanceados diseñados por especialistas. Utilizamos ingredientes frescos y naturales, asegurando una nutrición óptima que acompaña el crecimiento y energía de los niños."
    }
  ];

  const programs = [
    { name: 'Nursery', ages: '2 años' },
    { name: 'Pre-Kinder', ages: '3-4 años' },
    { name: 'Kinder', ages: '5 años' },
    { name: 'After School', ages: 'Talleres' }
  ];

  return (
    <div className="bg-background-light">
      {/* VSL (Video Sales Letter) Hero Section - Redesigned Vertical Stack */}
      <section className="bg-brand-purple py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,#ffffff_1px,transparent_0)] bg-[length:32px_32px]"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header Area */}
          <div className="space-y-6 mb-16 animate-fadeIn">
            <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md text-brand-yellow text-sm font-black uppercase tracking-[0.3em] border border-white/20">
              Admisiones Matrícula 2026
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
              Matrícula 2026 <br className="hidden md:block" />
              <span className="text-brand-yellow italic underline decoration-brand-coral decoration-8 underline-offset-8">Abierta</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-body leading-relaxed max-w-2xl mx-auto font-medium">
              Únete a una comunidad educativa cálida, lúdica y respetuosa de la infancia.
            </p>
          </div>

          {/* Video Player Area */}
          <div className="max-w-4xl mx-auto relative group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[4rem] blur-2xl group-hover:bg-brand-yellow/30 transition-all opacity-50"></div>
            <div className="relative aspect-video w-full bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] border-8 border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-brand-coral text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group/btn">
                  <span className="material-symbols-outlined text-5xl ml-2">play_arrow</span>
                </button>
              </div>
            </div>

            {/* CTA directly under video */}
            <div className="mt-12 flex flex-col items-center gap-6">
              <Link
                to="/form"
                className="group bg-brand-coral hover:bg-brand-coral/90 text-white px-12 py-6 rounded-full text-xl font-black shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3"
              >
                ¡Quiero Iniciar el Proceso Ahora!
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 font-bold">arrow_forward</span>
              </Link>
              <div className="flex items-center gap-3 text-white/60 font-bold uppercase tracking-widest text-[10px]">
                <span className="material-symbols-outlined text-brand-yellow text-sm">verified</span>
                Proceso 100% Personalizado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Steps */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-brand-purple text-4xl md:text-5xl font-bold">Proceso de Admisión</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-body">Cuatro pasos sencillos para que tu pequeño forme parte de nuestra comunidad educativa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-full bg-${step.color} text-white flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <div className="space-y-2">
                  <span className={`text-${step.color} font-bold text-xs uppercase tracking-widest`}>Paso {step.num}</span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-brand-purple text-4xl font-bold">Inversión en la Educación</h2>
            <p className="text-slate-600 text-xl leading-relaxed font-body">
              Ofrecemos una propuesta de valor integral diseñada para la tranquilidad de los padres. Nuestra inversión es transparente y todo incluido.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Materiales Completos', desc: 'Todo lo necesario para el aula.', icon: 'inventory_2', color: 'brand-green' },
                { title: 'Seguro Estudiantil', desc: 'Cobertura contra accidentes 24/7.', icon: 'health_and_safety', color: 'brand-blue' },
                { title: 'Plataforma Digital', desc: 'Comunicación en tiempo real.', icon: 'devices', color: 'brand-pink' },
                { title: 'Talleres Incluidos', desc: 'Arte, música y psicomotricidad.', icon: 'theater_comedy', color: 'brand-yellow' }
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 border border-slate-100 hover:border-brand-purple/20 transition-all">
                  <div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <span className={`material-symbols-outlined text-${item.color}`}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs text-slate-500 font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-brand-purple relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-[120px]">savings</span>
              </div>
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-brand-purple">Detalle de Inversión</h3>
                <p className="text-slate-400 text-sm mt-2">Valores referenciales para el año 2026</p>
              </div>
              <div className="space-y-4 relative z-10">
                {[
                  { label: 'Derecho de Admisión', val: 'S/ 500' },
                  { label: 'Cuota de Ingreso', val: 'Consultar' },
                  { label: 'Pensión Mensual', val: 'S/ 1,200' }
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-4 ${i < 2 ? 'border-b border-slate-50' : ''}`}>
                    <span className="text-slate-600 font-medium">{row.label}</span>
                    <span className="font-bold text-xl text-brand-purple">{row.val}</span>
                  </div>
                ))}
              </div>
              <Link to="/form" className="block text-center w-full mt-10 bg-brand-coral text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-coral/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Solicitar Vacante
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Functional Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-12 text-brand-purple tracking-tight">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left bg-white group transition-colors"
                >
                  <span className="font-bold text-xl text-slate-800 group-hover:text-brand-purple transition-colors">{faq.q}</span>
                  <span className={`material-symbols-outlined text-brand-purple transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-8 pt-0 text-slate-600 font-body text-lg leading-relaxed border-t border-slate-50 bg-slate-50/30">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,#ffffff_1px,transparent_0)] bg-[length:32px_32px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para empezar?</h2>
          <p className="text-white/80 text-xl font-body mb-12 leading-relaxed">
            Estamos emocionados de conocer a tu familia. Completa el formulario de calificación <br className="hidden md:block" />
            e inicia el camino hacia una educación de excelencia en Eureka.
          </p>
          <Link
            to="/form"
            className="inline-flex items-center gap-3 bg-brand-coral text-white text-xl font-black px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            Iniciar Proceso de Matrícula 2026
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/40 text-sm mt-8 font-bold uppercase tracking-widest">
            Cupos limitados para el año escolar 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default Admision;
