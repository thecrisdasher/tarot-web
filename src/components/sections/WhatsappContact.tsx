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
      image: "/assets/images/cartasmisticas-tarot.png"
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
    <section className="relative py-16 mt-0 mb-0 pb-16 overflow-hidden bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
      <Container className="space-y-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
            <span className="block mb-2">Asesoría Espiritual</span>
            <span 
              className="block text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9, #10B981, #06B6D4)',
                WebkitBackgroundClip: 'text',
                textShadow: '0 0 40px rgba(14, 165, 233, 0.4)'
              }}
            >
              Contacto Vía WhatsApp
            </span>
          </h1>
          <p className="text-white text-lg sm:text-xl mt-6 mb-4 max-w-3xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            Consulta directamente con la Maestra Atenea para transformar tu destino y encontrar soluciones a tus problemas espirituales.
          </p>
        </div>
        
        <div className="relative mt-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div 
                key={`mystic-particle-${i}`}
                className="absolute animate-mystic-float"
                style={{
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: Math.random() > 0.5 
                    ? `radial-gradient(circle, rgba(20,215,120,${0.3 + Math.random() * 0.3}) 0%, rgba(16,185,129,0) 70%)`
                    : `radial-gradient(circle, rgba(0,120,255,${0.3 + Math.random() * 0.3}) 0%, rgba(14,165,233,0) 70%)`,
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                  opacity: 0.4 + Math.random() * 0.3,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${6 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {contactOptions.map((option, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-3xl transition-all duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl`}
                style={{
                  boxShadow: hoveredCard === index 
                    ? `0 20px 50px ${option.shadowColor}` 
                    : '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.5s ease'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=19145206230&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-[400px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 transition-all duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                      {option.title}
                    </h3>
                    <p className="text-gray-100 mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 bg-black/30 backdrop-blur-sm rounded-lg p-3 leading-relaxed">
                      {option.description}
                    </p>
                    <div
                      className={`mt-2 py-3 px-6 rounded-xl bg-black/60 backdrop-blur-sm border border-white/20 text-white font-bold flex items-center justify-center gap-3 
                      w-full transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 
                      shadow-lg cursor-pointer hover:bg-white/10 ${
                        index === 0 ? 'group-hover:border-rose-400/50 group-hover:shadow-rose-500/30' : 
                        index === 1 ? 'group-hover:border-emerald-400/50 group-hover:shadow-emerald-500/30' : 
                        'group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/30'
                      }`}
                    >
                      <img 
                        src="/assets/logos/whatsapp.png" 
                        alt="WhatsApp" 
                        className="w-7 h-7 object-contain animate-float-msg" 
                      />
                      <span className="font-bold">Contactar Ahora</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-max mx-auto mt-8 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-teal-700/30 to-blue-900/40 animate-bg-shimmer"></div>
          <div className="relative z-10 px-8 py-5 border border-white/30 rounded-2xl backdrop-blur-sm bg-black/20">
            <p className="text-center text-lg flex items-center gap-3 text-white font-medium">
              <span className="w-4 h-4 bg-emerald-400 rounded-full inline-block animate-pulse shadow-lg shadow-emerald-400/50"></span>
              <span style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                Disponible 24/7 • Respuesta inmediata • 100% Confidencial
              </span>
            </p>
          </div>
        </div>
      </Container>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes textShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `
      }} />
    </section>
  );
}; 