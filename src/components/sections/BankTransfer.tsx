import { Container } from "../shared/Container";
import { useState, useEffect } from "react";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { useBookingStore } from "../../store/BookingStore";

interface BankTransferProps {}

export const BankTransfer: React.FC<BankTransferProps> = () => {
  const [form, setForm] = useState({ nombre: "", monto: "" });
  const [file, setFile] = useState<File | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  const { 
    selectedService, 
    selectedDate, 
    selectedTime, 
    clientData, 
    isBookingReady, 
    getWhatsAppMessage,
    setPaymentCompleted,
    setCurrentStep 
  } = useBookingStore();

  // Oculta el toast después de unos segundos
  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 3500);
      return () => clearTimeout(t);
    }
  }, [showToast]);

  // Auto-fill form with booking data
  useEffect(() => {
    if (isBookingReady()) {
      setForm({ 
        nombre: clientData.name || "", 
        monto: selectedService?.price.toString() || "" 
      });
    }
  }, [clientData.name, selectedService?.price, isBookingReady]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
  };

  const isFormValid = form.nombre.trim() !== "" && form.monto.trim() !== "" && file !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setError("Por favor completa todos los campos y adjunta el comprobante de pago.");
      return;
    }

    setError("");
    setEnviando(true);

    try {
      const phone = "19145206230"; // Número de WhatsApp de destino
      
      // Use booking message if available, otherwise use simple payment message
      const message = isBookingReady() 
        ? getWhatsAppMessage() 
        : `Hola, soy ${form.nombre}. He realizado una transferencia por valor de $${form.monto}. Te adjunto el comprobante de pago.`;
      
      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

      // Abrir WhatsApp Web/Móvil con el mensaje prellenado
      window.open(url, "_blank");

      // Mark payment as completed if booking exists
      if (isBookingReady()) {
        setPaymentCompleted(true);
        setCurrentStep('confirmation');
      }

      setEnviado(true);
      setShowToast(true);
      // Limpiar el formulario después de enviar
      setForm({ nombre: "", monto: "" });
      setFile(null);
    } catch (error) {
      setError("Hubo un error al abrir WhatsApp. Por favor, intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="transferencia" className="relative py-24 bg-gradient-to-b from-transparent via-purple-900/25 to-transparent">
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-purple-800/90 to-purple-900/90 backdrop-blur-sm"></div>
      
      {/* Efectos de luz y partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        {/* Información de la cita reservada */}
        {isBookingReady() && (
          <div className="mb-12 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
            <div className="text-center mb-6">
                             <Title>🔮 Resumen de tu Cita Agendada</Title>
              <Paragraph className="text-purple-200 mt-2">
                Confirma los detalles de tu consulta antes de proceder con el pago
              </Paragraph>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Fecha</p>
                    <p className="text-white font-semibold">
                      {selectedDate?.toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Hora</p>
                    <p className="text-white font-semibold">{selectedTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Servicio</p>
                    <p className="text-white font-semibold">{selectedService?.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Precio</p>
                    <p className="text-white font-semibold text-xl">${selectedService?.price} USD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Lado izquierdo: datos bancarios y QR */}
          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl">
            <Title>Pago mediante transferencia bancaria</Title>
            <Paragraph className="mt-4 text-gray-300">
              Realiza tu pago a cualquiera de las siguientes cuentas. Luego adjunta tu comprobante para validar la transacción.
            </Paragraph>

            <div className="mt-8 space-y-6">
              {/* Bancolombia */}
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <img
                  src="/assets/images/qr-bancolombia.png"
                  alt="QR Bancolombia"
                  className="w-24 h-24 object-contain rounded-lg shadow-lg bg-white/90 p-2"
                />
                <div>
                  <p className="text-white font-semibold text-lg">Bancolombia</p>
                  <p className="text-gray-300 text-sm">Cuenta de ahorros No. 123456789</p>
                </div>
              </div>
              {/* Nequi */}
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <img
                  src="/assets/images/qr-nequi.png"
                  alt="QR Nequi"
                  className="w-24 h-24 object-contain rounded-lg shadow-lg bg-white/90 p-2"
                />
                <div>
                  <p className="text-white font-semibold text-lg">Nequi</p>
                  <p className="text-gray-300 text-sm">Número 3001234567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho: formulario */}
          <div className={`bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 ${enviado ? 'opacity-75' : ''}`}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                required
                disabled={enviado}
                className={`w-full px-5 py-3 rounded-xl border border-white/20 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition ${enviado ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
              <input
                type="number"
                name="monto"
                placeholder="Monto transferido"
                value={form.monto}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
                disabled={enviado}
                className={`w-full px-5 py-3 rounded-xl border border-white/20 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition ${enviado ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                required
                disabled={enviado}
                className={`w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-700 bg-black/20 rounded-xl border border-white/20 p-2 ${enviado ? 'opacity-50 cursor-not-allowed' : ''}`}
              />

              <button
                type="submit"
                disabled={!isFormValid || enviando || enviado}
                className={`mt-2 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300
                  ${!isFormValid || enviando || enviado
                    ? "bg-gray-600/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white hover:scale-105 hover:shadow-emerald-500/25"}
                `}
              >
                {enviando ? "Enviando..." : enviado ? "¡Enviado con éxito!" : "Enviar comprobante por WhatsApp"}
              </button>

              {error && (
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {enviado && (
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                  <p className="text-green-400 text-sm">
                    ¡Formulario enviado con éxito! Se abrirá WhatsApp para que adjuntes el comprobante.
                  </p>
                  <button
                    onClick={() => {
                      setEnviado(false);
                      setShowToast(false);
                    }}
                    className="mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Enviar otro comprobante
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <div className="fixed left-1/2 bottom-10 transform -translate-x-1/2 z-50">
            <div className="bg-black/90 border border-green-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-fade-in-up">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>¡Redirigiendo a WhatsApp! Adjunta tu comprobante manualmente.</span>
            </div>
          </div>
        )}

        {/* Animación de partículas */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(0) translateX(10px); }
            75% { transform: translateY(10px) translateX(5px); }
          }
        `}</style>
      </Container>
    </section>
  );
}; 