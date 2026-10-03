import { useState, useEffect } from 'react';
import { Treatment, GalleryItem, BookingAppointment } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { TreatmentsView } from './components/TreatmentsView';
import { AdvisorView } from './components/AdvisorView';
import { BookingView } from './components/BookingView';
import { TreatmentModal } from './components/TreatmentModal';
import { GalleryModal } from './components/GalleryModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('inicio');
  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<Treatment | null>(null);
  const [selectedTreatmentBooking, setSelectedTreatmentBooking] = useState<Treatment | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Handle navigation
  const handleNavigate = (view: string, targetId?: string) => {
    setCurrentView(view);
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (treatment?: Treatment) => {
    setSelectedTreatmentBooking(treatment || null);
    setCurrentView('turnos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdvisor = () => {
    setCurrentView('diagnostico');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingSuccess = (appointment: BookingAppointment) => {
    setToastMessage(`Turno para ${appointment.treatmentName} registrado. ¡Completá el envío por WhatsApp!`);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#362229]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-[#362229] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#d8bac2] flex items-center gap-3 text-xs sm:text-sm animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-emerald-400">✓</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#d8bac2] hover:text-white ml-2 p-1"
            aria-label="Cerrar notificación"
          >
            ×
          </button>
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Screen Views */}
      <main className="flex-1">
        {currentView === 'inicio' && (
          <HomeView
            onSelectTreatment={(t) => setSelectedTreatmentModal(t)}
            onBookTreatment={(t) => handleOpenBooking(t)}
            onOpenBooking={() => handleOpenBooking()}
            onOpenAdvisor={handleOpenAdvisor}
            onOpenGalleryItem={(item) => setSelectedGalleryItem(item)}
            onNavigateToTreatments={() => handleNavigate('tratamientos')}
          />
        )}

        {currentView === 'tratamientos' && (
          <TreatmentsView
            onSelectTreatment={(t) => setSelectedTreatmentModal(t)}
            onBookTreatment={(t) => handleOpenBooking(t)}
          />
        )}

        {currentView === 'diagnostico' && (
          <AdvisorView
            onSelectTreatment={(t) => setSelectedTreatmentModal(t)}
            onGoToBooking={(t) => handleOpenBooking(t)}
          />
        )}

        {currentView === 'turnos' && (
          <BookingView
            initialTreatment={selectedTreatmentBooking}
            onSuccessBooking={handleBookingSuccess}
          />
        )}
      </main>

      {/* Treatment Detail Lightbox Modal */}
      <TreatmentModal
        treatment={selectedTreatmentModal}
        onClose={() => setSelectedTreatmentModal(null)}
        onBookTreatment={(t) => {
          setSelectedTreatmentModal(null);
          handleOpenBooking(t);
        }}
      />

      {/* Gallery / Clinic Spaces Lightbox Modal */}
      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Main Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
