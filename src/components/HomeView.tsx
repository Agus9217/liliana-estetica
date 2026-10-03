import React, { useState } from 'react';
import { Treatment, GalleryItem } from '../types';
import { TREATMENTS } from '../data/treatments';
import { FAQS, GALLERY_ITEMS, TESTIMONIALS } from '../data/faqs';

interface HomeViewProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatment: Treatment) => void;
  onOpenBooking: () => void;
  onOpenAdvisor: () => void;
  onOpenGalleryItem: (item: GalleryItem) => void;
  onNavigateToTreatments: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTreatment,
  onBookTreatment,
  onOpenBooking,
  onOpenAdvisor,
  onOpenGalleryItem,
  onNavigateToTreatments,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-0">
      {/* BEGIN: HeroSection */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden" id="inicio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Content Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7f0f2] border border-[#eddfe3] text-[#5a3d44] text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#b88f98] animate-pulse"></span>
                Estética Corporal y Facial · Morón
              </div>

              {/* Headline */}
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#362229] leading-[1.08] mb-6">
                Sentite bien.<br className="hidden sm:inline" />
                <span className="italic font-normal text-[#865f67]">Cuidate mejor.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#5a3d44]/90 max-w-xl font-normal leading-relaxed mb-8">
                Estética corporal y facial con tratamientos pensados para acompañar tu bienestar y cuidado personal en un ambiente cálido y profesional en pleno Morón.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                >
                  <span>Reservar Turno Online</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  onClick={onOpenAdvisor}
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-[#f7f0f2] hover:bg-[#eddfe3] text-[#5a3d44] border border-[#d8bac2] font-medium text-sm sm:text-base transition-all"
                >
                  <span>✨ Diagnóstico Personalizado</span>
                </button>

                <a
                  href="https://wa.me/5491100000000?text=Hola%20Liliana,%20quisiera%20solicitar%20un%20turno%20o%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#fcfaf8] text-[#362229] border border-[#d8bac2] font-medium text-sm transition-all"
                >
                  <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Value Grid */}
              <div className="pt-6 border-t border-[#eddfe3] w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-[#5a3d44] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#865f67] font-bold">✓</span> Estética corporal
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#865f67] font-bold">✓</span> Estética facial
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#865f67] font-bold">✓</span> Depilación láser
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#865f67] font-bold">✓</span> Consulta previa
                </div>
              </div>
            </div>

            {/* Hero Image & Ambient Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#eddfe3]/50 rounded-full blur-2xl -z-10"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-[#f7f0f2]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8zMJgemHWkxd-FiJU3J2meOex_QP53-EVYFV4RXFoEAPeGJUD-MmgwfJhuFiLh1jCWQS28nOInXnbthNFpy9SS-zkNN7EIcD41BZXnIcV_r7L9Zu9Xu3q5FLAa208SHjrYALZCisnitK0SLT8tEWRqAlYFa9Sm6M5_Hyvbb1oCn-utW-xVZpAIPB2ERkY0GYc3JAP8m_5o4KO0f62asiFqlZs6bb3IXEzXmgPl1qMecjlwlSMTiM"
                    alt="Sala de tratamiento y tecnología estética en Morón"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 soft-blur p-4 sm:p-5 rounded-2xl shadow-xl border border-[#eddfe3] max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#f7f0f2] text-[#865f67]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#362229]">Atención personalizada</h4>
                      <p className="text-xs text-[#865f67] mt-0.5">Diagnóstico y asesoramiento adaptado a tus objetivos de cuidado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: IntroSection */}
      <section className="py-16 md:py-24 bg-white border-y border-[#eddfe3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Bienvenidos</span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
              Un espacio para cuidar de vos
            </h2>
            <p className="text-base sm:text-lg text-[#5a3d44] font-normal leading-relaxed">
              Una propuesta integral que combina estética corporal, facial y bienestar, con diferentes alternativas para acompañar tus objetivos de cuidado personal con calidez y dedicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fcfaf8] p-8 rounded-2xl border border-[#eddfe3] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#f7f0f2] text-[#865f67] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-[#362229] mb-3">Atención personalizada</h3>
              <p className="text-sm text-[#5a3d44] leading-relaxed">
                Cada persona tiene prioridades y necesidades únicas. Comenzamos escuchándote para sugerirte las opciones acordes a vos.
              </p>
            </div>

            <div className="bg-[#fcfaf8] p-8 rounded-2xl border border-[#eddfe3] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#f7f0f2] text-[#865f67] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-[#362229] mb-3">Tratamientos integrales</h3>
              <p className="text-sm text-[#5a3d44] leading-relaxed">
                Combinamos aparatología estética moderna, técnicas manuales relajantes y cuidados dermatológicos específicos.
              </p>
            </div>

            <div className="bg-[#fcfaf8] p-8 rounded-2xl border border-[#eddfe3] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#f7f0f2] text-[#865f67] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl font-semibold text-[#362229] mb-3">Bienestar y cuidado</h3>
              <p className="text-sm text-[#5a3d44] leading-relaxed">
                Más que un tratamiento estético, un momento de serenidad y desconexión para renovarte física y emocionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: IntroSection */}

      {/* BEGIN: TreatmentsGridSection */}
      <section className="py-16 md:py-24 bg-[#fcf9f8]" id="tratamientos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Propuesta integral</span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
              Nuestros tratamientos
            </h2>
            <p className="text-base sm:text-lg text-[#5a3d44] font-normal leading-relaxed">
              Conocé diferentes opciones de estética corporal y facial y consultá cuál puede adaptarse mejor a vos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREATMENTS.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#eddfe3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#865f67] mb-2">
                    {treatment.categoryLabel}
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#362229] mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-[#5a3d44] leading-relaxed mb-4">
                    {treatment.shortDesc}
                  </p>
                  <ul className="text-xs text-[#5a3d44] space-y-1.5 pt-3 border-t border-[#f7f0f2]">
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#865f67] font-bold">•</span> {treatment.targetAreas.slice(0, 2).join(' y ')}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#865f67] font-bold">•</span> {treatment.recommendedSessions}
                    </li>
                  </ul>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="w-full inline-flex justify-center items-center py-2 px-4 rounded-xl text-xs font-semibold bg-[#f7f0f2] hover:bg-[#eddfe3] text-[#362229] transition-colors"
                  >
                    Ver detalles y cuidados
                  </button>
                  <a
                    href={`https://wa.me/5491100000000?text=${encodeURIComponent(treatment.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center py-2 px-4 rounded-xl text-xs font-semibold bg-[#865f67] hover:bg-[#5a3d44] text-white transition-colors"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onNavigateToTreatments}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#d8bac2] bg-white text-[#5a3d44] hover:bg-[#f7f0f2] text-xs font-semibold shadow-xs"
            >
              <span>Explorar catálogo completo con buscador y filtros</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
      {/* END: TreatmentsGridSection */}

      {/* BEGIN: LaserSpotlightSection */}
      <section className="py-16 md:py-24 bg-[#f7f0f2]/60 border-y border-[#eddfe3]" id="depilacion">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8zMJgemHWkxd-FiJU3J2meOex_QP53-EVYFV4RXFoEAPeGJUD-MmgwfJhuFiLh1jCWQS28nOInXnbthNFpy9SS-zkNN7EIcD41BZXnIcV_r7L9Zu9Xu3q5FLAa208SHjrYALZCisnitK0SLT8tEWRqAlYFa9Sm6M5_Hyvbb1oCn-utW-xVZpAIPB2ERkY0GYc3JAP8m_5o4KO0f62asiFqlZs6bb3IXEzXmgPl1qMecjlwlSMTiM"
                  alt="Cabina de depilación definitiva y tecnología láser en Morón"
                  className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/10]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 soft-blur p-4 rounded-xl text-xs text-[#362229] border border-[#eddfe3]">
                  ✨ <strong>Equipamiento moderno y seguro</strong> en cabina privada acondicionada para tu tranquilidad.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eddfe3] text-[#362229] text-xs font-semibold tracking-wider uppercase mb-3">
                Tratamiento Destacado
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] leading-tight mb-4">
                Depilación Definitiva Láser
              </h2>
              <p className="text-base text-[#5a3d44] leading-relaxed mb-6">
                Una opción práctica para quienes buscan simplificar su rutina y conocer una alternativa de depilación de largo plazo. Trabajamos con equipamiento diseñado para brindar comodidad y eficacia progresiva en cada sesión.
              </p>

              <div className="space-y-3.5 mb-8 w-full">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#eddfe3]">
                  <div className="p-1 rounded-full bg-[#f7f0f2] text-[#865f67] mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#362229]">Consulta y asesoramiento previo</h4>
                    <p className="text-xs text-[#865f67]">Analizamos tu tipo de piel y vello para establecer el intervalo de sesiones ideal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#eddfe3]">
                  <div className="p-1 rounded-full bg-[#f7f0f2] text-[#865f67] mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#362229]">Sesiones adaptadas a cada caso</h4>
                    <p className="text-xs text-[#865f67]">Planes tanto para zonas específicas como corporales completas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#eddfe3]">
                  <div className="p-1 rounded-full bg-[#f7f0f2] text-[#865f67] mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#362229]">Cuidado y confort durante el proceso</h4>
                    <p className="text-xs text-[#865f67]">Protocolos rigurosos para una experiencia agradable y confiable.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onBookTreatment(TREATMENTS[0])}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white font-medium text-sm transition-all shadow-sm"
                >
                  <span>Reservar turno de láser</span>
                </button>
                <a
                  href="https://wa.me/5491100000000?text=Hola%20Liliana,%20deseo%20consultar%20promociones%20y%20fechas%20de%20Depilaci%C3%B3n%20Definitiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#fcfaf8] text-[#5a3d44] border border-[#d8bac2] text-sm font-medium transition-all"
                >
                  <span>Consultar fechas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: LaserSpotlightSection */}

      {/* BEGIN: BodyCareSection */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Modelación & Tonificación</span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
                Cuidado Corporal Personalizado
              </h2>
              <p className="text-base text-[#5a3d44] font-normal leading-relaxed mb-6">
                Diferentes tratamientos pueden formar parte de una propuesta personalizada de estética y bienestar corporal. Desde la reducción y remodelación hasta el drenaje linfático asistido.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#fcfaf8] border border-[#eddfe3]">
                  <h4 className="font-editorial text-xl font-semibold text-[#362229]">Criolipólisis Plana</h4>
                  <p className="text-xs text-[#865f67] mt-1">Enfocada en panículo adiposo localizado sin succión agresiva.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#fcfaf8] border border-[#eddfe3]">
                  <h4 className="font-editorial text-xl font-semibold text-[#362229]">Presoterapia Secuencial</h4>
                  <p className="text-xs text-[#865f67] mt-1">Drenaje profundo, alivio circulatorio y sensación de liviandad.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#fcfaf8] border border-[#eddfe3]">
                  <h4 className="font-editorial text-xl font-semibold text-[#362229]">Ultracavitación</h4>
                  <p className="text-xs text-[#865f67] mt-1">Ondas ultrasónicas para acompañar planes de remodelación.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#fcfaf8] border border-[#eddfe3]">
                  <h4 className="font-editorial text-xl font-semibold text-[#362229]">Electroestimulación</h4>
                  <p className="text-xs text-[#865f67] mt-1">Gimnasia pasiva y tonificación muscular progresiva.</p>
                </div>
              </div>

              <a
                href="https://wa.me/5491100000000?text=Hola%20Liliana,%20deseo%20consultar%20por%20tratamientos%20corporales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-medium transition-all"
              >
                Consultar por plan corporal
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-square bg-[#f7f0f2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrkveh_l3Qs6pnpnX13BM_rGQ4EGXKzNjaTXzdWB9caER8AiwTF658cy37-_LbOgDdCI9qQmGkq00Vqg9aOfYp3WyZnJk3RKP5sbc6HuUaxyZFnb11fiw0vXei1zFIgKmtYz6EUXyzqHwUP7BcVLUlmC6SMIdc0XBl6INMmYS_JzIzXAIBqO5S7DZi97Lxbl3fRvkI8Rm-0t45NJNcpWW4eh4XqB-MMm15oQSXj_r9dzLIcC1f1kw"
                  alt="Aparatología corporal de avanzada en Liliana Bojanich Morón"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: BodyCareSection */}

      {/* BEGIN: FacialCareSection */}
      <section className="py-16 md:py-24 bg-[#fcf9f8] border-t border-[#eddfe3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[4/3] bg-[#f7f0f2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe2i2PZdWdhk2zIUnH3VHIYw4i1GlJHbn5gtDdA-5WqJOevnCmHHG6Q9HHSapZR7PJu6KpjdCLPaFVY72szfDTQ34dTBshxfVzkpyoLP1hndEglYGDd03mYwwN7Z1j_47ApEXdPMLSsJLExBvkcSmF_PckDjCr8_dDf4Da2pz2tS_Jw0sqc6GCpyCGcC1THRGGN9PdIXeBHKP3aBZ55yBOfkbeqmNiBUUxGBHQ7GGKdGz9hH83S0Q"
                  alt="Tratamiento de estética facial y bienestar de la piel"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 soft-blur p-4 rounded-xl text-xs text-[#362229] border border-[#eddfe3]">
                  💆‍♀️ <strong>Dermoestética suave y respetuosa</strong>: protocolos adaptados a pieles sensibles, secas o con tendencia mixta.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Salud Dérmica</span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
                Cuidado Facial Integral
              </h2>
              <p className="text-base text-[#5a3d44] font-normal leading-relaxed mb-6">
                Una propuesta enfocada en el cuidado de la piel y el bienestar, adaptada a las necesidades de cada persona. Tratamos tu rostro con la sutileza y profesionalismo que merece para lucir fresca, luminosa y descansada.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b88f98]"></span>
                  <span className="text-sm text-[#362229] font-medium">Higiene facial profunda con extracción suave y descongestión</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b88f98]"></span>
                  <span className="text-sm text-[#362229] font-medium">Radiofrecuencia facial para tono y estimulación de fibras</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b88f98]"></span>
                  <span className="text-sm text-[#362229] font-medium">Hidratación, nutrición y máscaras calmantes específicas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b88f98]"></span>
                  <span className="text-sm text-[#362229] font-medium">Asesoramiento de rutina para tu cuidado diario en casa</span>
                </div>
              </div>

              <a
                href="https://wa.me/5491100000000?text=Hola%20Liliana,%20quisiera%20consultar%20por%20tratamientos%20faciales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-medium transition-all"
              >
                Consultar tratamientos faciales
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END: FacialCareSection */}

      {/* BEGIN: AboutSection */}
      <section className="py-16 md:py-24 bg-white border-y border-[#eddfe3]/70" id="sobre-liliana">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Nuestra Filosofía</span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-6">
                Una atención cercana, profesional y personalizada
              </h2>
              <div className="space-y-4 text-base text-[#5a3d44] leading-relaxed font-normal">
                <p>
                  En <strong>Liliana Bojanich Estética Corporal y Facial</strong> buscamos brindar un espacio dedicado al cuidado, la estética y el bienestar personal en el corazón de Morón.
                </p>
                <p>
                  Creemos que cada persona es diferente, por eso cada propuesta de tratamiento parte de una consulta previa para escuchar lo que buscás, evaluar tu caso y sugerirte opciones realistas y armónicas.
                </p>
                <p>
                  Nuestro compromiso es que cada sesión sea un momento agradable, seguro y de plena confianza para vos.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#eddfe3] grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <span className="font-editorial text-3xl font-bold text-[#362229]">Morón</span>
                  <p className="text-xs text-[#865f67] mt-0.5">Ubicación céntrica y de fácil acceso</p>
                </div>
                <div>
                  <span className="font-editorial text-3xl font-bold text-[#362229]">1 a 1</span>
                  <p className="text-xs text-[#865f67] mt-0.5">Atención personalizada y con turno</p>
                </div>
                <div>
                  <span className="font-editorial text-3xl font-bold text-[#362229]">Integral</span>
                  <p className="text-xs text-[#865f67] mt-0.5">Corporal, facial y bienestar</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[4/3] bg-[#f7f0f2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrWeXRcO7C0qZAoZJ1Qb9DV5rIeGWH8_IBIVR1n7lYjSndfQZd8oPCsZL_92Hp-PnhrjONiuB5mlPIAYtTalORSZmwXJIZU8gagmsvmLSBCweXbz8dA_4W3lrvx8BPXCp2zLfhsXm0iefKCH-FzTGi7EX42tECDLeBrUZEaHBJJvowV5pm-S12g_obKCBywznz2NxMZzG6IWWToOU42mTAcBZcOs0IDZ8-2Z3oO_KbqsfkeeiDU4g"
                  alt="Recepción y área de bienvenida del consultorio en Morón"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#362229]/60 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-xs sm:text-sm font-medium">Consultorio ambientado para brindarte tranquilidad desde tu llegada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: AboutSection */}

      {/* BEGIN: ExperienceBenefitsSection */}
      <section className="py-16 md:py-24 bg-[#fcf9f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">¿Por qué elegirnos?</span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
              Una experiencia pensada para vos
            </h2>
            <p className="text-base text-[#5a3d44] leading-relaxed">
              Priorizamos tu comodidad, seguridad y los resultados progresivos en cada etapa del tratamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#eddfe3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#f7f0f2] text-[#865f67] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-editorial text-xl font-semibold text-[#362229] mb-2">Atención Personalizada</h3>
                <p className="text-xs text-[#5a3d44] leading-relaxed">
                  Cada consulta parte de entender qué estás buscando para diseñar una propuesta adecuada a tus tiempos y preferencias.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#eddfe3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#f7f0f2] text-[#865f67] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-editorial text-xl font-semibold text-[#362229] mb-2">Variedad de Tratamientos</h3>
                <p className="text-xs text-[#5a3d44] leading-relaxed">
                  Opciones corporales, faciales, depilación definitiva y masajes relajantes reunidos en un único espacio.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#eddfe3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#f7f0f2] text-[#865f67] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-editorial text-xl font-semibold text-[#362229] mb-2">Cuidado Profesional</h3>
                <p className="text-xs text-[#5a3d44] leading-relaxed">
                  Una experiencia enfocada en la comodidad, higiene y confianza durante todo el proceso de atención.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#eddfe3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#f7f0f2] text-[#865f67] flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="font-editorial text-xl font-semibold text-[#362229] mb-2">Contacto Directo</h3>
                <p className="text-xs text-[#5a3d44] leading-relaxed">
                  Consultá fácilmente por WhatsApp sin intermediarios y coordiná tus horarios de manera simple y ágil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: ExperienceBenefitsSection */}

      {/* BEGIN: GallerySection */}
      <section className="py-16 md:py-24 bg-white border-t border-[#eddfe3]/70" id="galeria">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">El Espacio</span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
              Conocé nuestro lugar
            </h2>
            <p className="text-base text-[#5a3d44] leading-relaxed">
              Hacé clic en cualquier foto para ver las cabinas, aparatología y comodidades del consultorio en Morón.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onOpenGalleryItem(item)}
                className="rounded-2xl overflow-hidden shadow-sm aspect-square border border-[#eddfe3] group relative text-left focus:outline-none focus:ring-2 focus:ring-[#865f67]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#362229]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#d8bac2]">{item.category}</span>
                  <p className="text-xs font-semibold">{item.title}</p>
                  <span className="text-[11px] underline mt-1">Ver en detalle 🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* END: GallerySection */}

      {/* BEGIN: TestimonialsDemoSection */}
      <section className="py-16 md:py-24 bg-[#f7f0f2]/60 border-t border-[#eddfe3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Comunidad</span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-4">
              Experiencias de quienes nos visitan
            </h2>
            <p className="text-sm text-[#5a3d44]">
              La confianza y satisfacción de quienes asisten al consultorio en Morón es nuestro mayor compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-2xl border border-[#eddfe3] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div aria-label="5 de 5 estrellas" className="flex text-amber-400 mb-3">
                    ★★★★★
                  </div>
                  <p className="text-xs text-[#5a3d44] leading-relaxed italic mb-4">
                    "{test.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#f7f0f2] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#362229]">{test.name}</span>
                  <span className="text-[10px] text-[#865f67] uppercase tracking-wider">{test.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: TestimonialsDemoSection */}

      {/* BEGIN: FAQSection */}
      <section className="py-16 md:py-24 bg-white border-t border-[#eddfe3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Preguntas Frecuentes</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#362229] mt-2 mb-3">
              Todo lo que necesitás saber
            </h2>
            <p className="text-sm text-[#5a3d44]">
              Respuestas a las consultas habituales sobre cuidados, sesiones y turnos.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#eddfe3] overflow-hidden transition-all bg-[#fcfaf8]"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-semibold text-[#362229]">{faq.question}</span>
                    <span className={`text-lg text-[#865f67] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5a3d44] leading-relaxed border-t border-[#eddfe3] pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* END: FAQSection */}

      {/* BEGIN: LocationSection */}
      <section className="py-16 md:py-24 bg-[#fcfaf8] border-t border-[#eddfe3]" id="ubicacion">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Ubicación y Contacto</span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-6">
                Encontranos en Morón
              </h2>
              <p className="text-base text-[#5a3d44] mb-8 leading-relaxed">
                Nuestro espacio está situado en una zona céntrica y estratégica de Morón, con fácil acceso desde transporte público y estacionamientos cercanos.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#f7f0f2] text-[#865f67] mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#362229]">Dirección</h4>
                    <p className="text-sm text-[#865f67]">Gral. Bartolomé Mitre 687, Morón, Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#f7f0f2] text-[#865f67] mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#362229]">Horarios de atención</h4>
                    <p className="text-sm text-[#865f67]">Lunes a Sábados con turno previo coordinado</p>
                    <span className="text-xs text-[#9c737c] italic">(Horarios flexibles según disponibilidad de agenda)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=Gral.+Bartolome+Mitre+687,+Moron,+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#f7f0f2] text-[#5a3d44] border border-[#d8bac2] text-xs sm:text-sm font-medium transition-all"
                >
                  <span>Cómo llegar (Google Maps)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
                >
                  <span>Reservar turno online</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-[#eddfe3] shadow-md bg-[#f6f1ec] p-8 flex flex-col items-center justify-center text-center min-h-[340px] relative">
                <div className="w-16 h-16 rounded-full bg-[#eddfe3] flex items-center justify-center text-[#5a3d44] mb-4 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>
                </div>
                <h4 className="font-editorial text-2xl font-semibold text-[#362229] mb-2">Morón Centro</h4>
                <p className="text-sm font-medium text-[#5a3d44] max-w-sm mb-4">
                  Gral. Bartolomé Mitre 687, Morón, Buenos Aires
                </p>
                <p className="text-xs text-[#865f67] max-w-xs mb-6">
                  A 4 cuadras de la estación de tren de Morón y principales paradas de colectivos (136, 153, 166, 236, 238, 242, 338).
                </p>
                <a
                  href="https://maps.google.com/?q=Gral.+Bartolome+Mitre+687,+Moron,+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: LocationSection */}

      {/* BEGIN: InstagramFeedSection */}
      <section className="py-16 md:py-20 bg-[#f6f1ec] border-t border-[#eddfe3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">Redes Sociales</span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#362229] mt-1">
                Seguinos en Instagram
              </h2>
              <p className="text-sm text-[#865f67] mt-1">Conocé consejos de autocuidado, novedades y el día a día en el consultorio.</p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#d8bac2] text-[#5a3d44] hover:text-[#865f67] text-xs font-semibold shadow-sm transition-all"
            >
              <span>Ver perfil @lilianabojanich</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square border border-[#eddfe3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8zMJgemHWkxd-FiJU3J2meOex_QP53-EVYFV4RXFoEAPeGJUD-MmgwfJhuFiLh1jCWQS28nOInXnbthNFpy9SS-zkNN7EIcD41BZXnIcV_r7L9Zu9Xu3q5FLAa208SHjrYALZCisnitK0SLT8tEWRqAlYFa9Sm6M5_Hyvbb1oCn-utW-xVZpAIPB2ERkY0GYc3JAP8m_5o4KO0f62asiFqlZs6bb3IXEzXmgPl1qMecjlwlSMTiM"
                alt="Instagram post 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square border border-[#eddfe3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe2i2PZdWdhk2zIUnH3VHIYw4i1GlJHbn5gtDdA-5WqJOevnCmHHG6Q9HHSapZR7PJu6KpjdCLPaFVY72szfDTQ34dTBshxfVzkpyoLP1hndEglYGDd03mYwwN7Z1j_47ApEXdPMLSsJLExBvkcSmF_PckDjCr8_dDf4Da2pz2tS_Jw0sqc6GCpyCGcC1THRGGN9PdIXeBHKP3aBZ55yBOfkbeqmNiBUUxGBHQ7GGKdGz9hH83S0Q"
                alt="Instagram post 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square border border-[#eddfe3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrkveh_l3Qs6pnpnX13BM_rGQ4EGXKzNjaTXzdWB9caER8AiwTF658cy37-_LbOgDdCI9qQmGkq00Vqg9aOfYp3WyZnJk3RKP5sbc6HuUaxyZFnb11fiw0vXei1zFIgKmtYz6EUXyzqHwUP7BcVLUlmC6SMIdc0XBl6INMmYS_JzIzXAIBqO5S7DZi97Lxbl3fRvkI8Rm-0t45NJNcpWW4eh4XqB-MMm15oQSXj_r9dzLIcC1f1kw"
                alt="Instagram post 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square border border-[#eddfe3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrWeXRcO7C0qZAoZJ1Qb9DV5rIeGWH8_IBIVR1n7lYjSndfQZd8oPCsZL_92Hp-PnhrjONiuB5mlPIAYtTalORSZmwXJIZU8gagmsvmLSBCweXbz8dA_4W3lrvx8BPXCp2zLfhsXm0iefKCH-FzTGi7EX42tECDLeBrUZEaHBJJvowV5pm-S12g_obKCBywznz2NxMZzG6IWWToOU42mTAcBZcOs0IDZ8-2Z3oO_KbqsfkeeiDU4g"
                alt="Instagram post 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END: InstagramFeedSection */}

      {/* BEGIN: FinalCtaBanner */}
      <section className="py-16 md:py-24 bg-[#5a3d44] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#865f67]/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#362229]/60 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#865f67]/80 text-[#f7f0f2] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#9c737c]">
            Cuidado Personal y Bienestar
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            ¿Querés encontrar el tratamiento indicado para vos?
          </h2>
          <p className="text-base sm:text-lg text-[#eddfe3] font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Escribinos por WhatsApp y consultanos sobre las diferentes opciones disponibles. Te asesoramos de manera directa y sin compromiso en nuestro consultorio de Morón.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#fcfaf8] text-[#362229] text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Agendar Turno Online</span>
              <span>→</span>
            </button>
            <a
              href="https://wa.me/5491100000000?text=Hola%20Liliana,%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20para%20encontrar%20el%20tratamiento%20indicado%20para%20m%C3%AD"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      {/* END: FinalCtaBanner */}
    </div>
  );
};
