import React from 'react';

interface FooterProps {
  onNavigate: (view: string, targetId?: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#2e1a21] text-[#f7f0f2] pt-16 pb-12 border-t border-[#362229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5a3d44]/80">
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3axlyxh3c2mxYtLrKIcehDXy4T33-kbpeDxHcl2SQOFXwvivLt7HHIs7PM8ky0yUg_Vj4mA5KOXKHK_LJZOQnJH039M1kg52rgKkwpz9Qc15HmrTwRtqAs1hat5MpWCN8--3df8KvlluxIjkE7KyshDY_i_Ft0Io612tTX-WRjEgZvoQ9MyLrL_ucS-3-9EDRCQW86FdLz73gIEI6zXYwPugjMC5RV4LZkxSlPnzWK1BrGLjmJPsIJAM4_I0hYVz"
                alt="Liliana Bojanich Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#c9a4ad]"
                width={48}
                height={48}
              />
              <div>
                <span className="font-editorial text-2xl font-semibold tracking-tight text-white block">
                  Liliana Bojanich
                </span>
                <span className="text-xs uppercase tracking-widest text-[#d8bac2]">
                  Estética Corporal y Facial
                </span>
              </div>
            </div>
            <p className="text-xs text-[#d8bac2]/90 leading-relaxed max-w-sm mb-6">
              Espacio dedicado a acompañar tu bienestar personal mediante tratamientos estéticos integrales, faciales, modelación y depilación definitiva en Morón, Provincia de Buenos Aires.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#eddfe3]">
              <svg className="w-4 h-4 text-[#c9a4ad] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Gral. Bartolomé Mitre 687, Morón, Buenos Aires</span>
            </div>
          </div>

          {/* Links Navigation (Col 6-8) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Navegación & Servicios
            </h4>
            <ul className="space-y-2 text-xs text-[#d8bac2]">
              <li>
                <button
                  onClick={() => onNavigate('inicio', 'depilacion')}
                  className="hover:text-white transition-colors text-left"
                >
                  Depilación Definitiva Láser
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tratamientos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Criolipólisis Plana & Modelación
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tratamientos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Radiofrecuencia Facial y Corporal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tratamientos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Presoterapia Secuencial & Drenaje
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diagnostico')}
                  className="hover:text-white transition-colors text-left"
                >
                  Test de Diagnóstico Personalizado
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors text-left"
                >
                  Reservar Turno Online
                </button>
              </li>
            </ul>
          </div>

          {/* Consultation & Contact (Col 9-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Atención Personalizada
            </h4>
            <p className="text-xs text-[#d8bac2] leading-relaxed mb-4">
              Coordinamos turnos y consultas con agenda previa de Lunes a Sábados.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-full bg-[#865f67] hover:bg-[#9c737c] text-white text-xs font-semibold text-center transition-all"
              >
                Agendar Turno Online
              </button>
              <a
                href="https://wa.me/5491100000000?text=Hola%20Liliana,%20quisiera%20consultar%20por%20un%20turno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#c9a4ad] hover:bg-[#5a3d44] text-[#f7f0f2] text-xs font-medium text-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9c737c] gap-4">
          <p>© Liliana Bojanich Estética Corporal y Facial. Todos los derechos reservados.</p>
          <p>Morón, Gran Buenos Aires, Argentina.</p>
        </div>
      </div>
    </footer>
  );
};
