import { create } from 'zustand';

export interface BookingData {
  selectedDate: Date | null;
  selectedTime: string | null;
  selectedService: {
    id: number;
    title: string;
    price: number;
    description: string;
  } | null;
  clientData: {
    name: string;
    phone: string;
    email: string;
  };
  currentStep: 'service' | 'calendar' | 'payment' | 'confirmation';
  paymentCompleted: boolean;
}

interface BookingStore extends BookingData {
  // Actions
  setSelectedDate: (date: Date | null) => void;
  setSelectedTime: (time: string | null) => void;
  setSelectedService: (service: BookingData['selectedService']) => void;
  setClientData: (data: Partial<BookingData['clientData']>) => void;
  setCurrentStep: (step: BookingData['currentStep']) => void;
  setPaymentCompleted: (completed: boolean) => void;
  resetBooking: () => void;
  
  // Computed values
  isBookingReady: () => boolean;
  getWhatsAppMessage: () => string;
}

const initialState: BookingData = {
  selectedDate: null,
  selectedTime: null,
  selectedService: null,
  clientData: {
    name: '',
    phone: '',
    email: ''
  },
  currentStep: 'service',
  paymentCompleted: false
};

export const useBookingStore = create<BookingStore>((set, get) => ({
  ...initialState,

  setSelectedDate: (date) => set({ selectedDate: date }),
  
  setSelectedTime: (time) => set({ selectedTime: time }),
  
  setSelectedService: (service) => set({ 
    selectedService: service,
    currentStep: 'calendar' 
  }),
  
  setClientData: (data) => set((state) => ({
    clientData: { ...state.clientData, ...data }
  })),
  
  setCurrentStep: (step) => set({ currentStep: step }),
  
  setPaymentCompleted: (completed) => set({ paymentCompleted: completed }),
  
  resetBooking: () => set(initialState),
  
  isBookingReady: () => {
    const state = get();
    return !!(
      state.selectedDate &&
      state.selectedTime &&
      state.selectedService &&
      state.clientData.name &&
      state.clientData.phone
    );
  },
  
  getWhatsAppMessage: () => {
    const state = get();
    if (!state.isBookingReady()) return '';
    
    const date = state.selectedDate?.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return `🔮 *NUEVA CITA AGENDADA* 🔮

📅 *Fecha:* ${date}
⏰ *Hora:* ${state.selectedTime}
✨ *Servicio:* ${state.selectedService?.title}
💰 *Precio:* $${state.selectedService?.price} USD

👤 *Datos del Cliente:*
• Nombre: ${state.clientData.name}
• Teléfono: ${state.clientData.phone}
${state.clientData.email ? `• Email: ${state.clientData.email}` : ''}

💳 *Estado del Pago:* ${state.paymentCompleted ? '✅ COMPLETADO' : '⏳ Pendiente'}

🌟 El cliente ha completado su reserva a través de la web. Por favor confirmar la cita.`;
  }
})); 