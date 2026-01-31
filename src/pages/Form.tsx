
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    // 1. Micro-compromiso
    lookingFor2026: string;

    // 2. Información del niño
    childName: string;
    childBirthdate: string;
    programInterest: string;

    // 3. Contexto familiar
    firstNidoExperience: string;
    importantFactors: string[];

    // 4. Expectativas
    developmentGoals: string;
    specialNotes: string;

    // 5. Relación con propuesta
    whatAttracted: string[];

    // 6. Siguiente paso
    nextAction: string;

    // 7. Datos de contacto
    parentName: string;
    email: string;
    phone: string;
}

const Form: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState<FormData>({
        lookingFor2026: '',
        childName: '',
        childBirthdate: '',
        programInterest: '',
        firstNidoExperience: '',
        importantFactors: [],
        developmentGoals: '',
        specialNotes: '',
        whatAttracted: [],
        nextAction: '',
        parentName: '',
        email: '',
        phone: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Todos los que completan el formulario califican para agendar visita
        // El formulario mismo es el filtro de interés genuino
        navigate('/confirmacion');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (field: 'importantFactors' | 'whatAttracted', value: string) => {
        const currentValues = formData[field];
        const newValues = currentValues.includes(value)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value];

        setFormData({
            ...formData,
            [field]: newValues
        });
    };

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className="bg-gradient-to-br from-brand-purple/5 via-white to-brand-blue/5 min-h-screen py-12 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-purple mb-3">
                        Proceso de Admisión 2026
                    </h1>
                    <p className="text-lg text-slate-600 font-body">
                        Conoce si Eureka es el nido ideal para tu familia
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-brand-purple">Paso {currentStep} de {totalSteps}</span>
                        <span className="text-sm font-bold text-brand-purple">{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-brand-purple to-brand-coral transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">

                    {/* STEP 1: Micro-compromiso + Info del niño */}
                    {currentStep === 1 && (
                        <div className="space-y-8 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-brand-purple border-b-2 border-brand-yellow pb-3">
                                Cuéntanos sobre tu búsqueda
                            </h2>

                            {/* Pregunta 1 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-3">
                                    ¿Estás buscando un nido para el año escolar 2026? *
                                </label>
                                <div className="space-y-3">
                                    {['Sí', 'Aún estoy explorando opciones'].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-brand-purple hover:bg-brand-purple/5 transition-all">
                                            <input
                                                type="radio"
                                                name="lookingFor2026"
                                                value={option}
                                                checked={formData.lookingFor2026 === option}
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
                                            />
                                            <span className="font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-2">
                                    Nombre del niño/a *
                                </label>
                                <input
                                    type="text"
                                    name="childName"
                                    value={formData.childName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors"
                                    placeholder="Ej: Sofía"
                                />
                            </div>

                            {/* Pregunta 3 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-2">
                                    Fecha de nacimiento *
                                </label>
                                <input
                                    type="date"
                                    name="childBirthdate"
                                    value={formData.childBirthdate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Pregunta 4 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-3">
                                    Programa de interés *
                                </label>
                                <div className="space-y-3">
                                    {['Cuna', 'Pre Nido', 'Nido', 'Aún no estoy seguro/a'].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-brand-purple hover:bg-brand-purple/5 transition-all">
                                            <input
                                                type="radio"
                                                name="programInterest"
                                                value={option}
                                                checked={formData.programInterest === option}
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
                                            />
                                            <span className="font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Contexto familiar */}
                    {currentStep === 2 && (
                        <div className="space-y-8 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-brand-purple border-b-2 border-brand-yellow pb-3">
                                Contexto familiar
                            </h2>

                            {/* Pregunta 5 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-3">
                                    ¿Es la primera experiencia de nido de tu hijo/a? *
                                </label>
                                <div className="space-y-3">
                                    {['Sí', 'No'].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-brand-purple hover:bg-brand-purple/5 transition-all">
                                            <input
                                                type="radio"
                                                name="firstNidoExperience"
                                                value={option}
                                                checked={formData.firstNidoExperience === option}
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
                                            />
                                            <span className="font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Pregunta 6 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-3">
                                    ¿Qué es lo más importante para ti al elegir un nido? *
                                    <span className="block text-sm font-normal text-slate-500 mt-1">(Puedes seleccionar varias opciones)</span>
                                </label>
                                <div className="space-y-3">
                                    {[
                                        'Seguridad y cuidado afectivo',
                                        'Propuesta pedagógica',
                                        'Acompañamiento emocional',
                                        'Comunicación con la familia',
                                        'Comunidad y valores',
                                        'Horarios / logística'
                                    ].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-brand-purple hover:bg-brand-purple/5 transition-all">
                                            <input
                                                type="checkbox"
                                                checked={formData.importantFactors.includes(option)}
                                                onChange={() => handleCheckboxChange('importantFactors', option)}
                                                className="w-5 h-5 text-brand-purple focus:ring-brand-purple rounded"
                                            />
                                            <span className="font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Expectativas y propuesta */}
                    {currentStep === 3 && (
                        <div className="space-y-8 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-brand-purple border-b-2 border-brand-yellow pb-3">
                                Expectativas y conexión
                            </h2>

                            {/* Pregunta 7 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-2">
                                    ¿Qué te gustaría que tu hijo/a desarrolle principalmente en esta etapa? *
                                    <span className="block text-sm font-normal text-slate-500 mt-1">Ej.: autonomía, socialización, confianza, lenguaje, creatividad</span>
                                </label>
                                <textarea
                                    name="developmentGoals"
                                    value={formData.developmentGoals}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                                    placeholder="Cuéntanos qué es importante para ti..."
                                />
                            </div>

                            {/* Pregunta 8 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-2">
                                    ¿Hay algo importante que deberíamos saber sobre tu hijo/a?
                                    <span className="block text-sm font-normal text-slate-500 mt-1">(Opcional) Ej.: proceso de adaptación, personalidad, necesidades específicas</span>
                                </label>
                                <textarea
                                    name="specialNotes"
                                    value={formData.specialNotes}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                                    placeholder="Comparte lo que consideres relevante..."
                                />
                            </div>

                            {/* Pregunta 9 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-3">
                                    ¿Qué te llamó la atención de nuestra propuesta educativa? *
                                    <span className="block text-sm font-normal text-slate-500 mt-1">(Puedes seleccionar varias opciones)</span>
                                </label>
                                <div className="space-y-3">
                                    {[
                                        'Aprendizaje a través del juego',
                                        'Enfoque en el vínculo afectivo',
                                        'Arte y creatividad',
                                        'Comunidad de familias',
                                        'Recomendación de otros padres',
                                        'Redes sociales / web'
                                    ].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-brand-purple hover:bg-brand-purple/5 transition-all">
                                            <input
                                                type="checkbox"
                                                checked={formData.whatAttracted.includes(option)}
                                                onChange={() => handleCheckboxChange('whatAttracted', option)}
                                                className="w-5 h-5 text-brand-purple focus:ring-brand-purple rounded"
                                            />
                                            <span className="font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: Siguiente paso + Datos de contacto */}
                    {currentStep === 4 && (
                        <div className="space-y-8 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-brand-purple border-b-2 border-brand-yellow pb-3">
                                ¡Último paso!
                            </h2>

                            {/* Pregunta 10 */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-3">
                                    ¿Qué te gustaría hacer ahora? *
                                </label>
                                <div className="space-y-3">
                                    {[
                                        'Agendar una visita presencial',
                                        'Tener una llamada informativa',
                                        'Recibir más información por WhatsApp'
                                    ].map((option) => (
                                        <label key={option} className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-brand-purple hover:bg-brand-purple/5 transition-all">
                                            <input
                                                type="radio"
                                                name="nextAction"
                                                value={option}
                                                checked={formData.nextAction === option}
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
                                            />
                                            <span className="font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Datos de contacto */}
                            <div className="bg-brand-purple/5 rounded-2xl p-6 space-y-6">
                                <h3 className="text-lg font-bold text-brand-purple">Datos de contacto</h3>
                                <p className="text-sm text-slate-600 font-body">
                                    Usaremos estos datos únicamente para acompañarte y resolver tus dudas sobre el proceso de admisión.
                                </p>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Nombre del padre/madre o tutor *
                                    </label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors"
                                        placeholder="Ej: María González"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Correo electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Teléfono / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-brand-purple focus:outline-none transition-colors"
                                        placeholder="+51 999 999 999"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-10 pt-8 border-t-2 border-slate-100">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-brand-purple text-brand-purple font-bold hover:bg-brand-purple hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                                Anterior
                            </button>
                        )}

                        {currentStep < totalSteps ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto flex items-center gap-2 px-8 py-4 rounded-full bg-brand-purple text-white font-bold hover:bg-brand-purple/90 transition-all shadow-lg"
                            >
                                Siguiente
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="ml-auto flex items-center gap-2 px-10 py-5 rounded-full bg-brand-coral text-white font-black text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                Enviar Solicitud
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
