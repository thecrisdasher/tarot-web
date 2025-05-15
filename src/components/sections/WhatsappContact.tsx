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
      description: "Unión de dos almas en un vínculo eterno y poderoso",
      number: "+34600000000",
      icon: "question-mark",
      gradient: "from-blue-900 via-blue-700 to-blue-600",
      hoverGradient: "from-blue-800 via-blue-600 to-blue-500",
      textColor: "group-hover:text-blue-300",
      shadowColor: "rgba(0, 255, 251, 0.7)"
    },
    {
      title: "Endulzamientos",
      description: "Rituales con esencias místicas para suavizar corazones",
      number: "+34600000000",
      icon: "ritual",
      gradient: "from-emerald-900 via-emerald-700 to-green-600",
      hoverGradient: "from-emerald-800 via-emerald-600 to-green-500",
      textColor: "group-hover:text-emerald-300",
      shadowColor: "rgba(25, 252, 0, 0.7)"
    },
    {
      title: "Protección Espiritual",
      description: "Escudos energéticos contra energías negativas y maleficios",
      number: "+34600000000",
      icon: "emergency",
      gradient: "from-cyan-900 via-cyan-800 to-cyan-600",
      hoverGradient: "from-cyan-800 via-cyan-700 to-cyan-500",
      textColor: "group-hover:text-cyan-300",
      shadowColor: "rgba(14, 165, 233, 0.6)"
    }
  ];

  // Función para abrir WhatsApp con el número correspondiente
  const openWhatsApp = (number: string, title: string) => {
    const message = encodeURIComponent(`Hola Maestro Alaric, me interesa una consulta sobre: ${title}`);
    window.open(`https://wa.me/${+573163314375}?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-0 md:py- overflow-hidden">
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
          <p className="text-heading-3 text-lg mt-4 max-w-2xl mx-auto">
            Consulta directamente con el Maestro Alaric para transformar tu destino y encontrar soluciones a tus problemas espirituales.
          </p>
        </div>
        
        <div className="relative mt-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {contactOptions.map((option, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-3xl transition-all duration-500 transform hover:translate-y-[-10px]`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-90 transition-opacity duration-500`}></div>
                
                {/* Overlay con efecto de gradiente al hacer hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Efecto de destellos/partículas */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden`}>
                  {[...Array(15)].map((_, i) => (
                    <div 
                      key={`spark-${index}-${i}`}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: `${2 + Math.random() * 4}px`,
                        height: `${2 + Math.random() * 4}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.1 + Math.random() * 0.4,
                        transform: `scale(${Math.random() * 0.8 + 0.2})`,
                        filter: `blur(${Math.random() * 2}px)`,
                        animation: `mystic-float ${3 + Math.random() * 4}s infinite ease-in-out`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 p-8 flex flex-col items-center text-white">
                  {/* Ícono */}
                  <div 
                    className={`w-20 h-20 mb-6 flex items-center justify-center rounded-full 
                    bg-black/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-500
                    shadow-lg`}
                    style={{
                      boxShadow: hoveredCard === index 
                        ? `0 0 25px ${option.shadowColor}` 
                        : '0 0 15px rgba(0,0,0,0.5)',
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <img 
                      src={`/assets/icons/${option.icon}.svg`} 
                      alt={option.title}
                      className="w-10 h-10 object-contain invert opacity-90 animate-float-msg" 
                    />
                  </div>
                  
                  {/* Título con estilo similar a "Maestro Alaric" */}
                  <h3 
                    className="text-2xl font-bold mb-4 text-center text-white relative"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      letterSpacing: '0.05em',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.5s ease'
                    }}
                  >
                    {option.title}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(to right, rgba(56,189,248,0.3), rgba(20,184,166,0.3))',
                        filter: 'blur(5px)',
                        transform: 'scale(1.2)',
                        zIndex: -1
                      }}
                    ></div>
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-white/90 text-center mb-8 group-hover:text-white transition-colors duration-300">
                    {option.description}
                  </p>
                  
                  {/* Botón de WhatsApp */}
                  <button 
                    onClick={() => openWhatsApp(option.number, option.title)}
                    className="w-full py-4 px-6 rounded-xl bg-black/40 text-white font-medium flex items-center justify-center gap-3 
                    transition-all duration-500 group-hover:bg-black/60 group-hover:scale-105 
                    shadow-lg hover:shadow-xl transform backdrop-blur-sm"
                    style={{
                      boxShadow: hoveredCard === index 
                        ? `0 10px 25px ${option.shadowColor}` 
                        : '0 4px 15px rgba(0,0,0,0.2)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <img 
                      src="/assets/logos/whatsapp.png" 
                      alt="WhatsApp" 
                      className="w-7 h-7 object-contain animate-float-msg" 
                    />
                    <span className="font-semibold">Contactar Ahora</span>
                  </button>
                </div>
                
                {/* Efecto de brillo en el borde */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.15)'
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