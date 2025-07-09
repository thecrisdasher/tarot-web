import { useState, useEffect } from "react";

export const WhatsappContact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes float-msg {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(3deg); }
      }
      
      @keyframes title-shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      
      @keyframes pulse-glow {
        0%, 100% { filter: drop-shadow(0 0 8px rgba(0, 120, 255, 0.6)); }
        50% { filter: drop-shadow(0 0 15px rgba(20, 215, 120, 0.8)); }
      }
      
      @keyframes mystic-float {
        0% { transform: translateY(0) translateX(0) rotate(0deg); }
        33% { transform: translateY(-8px) translateX(5px) rotate(2deg); }
        66% { transform: translateY(5px) translateX(-7px) rotate(-1deg); }
        100% { transform: translateY(0) translateX(0) rotate(0deg); }
      }
      
      .title-gradient {
        background: linear-gradient(
          90deg,
          rgba(255,255,255,0.8) 0%,
          rgba(255,255,255,1) 25%,
          rgba(255,255,255,0.8) 50%,
          rgba(255,255,255,1) 75%,
          rgba(255,255,255,0.8) 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: title-shimmer 6s linear infinite;
        text-shadow: 
          0 0 10px rgba(255,255,255,0.3),
          0 0 20px rgba(255,255,255,0.2),
          0 0 30px rgba(255,255,255,0.1);
      }

      .subtitle-glow {
        text-shadow: 
          0 0 10px rgba(34,211,238,0.5),
          0 0 20px rgba(34,211,238,0.3),
          0 0 30px rgba(34,211,238,0.2);
      }
      
      .animate-float-msg {
        animation: float-msg 3s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .animate-mystic-float {
        animation: mystic-float 6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  const contactOptions = [
    {
      title: "Amarres de Amor",
      description: "Un ritual ancestral que une dos almas en un vínculo eterno, despertando la pasión y el deseo más profundo.",
      number: "+34611334653",
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
      number: "+34611334653",
      icon: "ritual",
      gradient: "from-emerald-900 via-emerald-700 to-green-600",
      hoverGradient: "from-emerald-800 via-emerald-600 to-green-500",
      textColor: "group-hover:text-emerald-300",
      shadowColor: "rgba(25, 252, 0, 0.7)",
      image: "/assets/images/cartasmisticas-tarot-2.png"
    },
    {
      title: "Protección Espiritual",
      description: "Escudos místicos y talismanes poderosos que te protegen contra energías negativas, envidias y ataques espirituales.",
      number: "+34611334653",
      icon: "emergency",
      gradient: "from-cyan-900 via-cyan-800 to-cyan-600",
      hoverGradient: "from-cyan-800 via-cyan-700 to-cyan-500",
      textColor: "group-hover:text-cyan-300",
      shadowColor: "rgba(14, 165, 233, 0.6)",
      image: "/assets/images/cartasnumero3.png"
    }
  ];

  return (
    <section className="section-transition relative py-20 overflow-hidden">
      {/* Nebulosas de transición */}
      <div className="nebula-transition top"></div>
      <div className="nebula-transition bottom"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 title-gradient">
              Asesoría Espiritual
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-cyan-400 mb-8 subtitle-glow font-semibold">
              Contacto Vía WhatsApp
            </h3>
            <p className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Consulta directamente con la Maestra Atenea para transformar tu destino y 
              encontrar soluciones a tus problemas espirituales.
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
                    href="https://api.whatsapp.com/send?phone=34611334653&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={option.image}
                      alt={`${option.title} tarot`}
                      loading="lazy"
                      className="w-full h-[400px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 transition-all duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg" style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.3)'
                      }}>
                        {option.title}
                      </h3>
                      <p className="text-white text-lg mb-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 bg-black/50 backdrop-blur-sm rounded-lg p-4 leading-relaxed" style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        {option.description}
                      </p>
                      <div
                        className={`mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-sm border border-white/20 text-white font-bold flex items-center justify-center gap-3 
                        w-full transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 
                        shadow-lg cursor-pointer hover:from-emerald-500/90 hover:to-teal-500/90 ${
                          index === 0 ? 'group-hover:border-rose-400/50 group-hover:shadow-rose-500/30' : 
                          index === 1 ? 'group-hover:border-emerald-400/50 group-hover:shadow-emerald-500/30' : 
                          'group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/30'
                        }`}
                      >
                        <img 
                          src="/assets/logos/whatsapp.png" 
                          alt="Icono WhatsApp tarot" 
                          loading="lazy" 
                          className="w-7 h-7 object-contain animate-float-msg" 
                        />
                        <span className="font-bold tracking-wide">Contactar Ahora</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative max-w-max mx-auto mt-12 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-teal-500/20 to-cyan-600/30 animate-pulse"></div>
            <div className="relative z-10 px-8 py-5 border border-white/30 rounded-2xl backdrop-blur-sm bg-black/30">
              <p className="text-center text-lg flex items-center gap-3 text-white font-medium">
                <span className="w-4 h-4 bg-emerald-400 rounded-full inline-block animate-pulse shadow-lg shadow-emerald-400/50"></span>
                <span style={{ 
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  letterSpacing: '0.5px'
                }}>
                  Disponible 24/7 • Respuesta inmediata • 100% Confidencial
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 