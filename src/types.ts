export type TreatmentCategory = 'todos' | 'laser' | 'corporal' | 'facial' | 'relax';

export interface Treatment {
  id: string;
  name: string;
  tagline: string;
  category: TreatmentCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  recommendedSessions: string;
  sessionDuration: string;
  targetAreas: string[];
  preparationTips: string[];
  image: string;
  whatsappMessage: string;
  featured?: boolean;
}

export interface BookingAppointment {
  id: string;
  treatmentId: string;
  treatmentName: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientNotes: string;
  createdAt: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
}
