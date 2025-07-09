import { Container } from "../shared/Container";
import { useState, useEffect } from "react";

export const Numbers = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTarotHovered, setIsTarotHovered] = useState(false);
  const [isLimpiasHovered, setIsLimpiasHovered] = useState(false);
  const [isFuegoHovered, setIsFuegoHovered] = useState(false);
  
  // Cargar la fuente alternativa con peso más grueso y estilos de animación
  useEffect(() => {
    // Cargar fuente
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Añadir estilos de animación
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-10px) translateX(5px); }
        50% { transform: translateY(-5px) translateX(-5px); }
        75% { transform: translateY(10px) translateX(5px); }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
      }
      
      @keyframes text-shimmer {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      
      @keyframes bubble {
        0%, 100% { opacity: 0.4; transform: scale(1) translateY(0); }
        50% { opacity: 0.8; transform: scale(1.2) translateY(-10px); }
      }
      
      @keyframes flame {
        0% { transform: scale(1) rotate(0deg); opacity: 0.7; }
        25% { transform: scale(1.1) rotate(2deg); opacity: 0.8; }
        50% { transform: scale(1) rotate(-1deg); opacity: 0.6; }
        75% { transform: scale(1.2) rotate(1deg); opacity: 0.9; }
        100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-twinkle {
        animation: twinkle 2s ease-in-out infinite;
      }
      
      .animate-text-shimmer {
        animation: text-shimmer 2s infinite linear;
      }
      
      .animate-bubble {
        animation: bubble 3s ease-in-out infinite;
      }
      
      .animate-flame {
        animation: flame 1.5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return (
    <section className="relative mt-0 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-3 sm:p-5 lg:p-6 sm:py-6 lg:py-8 max-w-5xl rounded-3xl
                        border border-box-border/30 shadow-lg backdrop-blur-sm md:divide-x divide-box-border/30
                        grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0"
        >
          <div className="text-center px-2 sm:px-3 lg:px-5 group/tierra">
            <div 
              className="flex justify-center items-center relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className={`absolute rounded-full bg-gradient-to-r from-green-500 via-teal-400 to-blue-600 opacity-40 blur-sm transition-all duration-500 
                ${isHovered ? 'animate-pulse opacity-60' : ''}`}
                style={{
                  width: '40%',
                  height: '50%',
                  left: '30%',
                  top: '25%',
                  zIndex: 5
                }}
              ></div>
              <img 
                src="/assets/logos/logotierra.png" 
                alt="Logo Elemento Tierra Tarot" 
                loading="lazy" 
                className={`h-24 md:h-28 w-auto relative z-10 transition-all duration-700 
                ${isHovered ? 'scale-110 brightness-125 rotate-[5deg]' : 'scale-100 rotate-0'}`}
              />
              {/* Partículas animadas */}
              <div className={`absolute inset-0 z-20 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={`tierra-particle-${i}`}
                    className="absolute w-1 h-1 bg-green-300 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
            </div>
            <h3 
              className={`text-transparent bg-clip-text ml-2 relative inline-block mt-0.5 text-xl transition-all duration-500 
              ${isHovered ? 'transform scale-110' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white 
                transition-all duration-500 ${isHovered ? 'animate-text-shimmer' : ''}`}
                style={{
                  textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  backgroundSize: '200% auto'
                }}
              >
                Elementos
              </span>
            </h3>
            <p className="mt-2 text-heading-3 transition-opacity duration-500 group-hover/tierra:text-green-400"> Maestra Atenea, hechicera elemental. Rituales de sanación, equilibrio y poder natural.</p>
          </div>
          <div className="text-center px-2 sm:px-3 lg:px-5 group/tarot">
            <div 
              className="flex justify-center items-center relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsTarotHovered(true)}
              onMouseLeave={() => setIsTarotHovered(false)}
            >
              <div 
                className={`absolute rounded-full bg-gradient-to-r from-purple-600 via-pink-400 to-amber-500 opacity-40 blur-sm transition-all duration-500 
                ${isTarotHovered ? 'animate-pulse opacity-60' : ''}`}
                style={{
                  width: '40%',
                  height: '50%',
                  left: '30%',
                  top: '25%',
                  zIndex: 5
                }}
              ></div>
              <img 
                src="/assets/logos/logotarot.png" 
                alt="Logo Elemento Tarot" 
                loading="lazy" 
                className={`h-24 md:h-28 w-auto relative z-10 transition-all duration-700 
                ${isTarotHovered ? 'scale-110 brightness-125 rotate-[-5deg]' : 'scale-100 rotate-0'}`}
              />
              {/* Estrellas animadas */}
              <div className={`absolute inset-0 z-20 opacity-0 transition-opacity duration-300 ${isTarotHovered ? 'opacity-100' : ''}`}>
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={`tarot-star-${i}`}
                    className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            <h3 
              className={`text-transparent bg-clip-text ml-2 relative inline-block mt-0.5 text-xl transition-all duration-500 
              ${isTarotHovered ? 'transform scale-110' : ''}`}
              onMouseEnter={() => setIsTarotHovered(true)}
              onMouseLeave={() => setIsTarotHovered(false)}
            >
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white 
                transition-all duration-500 ${isTarotHovered ? 'animate-text-shimmer' : ''}`}
                style={{
                  textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  backgroundSize: '200% auto'
                }}
              >
                TAROT
              </span>
            </h3>
            <p className="mt-2 text-heading-3 transition-opacity duration-500 group-hover/tarot:text-purple-400"> Guía espiritual y respuestas claras a través del tarot ancestral.</p>
          </div>
          <div className="text-center px-2 sm:px-3 lg:px-5 group/limpias">
            <div 
              className="flex justify-center items-center relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsLimpiasHovered(true)}
              onMouseLeave={() => setIsLimpiasHovered(false)}
            >
              <div 
                className={`absolute rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 opacity-40 blur-sm transition-all duration-500 
                ${isLimpiasHovered ? 'animate-pulse opacity-60' : ''}`}
                style={{
                  width: '40%',
                  height: '50%',
                  left: '30%',
                  top: '25%',
                  zIndex: 5
                }}
              ></div>
              <img 
                src="/assets/logos/logolimpias.png" 
                alt="Logo Limpias Espirituales Tarot" 
                loading="lazy" 
                className={`h-24 md:h-28 w-auto relative z-10 transition-all duration-700 
                ${isLimpiasHovered ? 'scale-110 brightness-125 rotate-[3deg]' : 'scale-100 rotate-0'}`}
              />
              {/* Burbujas animadas */}
              <div className={`absolute inset-0 z-20 opacity-0 transition-opacity duration-300 ${isLimpiasHovered ? 'opacity-100' : ''}`}>
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={`limpias-bubble-${i}`}
                    className="absolute bg-blue-200 rounded-full animate-bubble"
                    style={{
                      width: `${4 + Math.random() * 6}px`,
                      height: `${4 + Math.random() * 6}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            <h3 
              className={`text-transparent bg-clip-text ml-2 relative inline-block mt-0.5 text-xl transition-all duration-500 
              ${isLimpiasHovered ? 'transform scale-110' : ''}`}
              onMouseEnter={() => setIsLimpiasHovered(true)}
              onMouseLeave={() => setIsLimpiasHovered(false)}
            >
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white 
                transition-all duration-500 ${isLimpiasHovered ? 'animate-text-shimmer' : ''}`}
                style={{
                  textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  backgroundSize: '200% auto'
                }}
              >
                LIMPIAS
              </span>
            </h3>
            <p className="mt-2 text-heading-3 transition-opacity duration-500 group-hover/limpias:text-blue-400"> Purificación energética para liberar energías negativas y bloqueos espirituales.</p>
          </div>
          <div className="text-center px-2 sm:px-3 lg:px-5 group/fuego">
            <div 
              className="flex justify-center items-center relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsFuegoHovered(true)}
              onMouseLeave={() => setIsFuegoHovered(false)}
            >
              <div 
                className={`absolute rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 opacity-40 blur-sm transition-all duration-500 
                ${isFuegoHovered ? 'animate-pulse opacity-60' : ''}`}
                style={{
                  width: '40%',
                  height: '50%',
                  left: '30%',
                  top: '25%',
                  zIndex: 5
                }}
              ></div>
              <img 
                src="/assets/logos/logofuego.png" 
                alt="Logo Fuego Espiritual Tarot" 
                loading="lazy" 
                className={`h-24 md:h-28 w-auto relative z-10 transition-all duration-700 
                ${isFuegoHovered ? 'scale-110 brightness-130 rotate-[6deg]' : 'scale-100 rotate-0'}`}
              />
              {/* Llamas animadas */}
              <div className={`absolute inset-0 z-20 opacity-0 transition-opacity duration-300 ${isFuegoHovered ? 'opacity-100' : ''}`}>
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={`fuego-flame-${i}`}
                    className="absolute animate-flame"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#ff9c33' : '#ff5733',
                      width: `${3 + Math.random() * 5}px`,
                      height: `${8 + Math.random() * 12}px`,
                      borderRadius: '50% 50% 20% 20%',
                      left: `${Math.random() * 100}%`,
                      top: `${30 + Math.random() * 60}%`,
                      boxShadow: '0 0 4px 2px rgba(255, 100, 0, 0.4)',
                      transformOrigin: 'center bottom',
                      animationDelay: `${Math.random() * 1.5}s`,
                      animationDuration: `${0.8 + Math.random() * 1.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            <h3 
              className={`text-transparent bg-clip-text ml-2 relative inline-block mt-0.5 text-xl transition-all duration-500 
              ${isFuegoHovered ? 'transform scale-110' : ''}`}
              onMouseEnter={() => setIsFuegoHovered(true)}
              onMouseLeave={() => setIsFuegoHovered(false)}
            >
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white 
                transition-all duration-500 ${isFuegoHovered ? 'animate-text-shimmer' : ''}`}
                style={{
                  textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  backgroundSize: '200% auto'
                }}
              >
                LLAMAS ESPIRITUALES
              </span>
            </h3>
            <p className="mt-2 text-heading-3 transition-opacity duration-500 group-hover/fuego:text-orange-500"> Manejo profundo de significado espiritual y emocional. Simboliza la transformación.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
