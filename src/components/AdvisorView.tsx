import React, { useState } from 'react';
import { Treatment } from '../types';
import { TREATMENTS } from '../data/treatments';

interface AdvisorViewProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onGoToBooking: (treatment: Treatment) => void;
}

export const AdvisorView: React.FC<AdvisorViewProps> = ({
  onSelectTreatment,
  onGoToBooking,
}) => {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('reduccion');
  const [zone, setZone] = useState<string>('abdomen');
  const [condition, setCondition] = useState<string>('no_invasivo');
  const [resultShown, setResultShown] = useState<boolean>(false);

  const goalOptions = [
    {
      id: 'reduccion',
      title: 'Reducción y Modelación Corporal',
      desc: 'Disminuir adiposidad rebelde y definir el contorno sin cirugía.',
      icon: '✨',
    },
    {
      id: 'depilacion',
      title: 'Depilación Definitiva Permanente',
      desc: 'Eliminar el vello progresivamente y simplificar tu rutina.',
      icon: '⚡️',
    },
    {
      id: 'facial',
      title: 'Luminosidad y Rejuvenecimiento Facial',
      desc: 'Limpiar poros, tensar la piel y suavizar líneas de expresión.',
      icon: '💆‍♀️',
    },
    {
      id: 'circulacion',
      title: 'Alivio Circulatorio y Piernas Cansadas',
      desc: 'Drenaje linfático, reducción de hinchazón y retención de líquidos.',
      icon: '🌿',
    },
    {
      id: 'tonificacion',
      title: 'Tonificación Muscular y Firmeza',
      desc: 'Levantar glúteos, fortalecer abdomen y combatir la flacidez.',
      icon: '💪',
    },
    {
      id: 'relax',
      title: 'Alivio de Contracturas y Desconexión',
      desc: 'Maniobras profundas para eliminar nudos de estrés en cuello y espalda.',
      icon: '🌸',
    },
  ];

  const zoneOptions = [
    { id: 'abdomen', label: 'Abdomen y Flancos (Cintura)' },
    { id: 'piernas', label: 'Piernas y Glúteos' },
    { id: 'rostro', label: 'Rostro, Cuello y Escote' },
    { id: 'espalda', label: 'Espalda y Trapecios' },
    { id: 'axilas_cavado', label: 'Axilas y Cavado' },
    { id: 'cuerpo_entero', label: 'Cuerpo Completo' },
  ];

  const conditionOptions = [
    { id: 'no_invasivo', label: 'Priorizo tratamientos sin dolor ni marcas, volver de inmediato al trabajo' },
    { id: 'sensible', label: 'Tengo piel sensible o reactiva y necesito asesoramiento delicado' },
    { id: 'rapido', label: 'Tengo un evento próximo y busco resultados visibles a corto plazo' },
    { id: 'primera_vez', label: 'Es mi primera vez en un centro de estética y quiero ir paso a paso' },
  ];

  const handleCalculate = () => {
    setResultShown(true);
  };

  // Determine recommendation based on user choices
  const getRecommendation = () => {
    if (goal === 'depilacion') {
      const laser = TREATMENTS.find((t) => t.id === 'depilacion-laser')!;
      return {
        title: 'Protocolo Láser Personalizado',
        description: 'Plan de depilación definitiva progresiva con cabezal ultra refrigerado para máxima protección y eficacia.',
        primaryTreatment: laser,
        secondaryTreatments: [],
        frequency: '1 sesión cada 30 a 45 días',
        estimatedSessions: '6 a 8 sesiones',
        personalizedTip: 'Te recomendamos rasurar 24 hs antes con maquinita descartable y evitar tomar sol intenso los 2 días previos.',
      };
    }

    if (goal === 'facial') {
      const facial = TREATMENTS.find((t) => t.id === 'estetica-facial')!;
      const radio = TREATMENTS.find((t) => t.id === 'radiofrecuencia')!;
      return {
        title: 'Plan Dermo-Renovador Facial',
        description: 'Combinación de Higiene Facial Profunda con punta de diamante y sesiones de Radiofrecuencia para estimular colágeno y dar luminosidad.',
        primaryTreatment: facial,
        secondaryTreatments: [radio],
        frequency: 'Higiene inicial + 4 sesiones de radiofrecuencia quincenales',
        estimatedSessions: '5 sesiones en total',
        personalizedTip: 'Ideal para revitalizar pieles opacas y conseguir un aspecto descansado y fresco sin irritación.',
      };
    }

    if (goal === 'circulacion') {
      const preso = TREATMENTS.find((t) => t.id === 'presoterapia')!;
      const masaje = TREATMENTS.find((t) => t.id === 'masajes-terapeuticos')!;
      return {
        title: 'Circuito Descongestivo & Liviandad',
        description: 'Presoterapia secuencial con botas de drenaje asistido combinada con masaje sedativo y descontracturante.',
        primaryTreatment: preso,
        secondaryTreatments: [masaje],
        frequency: '1 a 2 veces por semana',
        estimatedSessions: '6 a 8 sesiones',
        personalizedTip: 'Ayuda enormemente a personas que pasan muchas horas de pie o sentadas en oficina.',
      };
    }

    if (goal === 'tonificacion') {
      const electro = TREATMENTS.find((t) => t.id === 'electrodos')!;
      const radio = TREATMENTS.find((t) => t.id === 'radiofrecuencia')!;
      return {
        title: 'Protocolo Firmeza & Modelación Muscular',
        description: 'Ondas rusas de alta contracción para fortalecer masa muscular combinadas con radiofrecuencia tensora de piel.',
        primaryTreatment: electro,
        secondaryTreatments: [radio],
        frequency: '2 sesiones semanales',
        estimatedSessions: '8 a 10 sesiones',
        personalizedTip: 'Excelente sinergia para glúteos caídos o abdomen con flacidez postparto.',
      };
    }

    if (goal === 'relax') {
      const masaje = TREATMENTS.find((t) => t.id === 'masajes-terapeuticos')!;
      const preso = TREATMENTS.find((t) => t.id === 'presoterapia')!;
      return {
        title: 'Circuito Relax & Descontracturante',
        description: 'Masaje manual profundo con aceites aromáticos para desarmar contracturas en cuello y lumbares, más presoterapia relajante.',
        primaryTreatment: masaje,
        secondaryTreatments: [preso],
        frequency: 'Frecuencia semanal o quincenal',
        estimatedSessions: 'Según necesidad puntual',
        personalizedTip: 'Ambiente climatizado con aromaterapia para una desconexión reparadora total.',
      };
    }

    // Default: Reducción
    const crio = TREATMENTS.find((t) => t.id === 'criolipolisis')!;
    const ultra = TREATMENTS.find((t) => t.id === 'ultracavitacion')!;
    const preso = TREATMENTS.find((t) => t.id === 'presoterapia')!;
    return {
      title: 'Plan Integral de Reducción & Contorno',
      description: 'Criolipólisis plana para eliminar panículo adiposo localizado, complementada con ultracavitación y presoterapia drenante.',
      primaryTreatment: crio,
      secondaryTreatments: [ultra, preso],
      frequency: 'Criolipólisis mensual + sesiones intermedias de ultracavitación/preso',
      estimatedSessions: '3 criolipólisis + 6 ultracavitaciones',
      personalizedTip: 'Consumir 2 litros de agua diarios para facilitar el drenaje natural de los lípidos eliminados.',
    };
  };

  const recommendation = getRecommendation();

  const getWhatsAppDiagnosticUrl = () => {
    const text = `Hola Liliana! Realicé el diagnóstico online en la web y me recomendó el siguiente plan:\n\n` +
      `✨ Objetivo: ${goalOptions.find(g => g.id === goal)?.title}\n` +
      `📍 Zona de enfoque: ${zoneOptions.find(z => z.id === zone)?.label}\n` +
      `🎯 Plan sugerido: ${recommendation.title}\n` +
      `💆‍♀️ Tratamiento principal: ${recommendation.primaryTreatment.name}\n\n` +
      `Quisiera coordinar una consulta previa en el consultorio de Morón para evaluarlo juntas.`;
    return `https://wa.me/5491100000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">
          Asesor Virtual
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-3">
          Diagnóstico de Belleza & Bienestar
        </h2>
        <p className="text-sm text-[#5a3d44] leading-relaxed">
          Respondé 3 simples preguntas y descubrí qué combinación de aparatología y cuidados de nuestro consultorio de Morón se adapta mejor a lo que buscás.
        </p>
      </div>

      {!resultShown ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#eddfe3] shadow-md">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#eddfe3]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#865f67]">
              Paso {step} de 3
            </span>
            <div className="flex gap-2">
              <span className={`w-8 h-1.5 rounded-full ${step >= 1 ? 'bg-[#865f67]' : 'bg-[#eddfe3]'}`} />
              <span className={`w-8 h-1.5 rounded-full ${step >= 2 ? 'bg-[#865f67]' : 'bg-[#eddfe3]'}`} />
              <span className={`w-8 h-1.5 rounded-full ${step >= 3 ? 'bg-[#865f67]' : 'bg-[#eddfe3]'}`} />
            </div>
          </div>

          {/* Step 1: Goals */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-semibold text-[#362229]">
                1. ¿Cuál es tu objetivo prioritario?
              </h3>
              <p className="text-xs text-[#865f67] mb-4">
                Elegí la opción que mejor describa tu necesidad principal:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setGoal(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      goal === opt.id
                        ? 'border-[#865f67] bg-[#f7f0f2] shadow-sm ring-1 ring-[#865f67]'
                        : 'border-[#eddfe3] bg-[#fcfaf8] hover:border-[#d8bac2] hover:bg-white'
                    }`}
                  >
                    <div className="text-2xl mb-1.5">{opt.icon}</div>
                    <h4 className="font-semibold text-sm text-[#362229] mb-1">{opt.title}</h4>
                    <p className="text-xs text-[#5a3d44]">{opt.desc}</p>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Siguiente paso →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Zone */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-semibold text-[#362229]">
                2. ¿En qué zona deseás enfocarte principalmente?
              </h3>
              <p className="text-xs text-[#865f67] mb-4">
                Podemos tratar una zona puntual o estructurar un plan integral:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {zoneOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setZone(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      zone === opt.id
                        ? 'border-[#865f67] bg-[#f7f0f2] shadow-sm ring-1 ring-[#865f67]'
                        : 'border-[#eddfe3] bg-[#fcfaf8] hover:border-[#d8bac2] hover:bg-white'
                    }`}
                  >
                    <h4 className="font-semibold text-sm text-[#362229]">{opt.label}</h4>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2.5 rounded-full border border-[#d8bac2] text-[#5a3d44] hover:bg-[#f7f0f2] text-xs font-semibold"
                >
                  ← Volver
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Siguiente paso →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Condition / Preferences */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-semibold text-[#362229]">
                3. ¿Tenés alguna preferencia o condición particular?
              </h3>
              <p className="text-xs text-[#865f67] mb-4">
                Esto nos permite ajustar la tecnología a tu sensibilidad y tiempos:
              </p>

              <div className="space-y-2.5">
                {conditionOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCondition(opt.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${
                      condition === opt.id
                        ? 'border-[#865f67] bg-[#f7f0f2] shadow-sm ring-1 ring-[#865f67]'
                        : 'border-[#eddfe3] bg-[#fcfaf8] hover:border-[#d8bac2] hover:bg-white'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-medium text-[#362229]">{opt.label}</p>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-full border border-[#d8bac2] text-[#5a3d44] hover:bg-[#f7f0f2] text-xs font-semibold"
                >
                  ← Volver
                </button>
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="px-8 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Ver Mi Plan Recomendado ✨
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Result Screen */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#eddfe3] shadow-xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#eddfe3]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#865f67]">
                Resultado de Diagnóstico Personalizado
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#362229] mt-1">
                {recommendation.title}
              </h3>
            </div>
            <button
              onClick={() => {
                setResultShown(false);
                setStep(1);
              }}
              className="text-xs text-[#865f67] underline hover:text-[#5a3d44] font-medium"
            >
              Hacer otro diagnóstico
            </button>
          </div>

          <p className="text-sm text-[#5a3d44] leading-relaxed">
            {recommendation.description}
          </p>

          {/* Primary Recommended Treatment Card */}
          <div className="bg-[#fcfaf8] rounded-2xl p-5 sm:p-6 border border-[#eddfe3]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#865f67] block mb-2">
              Tratamiento Eje
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-editorial text-2xl font-semibold text-[#362229]">
                  {recommendation.primaryTreatment.name}
                </h4>
                <p className="text-xs text-[#5a3d44] mt-1 max-w-lg">
                  {recommendation.primaryTreatment.shortDesc}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#865f67]">
                  <span>⏱ {recommendation.primaryTreatment.sessionDuration}</span>
                  <span>·</span>
                  <span>🗓 {recommendation.estimatedSessions}</span>
                </div>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onSelectTreatment(recommendation.primaryTreatment)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-[#d8bac2] text-xs font-semibold text-[#5a3d44] hover:bg-[#f7f0f2]"
                >
                  Ver detalles
                </button>
                <button
                  onClick={() => onGoToBooking(recommendation.primaryTreatment)}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs font-semibold shadow-sm"
                >
                  Agendar
                </button>
              </div>
            </div>
          </div>

          {/* Complementary Treatments if any */}
          {recommendation.secondaryTreatments.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-3">
                Tratamientos complementarios sugeridos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recommendation.secondaryTreatments.map((sec) => (
                  <div key={sec.id} className="p-4 rounded-xl border border-[#eddfe3] bg-white flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-xs text-[#362229]">{sec.name}</h5>
                      <span className="text-[11px] text-[#865f67]">{sec.categoryLabel}</span>
                    </div>
                    <button
                      onClick={() => onSelectTreatment(sec)}
                      className="text-xs font-semibold text-[#865f67] hover:underline"
                    >
                      Conocer más →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expert Tip */}
          <div className="p-4 rounded-2xl bg-[#f7f0f2] border border-[#eddfe3] text-xs text-[#5a3d44] flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <strong className="text-[#362229] block mb-0.5">Consejo de Liliana para vos:</strong>
              {recommendation.personalizedTip}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#eddfe3]">
            <a
              href={getWhatsAppDiagnosticUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Enviar este diagnóstico por WhatsApp</span>
            </a>

            <button
              onClick={() => onGoToBooking(recommendation.primaryTreatment)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
            >
              Agendar Turno para este plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
