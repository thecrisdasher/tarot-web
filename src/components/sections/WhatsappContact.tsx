import { Container } from "../shared/Container";
import { useState, useEffect } from "react";

export const WhatsappContact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Añadir estilos de animación personalizados
  useEffect(() => {
    // Añadir estilos de animación
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes float-msg {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(3deg); }
      }
      
      @keyframes bubble-pop {
        0% { transform: scale(0); opacity: 0; }
        70% { transform: scale(1.1); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes pulse-glow {
        0%, 100% { filter: drop-shadow(0 0 8px rgba(0, 120, 255, 0.6)); }
        50% { filter: drop-shadow(0 0 15px rgba(20, 215, 120, 0.8)); }
      }
      
      @keyframes bg-shimmer {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      
      @keyframes mystic-float {
        0% { transform: translateY(0) translateX(0) rotate(0deg); }
        33% { transform: translateY(-8px) translateX(5px) rotate(2deg); }
        66% { transform: translateY(5px) translateX(-7px) rotate(-1deg); }
        100% { transform: translateY(0) translateX(0) rotate(0deg); }
      }
      
      @keyframes candle-flicker {
        0%, 100% { opacity: 0.9; transform: scale(1) rotate(0deg); }
        20% { opacity: 0.7; transform: scale(0.98) rotate(-1deg); }
        40% { opacity: 0.95; transform: scale(1.02) rotate(1deg); }
        60% { opacity: 0.75; transform: scale(0.99) rotate(0deg); }
        80% { opacity: 0.92; transform: scale(1.01) rotate(-1deg); }
      }
      
      .animate-float-msg {
        animation: float-msg 3s ease-in-out infinite;
      }
      
      .animate-bubble-pop {
        animation: bubble-pop 0.5s ease-out forwards;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .animate-bg-shimmer {
        animation: bg-shimmer 3s ease-in-out infinite;
        background-size: 200% 200%;
      }
      
      .animate-mystic-float {
        animation: mystic-float 6s ease-in-out infinite;
      }
      
      .animate-candle-flicker {
        animation: candle-flicker 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  // Datos de contacto
  const contactOptions = [
    {
      title: "Amarres de Amor",
      description: "Un ritual ancestral que une dos almas en un vínculo eterno, despertando la pasión y el deseo más profundo.",
      number: "+34600000000",
      icon: "question-mark",
      gradient: "from-purple-900 via-red-800 to-rose-700",
      hoverGradient: "from-purple-800 via-red-700 to-rose-600",
      textColor: "group-hover:text-rose-300",
      shadowColor: "rgba(255, 0, 128, 0.7)",
      image: "/assets/images/velas.png"
    },
    {
      title: "Limpieza Espiritual",
      description: "Purificación energética que elimina bloqueos, maldiciones y energías negativas para restaurar tu bienestar y equilibrio.",
      number: "+34600000000",
      icon: "ritual",
      gradient: "from-emerald-900 via-emerald-700 to-green-600",
      hoverGradient: "from-emerald-800 via-emerald-600 to-green-500",
      textColor: "group-hover:text-emerald-300",
      shadowColor: "rgba(25, 252, 0, 0.7)",
      image: "/assets/images/ultima3.png"
    },
    {
      title: "Protección Espiritual",
      description: "Escudos místicos y talismanes poderosos que te protegen contra energías negativas, envidias y ataques espirituales.",
      number: "+34600000000",
      icon: "emergency",
      gradient: "from-cyan-900 via-cyan-800 to-cyan-600",
      hoverGradient: "from-cyan-800 via-cyan-700 to-cyan-500",
      textColor: "group-hover:text-cyan-300",
      shadowColor: "rgba(14, 165, 233, 0.6)",
      image: "/assets/images/vvelas2.png"
    }
  ];

  return (
    <section className="relative py-0 mt-0 md:-mt-26 mb-0 pb-2 overflow-hidden">
      <Container className="space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Asesoria espiritual 
            <span 
              className="text-transparent bg-clip-text ml-2 relative inline-block"
              style={{
                background: 'linear-gradient(to right, #0EA5E9, #10B981)',
                WebkitBackgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'textShimmer 2s infinite alternate',
                textShadow: '0 0 20px rgba(14, 165, 233, 0.5), 0 0 30px rgba(16, 185, 129, 0.3)'
              }}
            >
              Contacto Vía WhatsApp{" "}
              <div 
                style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  right: '-5px',
                  bottom: '-5px',
                  background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(16,185,129,0.2) 50%, rgba(0,0,0,0) 70%)',
                  filter: 'blur(8px)',
                  borderRadius: '10px',
                  zIndex: -1,
                  animation: 'glowPulse 3s infinite'
                }}
              ></div>
            </span>
          </h1>
          <p className="text-heading-3 text-lg mt-6 mb-4 max-w-2xl mx-auto">
            Consulta directamente con el Maestro Alaric para transformar tu destino y encontrar soluciones a tus problemas espirituales.
          </p>
        </div>
        
        <div className="relative mt-10">
          {/* Efecto de partículas místicas - azul y verde */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`mystic-particle-${i}`}
                className="absolute animate-mystic-float"
                style={{
                  width: `${3 + Math.random() * 8}px`,
                  height: `${3 + Math.random() * 8}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: Math.random() > 0.5 
                    ? `radial-gradient(circle, rgba(20,215,120,${0.5 + Math.random() * 0.5}) 0%, rgba(16,185,129,0) 70%)`
                    : `radial-gradient(circle, rgba(0,120,255,${0.5 + Math.random() * 0.5}) 0%, rgba(14,165,233,0) 70%)`,
                  borderRadius: '50%',
                  filter: 'blur(2px)',
                  opacity: 0.6 + Math.random() * 0.4,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 7}s`
                }}
              />
            ))}
            
            {/* Efecto de luz brillante */}
            {[...Array(10)].map((_, i) => (
              <div 
                key={`glow-light-${i}`}
                className="absolute animate-candle-flicker"
                style={{
                  width: `${15 + Math.random() * 30}px`,
                  height: `${15 + Math.random() * 30}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, rgba(56,189,248,${0.2 + Math.random() * 0.3}) 0%, rgba(34,211,238,0) 70%)`,
                  borderRadius: '50%',
                  filter: 'blur(5px)',
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Tarjetas de contacto */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {contactOptions.map((option, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-3xl transition-all duration-500 transform hover:translate-y-[-10px] hover:shadow-2xl`}
                style={{
                  boxShadow: hoveredCard === index 
                    ? `0 20px 50px ${option.shadowColor}` 
                    : '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Toda la tarjeta es un enlace a WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=19145206230&text=Hola%20Maestro%20Alaric%2C%20me%20interesa%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-[400px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{option.title}</h3>
                    <p className="text-gray-200 mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {option.description}
                    </p>
                    {/* Botón visual (parte de la tarjeta-enlace) */}
                    <div
                      className={`mt-2 py-3 px-6 rounded-xl bg-black/40 text-white font-medium flex items-center justify-center gap-3 
                      w-full transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 
                      shadow-lg backdrop-blur-sm cursor-pointer ${
                        index === 0 ? 'group-hover:bg-rose-900/60' : 
                        index === 1 ? 'group-hover:bg-emerald-900/60' : 
                        'group-hover:bg-cyan-900/60'
                      }`}
                    >
                      <img 
                        src="/assets/logos/whatsapp.png" 
                        alt="WhatsApp" 
                        className="w-7 h-7 object-contain animate-float-msg" 
                      />
                      <span className="font-semibold">Contactar Ahora</span>
                    </div>
                  </div>
                </a>
                
                {/* Efecto de brillo en el borde */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: `inset 0 0 0px ${option.shadowColor.replace(')', ', 0.2)')}`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sello de disponibilidad con mejor estilo */}
        <div className="relative max-w-max mx-auto mt-6 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-teal-700/20 to-blue-900/30 animate-bg-shimmer"></div>
          <div className="relative z-10 px-8 py-4 border border-teal-500/30 rounded-xl backdrop-blur-sm">
            <p className="text-center text-md flex items-center gap-3 text-white">
              <span className="w-3 h-3 bg-emerald-400 rounded-full inline-block animate-pulse"></span>
              <span className="font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
                Disponible 24/7 • Respuesta inmediata • 100% Confidencial
              </span>
            </p>
          </div>
        </div>
      </Container>
      
      {/* Estilos adicionales para animaciones */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes textShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          
          @keyframes glowPulse {
            0% { opacity: 0.5; transform: scale(0.97); }
            50% { opacity: 0.8; transform: scale(1.05); }
            100% { opacity: 0.5; transform: scale(0.97); }
          }
        `
      }} />
    </section>
  );
}; 