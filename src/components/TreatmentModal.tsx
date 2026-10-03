import React from 'react';
import { Treatment } from '../types';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatment: Treatment) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 soft-blur flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#eddfe3] my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with close button */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#f7f0f2]">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#d8bac2] font-semibold mb-1">
              {treatment.categoryLabel}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold leading-tight">
              {treatment.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#fdf9fa]/90 mt-1">
              {treatment.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#362229] flex items-center justify-center transition-all shadow-md"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2">
              ¿En qué consiste?
            </h4>
            <p className="text-sm text-[#5a3d44] leading-relaxed">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Quick specs */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#fcfaf8] border border-[#eddfe3] text-xs">
            <div>
              <span className="text-[#865f67] font-semibold block mb-0.5">Duración estimada:</span>
              <span className="text-[#362229] font-medium">{treatment.sessionDuration}</span>
            </div>
            <div>
              <span className="text-[#865f67] font-semibold block mb-0.5">Frecuencia sugerida:</span>
              <span className="text-[#362229] font-medium">{treatment.recommendedSessions}</span>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2.5">
              Beneficios principales
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5a3d44]">
              {treatment.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#865f67] font-bold mt-0.5">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2.5">
              Zonas de aplicación
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {treatment.targetAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-[#f7f0f2] text-[#5a3d44] text-xs font-medium border border-[#eddfe3]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Preparation advice */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2.5">
              Indicaciones y cuidados previos
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5a3d44] bg-[#fcf9f8] p-4 rounded-xl border border-[#eddfe3]">
              {treatment.preparationTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#9c737c] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#fcf9f8] border-t border-[#eddfe3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/5491100000000?text=${encodeURIComponent(treatment.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#d8bac2] bg-white hover:bg-[#f7f0f2] text-[#362229] text-xs font-semibold transition-colors"
          >
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => onBookTreatment(treatment)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-semibold shadow transition-all"
          >
            <span>Agendar este tratamiento</span>
          </button>
        </div>
      </div>
    </div>
  );
};
