import React, { useState } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, targetId?: string) => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (view: string, targetId?: string) => {
    onNavigate(view, targetId);
    setMobileMenuOpen(false);
  };

  const whatsAppUrl =
    'https://wa.me/5491100000000?text=Hola%20Liliana,%20quisiera%20consultar%20sobre%20los%20tratamientos';

  return (
    <header className="sticky top-0 z-50 bg-[#fcf9f8]/95 soft-blur border-b border-[#eddfe3] transition-all">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        <nav
          aria-label="Navegación principal"
          className="h-[76px] sm:h-[80px] lg:h-[84px] flex items-center justify-between gap-4"
        >
          {/* IZQUIERDA: Identidad de Marca */}
          <button
            onClick={() => handleLinkClick('inicio', 'inicio')}
            className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1urg3a3qpm8aewuAgexwFyrXTPz8KAHgaAhhjoVhFR08SbtG6GPHO_xz1fee9FxpW6OHXwJt4KV1_bKXM6MRQhk1_9-lH5YaYoO_NpvUYrNxDtQAKilajNuWrg7qN1ZBImKqLJffAkzz3_OsWnk_pLiozq6OPMhCT8ovdZRs2EbJBFFw845RNU4ETuT3TMRHkGSXLzS9zWAq2mUtv4c7JchELFs0ZjnGbSG-4-dN5tlhEJfPRHtw-i5Wm3WLIwcsi"
              alt="Liliana Bojanich"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#d8bac2] transition-transform duration-300 group-hover:scale-105 shrink-0"
              width={44}
              height={44}
            />
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-[#362229] group-hover:text-[#865f67] transition-colors whitespace-nowrap">
                Liliana Bojanich
              </span>
              <span className="hidden sm:block text-[10px] sm:text-[11px] tracking-wider uppercase font-medium text-[#865f67] whitespace-nowrap">
                Estética Corporal y Facial
              </span>
            </div>
          </button>

          {/* CENTRO / DERECHA: Enlaces Principales (Solo desktop lg+) */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] xl:text-sm font-medium text-[#5a3d44] whitespace-nowrap">
            <button
              onClick={() => handleLinkClick('inicio', 'inicio')}
              className={`transition-colors hover:text-[#865f67] cursor-pointer whitespace-nowrap ${
                currentView === 'inicio' ? 'text-[#865f67] font-semibold' : ''
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleLinkClick('tratamientos', 'tratamientos')}
              className={`transition-colors hover:text-[#865f67] cursor-pointer whitespace-nowrap ${
                currentView === 'tratamientos' ? 'text-[#865f67] font-semibold' : ''
              }`}
            >
              Tratamientos
            </button>
            <button
              onClick={() => handleLinkClick('inicio', 'depilacion')}
              className="transition-colors hover:text-[#865f67] cursor-pointer whitespace-nowrap"
            >
              Depilación Láser
            </button>
            <button
              onClick={() => handleLinkClick('inicio', 'sobre-liliana')}
              className="transition-colors hover:text-[#865f67] cursor-pointer whitespace-nowrap"
            >
              Sobre Liliana
            </button>
            <button
              onClick={() => handleLinkClick('inicio', 'ubicacion')}
              className="transition-colors hover:text-[#865f67] cursor-pointer whitespace-nowrap"
            >
              Ubicación
            </button>
          </div>

          {/* CTA PRINCIPAL: Único botón de WhatsApp */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop WhatsApp CTA */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs xl:text-sm font-semibold whitespace-nowrap transition-all shadow-xs hover:shadow-sm"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>

            {/* Tablet Compact WhatsApp CTA (768px a 1023px) */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex lg:hidden items-center justify-center gap-1.5 h-[42px] px-4 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs font-semibold whitespace-nowrap transition-all shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile / Tablet Toggle Hamburguesa */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#5a3d44] hover:text-[#362229] hover:bg-[#f7f0f2] transition-colors focus:outline-none"
              aria-label="Menú principal"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Menú Desplegable Mobile (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcf9f8] border-b border-[#eddfe3] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1360px] mx-auto px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => handleLinkClick('inicio', 'inicio')}
                className={`py-3 px-3 text-left text-base font-medium rounded-xl transition-colors ${
                  currentView === 'inicio' ? 'bg-[#f7f0f2] text-[#865f67] font-semibold' : 'text-[#362229] hover:bg-[#f7f0f2]'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleLinkClick('tratamientos', 'tratamientos')}
                className={`py-3 px-3 text-left text-base font-medium rounded-xl transition-colors ${
                  currentView === 'tratamientos' ? 'bg-[#f7f0f2] text-[#865f67] font-semibold' : 'text-[#362229] hover:bg-[#f7f0f2]'
                }`}
              >
                Tratamientos
              </button>
              <button
                onClick={() => handleLinkClick('inicio', 'depilacion')}
                className="py-3 px-3 text-left text-base font-medium text-[#362229] hover:bg-[#f7f0f2] rounded-xl transition-colors"
              >
                Depilación Láser
              </button>
              <button
                onClick={() => handleLinkClick('inicio', 'sobre-liliana')}
                className="py-3 px-3 text-left text-base font-medium text-[#362229] hover:bg-[#f7f0f2] rounded-xl transition-colors"
              >
                Sobre Liliana
              </button>
              <button
                onClick={() => handleLinkClick('inicio', 'ubicacion')}
                className="py-3 px-3 text-left text-base font-medium text-[#362229] hover:bg-[#f7f0f2] rounded-xl transition-colors"
              >
                Ubicación
              </button>
            </nav>

            {/* Botón Destacado Mobile al final */}
            <div className="pt-2 border-t border-[#eddfe3]">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 h-[48px] px-6 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-sm font-semibold transition-all shadow-sm"
              >
                <svg className="w-4.5 h-4.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
