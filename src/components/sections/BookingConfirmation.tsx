import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { useBookingStore } from "../../store/BookingStore";
import { useEffect, useState } from "react";

export const BookingConfirmation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { 
    selectedService, 
    selectedDate, 
    selectedTime, 
    clientData, 
    paymentCompleted,
    currentStep,
    resetBooking 
  } = useBookingStore();

  useEffect(() => {
    if (paymentCompleted && currentStep === 'confirmation') {
      setIsVisible(true);
    }
  }, [paymentCompleted, currentStep]);

  const handleNewBooking = () => {
    resetBooking();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible || !paymentCompleted || currentStep !== 'confirmation') {
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-900/25 to-transparent">
      {/* Fondo celebratorio */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-800/90 to-emerald-900/90 backdrop-blur-sm"></div>
      
      {/* Partículas de celebración */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={`celebration-particle-${i}`}
            className="absolute animate-bounce"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(34, 197, 94, ${0.7 + Math.random() * 0.3}) 0%, rgba(16, 185, 129, 0) 70%)`,
              borderRadius: '50%',
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header de confirmación */}
          <div className="mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <Title>🎉 ¡Cita Confirmada con Éxito!</Title>
            <Paragraph className="text-emerald-200 text-xl mt-4 max-w-2xl mx-auto">
              Tu consulta ha sido agendada correctamente. La Maestra Atenea te contactará pronto para confirmar los detalles finales.
            </Paragraph>
          </div>

          {/* Detalles de la cita confirmada */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">📋 Detalles de tu Consulta</h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Cliente</p>
                    <p className="text-white font-semibold text-lg">{clientData.name}</p>
                    <p className="text-emerald-300 text-sm">{clientData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Fecha y Hora</p>
                    <p className="text-white font-semibold text-lg">
                      {selectedDate?.toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-emerald-300 text-sm">a las {selectedTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Servicio</p>
                    <p className="text-white font-semibold text-lg">{selectedService?.title}</p>
                    <p className="text-emerald-300 text-sm">${selectedService?.price} USD</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Estado del Pago</p>
                    <p className="text-white font-semibold text-lg">✅ Completado</p>
                    <p className="text-emerald-300 text-sm">Comprobante enviado por WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Próximos pasos */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">🔮 Próximos Pasos</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Confirmación</h4>
                <p className="text-emerald-200 text-sm">
                  La Maestra Atenea revisará tu solicitud y te contactará en las próximas 2 horas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Preparación</h4>
                <p className="text-emerald-200 text-sm">
                  Prepara tus preguntas y mantén tu mente abierta para recibir la sabiduría cósmica.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Consulta</h4>
                <p className="text-emerald-200 text-sm">
                  Disfruta de tu consulta personalizada y descubre los secretos que el universo tiene para ti.
                </p>
              </div>
            </div>
          </div>

          {/* Botón para nueva consulta */}
          <div className="text-center">
            <button
              onClick={handleNewBooking}
              className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              🌟 Agendar Nueva Consulta
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}; 