import React from 'react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 soft-blur flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#eddfe3] my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#362229] flex items-center justify-center transition-all shadow-md"
            aria-label="Cerrar vista"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">
            {item.category}
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#362229]">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#865f67] font-medium">
            {item.subtitle}
          </p>
          <p className="text-sm text-[#5a3d44] leading-relaxed pt-2">
            {item.description}
          </p>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#865f67] text-white text-xs font-semibold hover:bg-[#5a3d44]"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
