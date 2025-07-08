import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { useState, useEffect } from "react";
import { useBookingStore } from "../../store/BookingStore";

export const BookingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateLocal, setSelectedDateLocal] = useState<Date | null>(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showClientForm, setShowClientForm] = useState(false);
  
  const {
    selectedTime,
    selectedService,
    clientData,
    setSelectedDate,
    setSelectedTime,
    setClientData,
    setCurrentStep,
    isBookingReady
  } = useBookingStore();

  // Generar días del mes actual
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Días del mes anterior
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push({ date, isCurrentMonth: true });
    }
    
    // Días del siguiente mes para completar la grilla
    const totalCells = Math.ceil(days.length / 7) * 7;
    for (let i = 1; days.length < totalCells; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false });
    }
    
    return days;
  };

  // Horarios disponibles
  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00", 
    "18:00", "19:00", "20:00", "21:00"
  ];

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;
    setSelectedDateLocal(date);
    setSelectedDate(date);
    setShowTimeSlots(true);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowClientForm(true);
  };

  const handleClientDataChange = (field: keyof typeof clientData, value: string) => {
    setClientData({ [field]: value });
  };

  const handleBookingConfirm = () => {
    if (isBookingReady()) {
      setCurrentStep('payment');
      // Scroll to payment section
      document.getElementById('transferencia')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  useEffect(() => {
    // Efectos místicos para el calendario
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes mystic-pulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(139, 92, 246, 0.3)); }
        50% { transform: scale(1.05); filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6)); }
      }
      
      @keyframes calendar-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.2); }
        50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.4); }
      }
      
      @keyframes astral-float {
        0% { transform: translateY(0) rotate(0deg); }
        33% { transform: translateY(-5px) rotate(2deg); }
        66% { transform: translateY(3px) rotate(-1deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      
      .mystic-pulse { animation: mystic-pulse 2s ease-in-out infinite; }
      .calendar-glow { animation: calendar-glow 3s ease-in-out infinite; }
      .astral-float { animation: astral-float 4s ease-in-out infinite; }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  if (!selectedService) {
    return (
      <section id="calendario" className="py-20 relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tarot-gradient drop-shadow-lg">
              🔮 Primero Selecciona tu Consulta
            </h2>
            <Paragraph className="mt-4 text-lg !text-white">
              Para agendar tu cita, primero debes elegir el tipo de consulta que deseas en la sección de arriba.
            </Paragraph>
            <button
              onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="mt-8 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              ⬆️ Ver Planes de Consulta
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="calendario" className="py-20 relative overflow-hidden">
      
      {/* Partículas místicas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={`astral-particle-${i}`}
            className="absolute astral-float"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 92, 246, ${0.6 + Math.random() * 0.4}) 0%, rgba(99, 102, 241, 0) 70%)`,
              borderRadius: '50%',
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12">
          <div className="text-white mb-4">
            <Title>🔮 Agenda tu Consulta Mística</Title>
          </div>
          <Paragraph className="text-purple-200 text-xl max-w-3xl mx-auto">
            Selecciona el día y hora perfectos para tu consulta con la Maestra Atenea. 
            Las energías cósmicas te guiarán hacia la fecha ideal.
          </Paragraph>
          
          {selectedService && (
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">
                ✨ {selectedService.title}
              </h3>
              <p className="text-purple-200 text-sm mb-2">{selectedService.description}</p>
              <div className="text-2xl font-bold text-purple-300">
                ${selectedService.price} USD
              </div>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendario */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 calendar-glow">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                  className="p-2 text-white hover:text-purple-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <h3 className="text-xl font-bold text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                  className="p-2 text-white hover:text-purple-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Días de la semana */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                  <div key={day} className="text-center text-purple-300 font-semibold py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Días del mes */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                  const isSelected = selectedDateLocal && day.date.toDateString() === selectedDateLocal.toDateString();
                  const isDisabled = isDateDisabled(day.date);
                  const isToday = day.date.toDateString() === new Date().toDateString();
                  
                  return (
                    <button
                      key={index}
                      onClick={() => day.isCurrentMonth && handleDateSelect(day.date)}
                      disabled={isDisabled || !day.isCurrentMonth}
                      className={`
                        relative p-3 rounded-xl text-sm font-medium transition-all duration-300
                        ${day.isCurrentMonth 
                          ? isDisabled 
                            ? 'text-gray-500 cursor-not-allowed' 
                            : isSelected
                              ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white mystic-pulse'
                              : isToday
                                ? 'bg-purple-600/50 text-white border-2 border-purple-400'
                                : 'text-white hover:bg-purple-600/30 hover:scale-105'
                          : 'text-gray-600 cursor-not-allowed'
                        }
                      `}
                    >
                      {day.date.getDate()}
                      {isToday && (
                        <div className="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Horarios y formulario */}
            <div className="space-y-6">
              {/* Horarios disponibles */}
              {showTimeSlots && selectedDateLocal && (
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">
                    ⏰ Horarios Disponibles
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300
                          ${selectedTime === time
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white mystic-pulse'
                            : 'text-white bg-white/10 hover:bg-purple-600/30 hover:scale-105'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Formulario de datos del cliente */}
              {showClientForm && selectedTime && (
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">
                    👤 Datos de Contacto
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nombre completo *"
                      value={clientData.name}
                      onChange={(e) => handleClientDataChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono / WhatsApp *"
                      value={clientData.phone}
                      onChange={(e) => handleClientDataChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email (opcional)"
                      value={clientData.email}
                      onChange={(e) => handleClientDataChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  {/* Resumen de la cita */}
                  {isBookingReady() && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl border border-purple-400/30">
                      <h4 className="text-lg font-bold text-white mb-4">📋 Resumen de tu Cita</h4>
                      <div className="space-y-2 text-purple-200">
                        <p><span className="font-semibold">Servicio:</span> {selectedService?.title}</p>
                        <p><span className="font-semibold">Fecha:</span> {selectedDateLocal?.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p><span className="font-semibold">Hora:</span> {selectedTime}</p>
                        <p><span className="font-semibold">Precio:</span> ${selectedService?.price} USD</p>
                        <p><span className="font-semibold">Cliente:</span> {clientData.name}</p>
                      </div>
                      
                      <button
                        onClick={handleBookingConfirm}
                        className="w-full mt-6 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 mystic-pulse shadow-lg"
                      >
                        ✨ Proceder al Pago
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 