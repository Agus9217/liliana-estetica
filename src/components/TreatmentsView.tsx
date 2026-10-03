import React, { useState } from 'react';
import { Treatment, TreatmentCategory } from '../types';
import { TREATMENTS } from '../data/treatments';

interface TreatmentsViewProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatment: Treatment) => void;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({
  onSelectTreatment,
  onBookTreatment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: TreatmentCategory; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'laser', label: 'Depilación Láser' },
    { id: 'corporal', label: 'Estética Corporal' },
    { id: 'facial', label: 'Cuidado Facial' },
    { id: 'relax', label: 'Relax & Drenaje' },
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory = selectedCategory === 'todos' || t.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.targetAreas.some((area) => area.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">
          Catálogo Clínico
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
          Nuestros Tratamientos
        </h2>
        <p className="text-base text-[#5a3d44] leading-relaxed">
          Explorá las distintas opciones de aparatología y cuidado corporal, facial y terapéutico en nuestro consultorio de Morón.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#eddfe3]">
        {/* Category Tabs (Segmented interactive buttons as allowed in Frontend Design) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#f7f0f2] rounded-2xl border border-[#eddfe3] w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white text-[#362229] shadow-sm'
                  : 'text-[#5a3d44] hover:text-[#362229]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Buscar por zona o tratamiento..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#d8bac2] bg-white text-xs text-[#362229] placeholder-[#9c737c] focus:outline-none focus:ring-2 focus:ring-[#865f67]/40"
          />
          <svg
            className="w-4 h-4 text-[#865f67] absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Grid of Treatments */}
      {filteredTreatments.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#eddfe3] p-8">
          <p className="text-base text-[#5a3d44] mb-3">No encontramos tratamientos para tu búsqueda.</p>
          <button
            onClick={() => {
              setSelectedCategory('todos');
              setSearchQuery('');
            }}
            className="text-xs font-semibold text-[#865f67] underline"
          >
            Ver todos los tratamientos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTreatments.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#eddfe3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="h-44 overflow-hidden relative bg-[#f7f0f2]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#362229]/80 text-[#fdf9fa] text-[10px] tracking-wider uppercase font-semibold px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                    {t.categoryLabel}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-editorial text-xl font-semibold text-[#362229] mb-1.5 leading-snug">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#5a3d44] leading-relaxed mb-4 line-clamp-3">
                    {t.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#f7f0f2] text-xs text-[#865f67]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold">•</span>
                      <span>Duración: {t.sessionDuration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold">•</span>
                      <span>{t.recommendedSessions}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => onSelectTreatment(t)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#f7f0f2] hover:bg-[#eddfe3] text-[#362229] transition-colors text-center"
                >
                  Conocer más detalles
                </button>
                <button
                  onClick={() => onBookTreatment(t)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#865f67] hover:bg-[#5a3d44] text-white transition-colors text-center shadow-xs"
                >
                  Reservar Turno
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
