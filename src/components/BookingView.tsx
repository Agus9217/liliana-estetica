import React, { useState, useId } from 'react';
import { Treatment, BookingAppointment } from '../types';
import { TREATMENTS } from '../data/treatments';

interface BookingViewProps {
  initialTreatment?: Treatment | null;
  onClose?: () => void;
  onSuccessBooking?: (appointment: BookingAppointment) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({
  initialTreatment,
  onClose,
  onSuccessBooking,
}) => {
  const treatmentSelectId = useId();
  const clientNameId = useId();
  const clientPhoneId = useId();
  const clientNotesId = useId();

  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    initialTreatment?.id || TREATMENTS[0].id
  );

  // Generate available dates for the next 12 days (excluding Sundays)
  const availableDates = React.useMemo(() => {
    const dates: { dateStr: string; label: string; dayName: string; dayNumber: string }[] = [];
    const today = new Date();
    const formatter = new Intl.DateTimeFormat('es-AR', { weekday: 'short', day: 'numeric', month: 'short' });

    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() === 0) continue; // Skip Sundays

      const parts = formatter.formatToParts(d);
      const dayName = parts.find((p) => p.type === 'weekday')?.value || '';
      const dayNumber = parts.find((p) => p.type === 'day')?.value || '';
      const month = parts.find((p) => p.type === 'month')?.value || '';

      const isoDate = d.toISOString().split('T')[0];
      dates.push({
        dateStr: isoDate,
        label: `${dayName} ${dayNumber} ${month}`,
        dayName: dayName.toUpperCase(),
        dayNumber,
      });
    }
    return dates;
  }, []);

  const timeSlots = [
    '09:30',
    '10:45',
    '12:00',
    '14:00',
    '15:15',
    '16:30',
    '17:45',
    '18:45',
  ];

  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.dateStr || '');
  const [selectedTime, setSelectedTime] = useState<string>('15:15');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [bookedAppointment, setBookedAppointment] = useState<BookingAppointment | null>(null);
  const [formError, setFormError] = useState<string>('');

  const selectedTreatment = TREATMENTS.find((t) => t.id === selectedTreatmentId) || TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setFormError('Por favor ingresá tu nombre completo.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.length < 8) {
      setFormError('Por favor ingresá un número de teléfono de WhatsApp válido.');
      return;
    }
    setFormError('');

    const newAppointment: BookingAppointment = {
      id: `turno-${Date.now()}`,
      treatmentId: selectedTreatment.id,
      treatmentName: selectedTreatment.name,
      date: selectedDate,
      timeSlot: selectedTime,
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      clientNotes: clientNotes.trim(),
      createdAt: new Date().toISOString(),
    };

    setBookedAppointment(newAppointment);
    if (onSuccessBooking) {
      onSuccessBooking(newAppointment);
    }
  };

  const getWhatsAppBookingUrl = (appointment: BookingAppointment) => {
    const text = `Hola Liliana! Quiero confirmar la solicitud de mi turno:\n\n` +
      `👤 Nombre: ${appointment.clientName}\n` +
      `💆‍♀️ Tratamiento: ${appointment.treatmentName}\n` +
      `📅 Fecha: ${appointment.date}\n` +
      `⏰ Horario: ${appointment.timeSlot} hs\n` +
      `📞 Teléfono: ${appointment.clientPhone}\n` +
      (appointment.clientNotes ? `💬 Consulta: ${appointment.clientNotes}\n` : '') +
      `📍 Consultorio Morón (Mitre 687)`;
    return `https://wa.me/5491100000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-[#865f67] font-semibold">
          Agenda Online
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#362229] mt-2 mb-3">
          Reservá tu turno en Morón
        </h2>
        <p className="text-sm text-[#5a3d44] leading-relaxed">
          Elegí el tratamiento, seleccioná el día y horario que te quede cómodo, y coordinamos tu visita en nuestro consultorio de Mitre 687.
        </p>
      </div>

      {bookedAppointment ? (
        /* Confirmation State */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#eddfe3] shadow-lg max-w-xl mx-auto text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#f7f0f2] text-[#865f67] flex items-center justify-center mx-auto mb-5 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#362229] mb-2">
            ¡Turno pre-agendado con éxito!
          </h3>
          <p className="text-xs sm:text-sm text-[#5a3d44] mb-6">
            Para asegurar la reserva inmediata de tu horario, envianos el mensaje prearmado por WhatsApp a Liliana:
          </p>

          {/* Ticket Card */}
          <div className="bg-[#fcfaf8] border border-[#eddfe3] rounded-2xl p-5 text-left mb-6 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#eddfe3]">
              <span className="text-xs uppercase tracking-wider text-[#865f67] font-semibold">
                Detalle de tu cita
              </span>
              <span className="text-[11px] font-mono text-[#9c737c] bg-[#eddfe3] px-2 py-0.5 rounded">
                {bookedAppointment.id}
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-[#362229]">
              <p>
                <strong className="text-[#865f67]">Paciente:</strong> {bookedAppointment.clientName}
              </p>
              <p>
                <strong className="text-[#865f67]">Tratamiento:</strong> {bookedAppointment.treatmentName}
              </p>
              <p>
                <strong className="text-[#865f67]">Fecha:</strong> {bookedAppointment.date} a las{' '}
                <strong className="text-[#865f67]">{bookedAppointment.timeSlot} hs</strong>
              </p>
              <p>
                <strong className="text-[#865f67]">Lugar:</strong> Gral. Bartolomé Mitre 687, Morón
              </p>
            </div>
          </div>

          {/* WhatsApp Action */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppBookingUrl(bookedAppointment)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Enviar confirmación por WhatsApp</span>
            </a>

            <button
              onClick={() => setBookedAppointment(null)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#d8bac2] text-[#5a3d44] hover:bg-[#f7f0f2] text-xs font-semibold"
            >
              Agendar otro turno
            </button>
          </div>
        </div>
      ) : (
        /* Form View */
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#eddfe3] shadow-md space-y-8">
          {formError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formError}</span>
            </div>
          )}

          {/* 1. Treatment Selection */}
          <div>
            <label htmlFor={treatmentSelectId} className="block text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2">
              1. Seleccioná el tratamiento
            </label>
            <select
              id={treatmentSelectId}
              value={selectedTreatmentId}
              onChange={(e) => setSelectedTreatmentId(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-[#d8bac2] bg-[#fcfaf8] text-sm text-[#362229] focus:outline-none focus:ring-2 focus:ring-[#865f67]/40"
            >
              {TREATMENTS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.categoryLabel}) — {t.sessionDuration}
                </option>
              ))}
            </select>

            <div className="mt-2.5 p-3 rounded-xl bg-[#f7f0f2] border border-[#eddfe3] flex items-center justify-between text-xs text-[#5a3d44]">
              <span>⏱ Duración estimada: <strong>{selectedTreatment.sessionDuration}</strong></span>
              <span>✨ <strong>{selectedTreatment.recommendedSessions}</strong></span>
            </div>
          </div>

          {/* 2. Date Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2.5">
              2. Seleccioná la fecha deseada (Lunes a Sábados)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {availableDates.slice(0, 6).map((item) => (
                <button
                  type="button"
                  key={item.dateStr}
                  onClick={() => setSelectedDate(item.dateStr)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedDate === item.dateStr
                      ? 'bg-[#865f67] text-white border-[#865f67] shadow-sm'
                      : 'bg-[#fcfaf8] text-[#5a3d44] border-[#eddfe3] hover:border-[#d8bac2] hover:bg-[#f7f0f2]'
                  }`}
                >
                  <span className="block text-[10px] uppercase font-semibold opacity-80">{item.dayName}</span>
                  <span className="block text-lg font-bold font-editorial">{item.dayNumber}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Time Slot Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#865f67] mb-2.5">
              3. Horario preferido
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {timeSlots.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all ${
                    selectedTime === time
                      ? 'bg-[#5a3d44] text-white shadow-sm'
                      : 'bg-[#fcfaf8] text-[#5a3d44] border border-[#eddfe3] hover:bg-[#f7f0f2]'
                  }`}
                >
                  {time} hs
                </button>
              ))}
            </div>
          </div>

          {/* 4. Client Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#eddfe3]">
            <div>
              <label htmlFor={clientNameId} className="block text-xs font-medium text-[#5a3d44] mb-1">
                Nombre y Apellido *
              </label>
              <input
                id={clientNameId}
                type="text"
                required
                placeholder="Ej. Sofía Martínez"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8bac2] bg-[#fcfaf8] text-sm text-[#362229] focus:outline-none focus:ring-2 focus:ring-[#865f67]/40"
              />
            </div>

            <div>
              <label htmlFor={clientPhoneId} className="block text-xs font-medium text-[#5a3d44] mb-1">
                Teléfono WhatsApp *
              </label>
              <input
                id={clientPhoneId}
                type="tel"
                required
                placeholder="Ej. 11 4567-8901"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8bac2] bg-[#fcfaf8] text-sm text-[#362229] focus:outline-none focus:ring-2 focus:ring-[#865f67]/40"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor={clientNotesId} className="block text-xs font-medium text-[#5a3d44] mb-1">
                Consulta o detalles adicionales (opcional)
              </label>
              <textarea
                id={clientNotesId}
                rows={2}
                placeholder="¿Tenés alguna duda previa o consulta sobre zonas específicas?"
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8bac2] bg-[#fcfaf8] text-sm text-[#362229] focus:outline-none focus:ring-2 focus:ring-[#865f67]/40 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#eddfe3]">
            <p className="text-xs text-[#865f67]">
              📍 Consultorio privado en <strong>Mitre 687, Morón</strong>. Sin compromiso de pago online.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#865f67] hover:bg-[#5a3d44] text-white text-xs sm:text-sm font-semibold shadow-md transition-all whitespace-nowrap"
            >
              <span>Confirmar y Pre-agendar Turno</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
