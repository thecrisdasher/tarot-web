import { useState, useEffect } from "react";

interface ZodiacSign {
  name: string;
  symbol: string;
  dates: string;
  element: string;
  color: string;
  description: string;
  emoji: string;
}

const zodiacSigns: ZodiacSign[] = [
  { name: "Aries", symbol: "♈", dates: "21 Mar - 19 Abr", element: "Fuego", color: "#FF6B6B", description: "Energía y liderazgo", emoji: "🔥" },
  { name: "Tauro", symbol: "♉", dates: "20 Abr - 20 May", element: "Tierra", color: "#4ECDC4", description: "Estabilidad y determinación", emoji: "🌱" },
  { name: "Géminis", symbol: "♊", dates: "21 May - 20 Jun", element: "Aire", color: "#45B7D1", description: "Comunicación y versatilidad", emoji: "💨" },
  { name: "Cáncer", symbol: "♋", dates: "21 Jun - 22 Jul", element: "Agua", color: "#96CEB4", description: "Intuición y protección", emoji: "🌊" },
  { name: "Leo", symbol: "♌", dates: "23 Jul - 22 Ago", element: "Fuego", color: "#FFEAA7", description: "Creatividad y generosidad", emoji: "☀️" },
  { name: "Virgo", symbol: "♍", dates: "23 Ago - 22 Sep", element: "Tierra", color: "#DDA0DD", description: "Perfección y análisis", emoji: "🌾" },
  { name: "Libra", symbol: "♎", dates: "23 Sep - 22 Oct", element: "Aire", color: "#F8BBD9", description: "Equilibrio y armonía", emoji: "⚖️" },
  { name: "Escorpio", symbol: "♏", dates: "23 Oct - 21 Nov", element: "Agua", color: "#FF7675", description: "Transformación y misterio", emoji: "🦂" },
  { name: "Sagitario", symbol: "♐", dates: "22 Nov - 21 Dic", element: "Fuego", color: "#FD79A8", description: "Aventura y sabiduría", emoji: "🏹" },
  { name: "Capricornio", symbol: "♑", dates: "22 Dic - 19 Ene", element: "Tierra", color: "#6C5CE7", description: "Ambición y disciplina", emoji: "🏔️" },
  { name: "Acuario", symbol: "♒", dates: "20 Ene - 18 Feb", element: "Aire", color: "#A29BFE", description: "Innovación y libertad", emoji: "🌟" },
  { name: "Piscis", symbol: "♓", dates: "19 Feb - 20 Mar", element: "Agua", color: "#00CEC9", description: "Intuición y compasión", emoji: "🐟" }
];

export const ZodiacWheel = () => {
  const [hoveredSign, setHoveredSign] = useState<ZodiacSign | null>(null);
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSpinning(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16 lg:mb-24">
      {/* Título mejorado con efectos */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 animate-pulse"></div>
        </div>
        <h2 className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-3xl lg:text-4xl font-bold mb-6 animate-text-glow hero-title-glow">
          ✨ Rueda Celestial del Destino ✨
        </h2>
        <p className="text-slate-200 text-xl max-w-3xl mx-auto leading-relaxed">
          Cada signo zodiacal vibra con energías únicas del cosmos. 
          <span className="text-purple-300 font-semibold animate-text-shadow-pulse"> Descubre tu conexión estelar</span> y 
          desbloquea los secretos que el universo tiene reservados para ti.
        </p>
      </div>

      {/* Contenedor principal mejorado */}
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Efectos de fondo cósmico */}
        <div className="absolute inset-0 scale-150 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-pink-600/20 via-transparent to-purple-600/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Rueda principal */}
        <div className="relative w-full aspect-square">
          {/* Anillos exteriores múltiples */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-purple-500 p-1 ${isSpinning ? 'animate-spin' : 'animate-spin-slow'}`}>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-purple-400/20"></div>
          </div>
          
          <div className="absolute inset-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '30s'}}>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-900/60 to-blue-900/60 backdrop-blur-xl border border-blue-400/30"></div>
          </div>

          {/* Círculo interior con efectos mejorados */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-800/70 to-blue-800/70 backdrop-blur-xl border-2 border-purple-300/40 shadow-2xl zodiac-sign-glow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Centro místico mejorado */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 flex items-center justify-center shadow-2xl border-3 border-white/30 animate-mystical-glow animate-cosmic-breathe">
            <div className="text-white text-3xl font-bold animate-float-gentle">☽✨☾</div>
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
          </div>

          {/* Constelaciones de fondo */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`constellation-${i}`}
              className="absolute animate-constellation-twinkle"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: 'linear-gradient(45deg, #E100FF, #00A7FF)',
                borderRadius: '50%',
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`
              }}
            />
          ))}

          {/* Signos zodiacales mejorados */}
          {zodiacSigns.map((sign, index) => {
            const angle = (index * 30) - 90;
            const radian = (angle * Math.PI) / 180;
            const radius = 160;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
              <div
                key={sign.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                onMouseEnter={() => setHoveredSign(sign)}
                onMouseLeave={() => setHoveredSign(null)}
                onClick={() => setSelectedSign(sign)}
              >
                {/* Aura del signo */}
                <div 
                  className="absolute inset-0 scale-150 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-md"
                  style={{
                    background: `radial-gradient(circle, ${sign.color}60 0%, transparent 70%)`
                  }}
                ></div>

                {/* Contenedor del signo mejorado */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center transition-all duration-500 group-hover:scale-150 group-hover:shadow-2xl group-hover:border-purple-400/80 group-hover:animate-mystical-glow">
                  
                  {/* Efecto de energía rotativa */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow group-hover:animate-shimmer-enhanced"></div>
                  
                  {/* Símbolo del signo */}
                  <span 
                    className="text-3xl font-bold transition-all duration-500 group-hover:text-white relative z-10 group-hover:scale-110"
                    style={{ 
                      color: hoveredSign === sign ? sign.color : '#E5E7EB',
                      textShadow: hoveredSign === sign ? `0 0 20px ${sign.color}` : 'none'
                    }}
                  >
                    {sign.symbol}
                  </span>

                  {/* Pulsos de energía múltiples */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/60 group-hover:animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border border-pink-400/0 group-hover:border-pink-400/40 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
                </div>

                {/* Tooltip mejorado */}
                {hoveredSign === sign && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 z-50 animate-float-gentle">
                    <div className="bg-slate-900/98 backdrop-blur-xl rounded-2xl p-6 border-2 border-purple-400/50 shadow-2xl min-w-max zodiac-sign-glow">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-2xl">{sign.emoji}</span>
                          <h3 className="text-white font-bold text-xl">{sign.name}</h3>
                          <span className="text-2xl">{sign.emoji}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3 font-medium">{sign.dates}</p>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor: sign.color, color: '#fff'}}>
                            {sign.element}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{sign.description}</p>
                      </div>
                      {/* Flecha mejorada */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-slate-900/98"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Partículas mágicas mejoradas */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`magic-particle-${i}`}
              className="absolute cosmic-particle-enhanced opacity-70"
              style={{
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                background: `linear-gradient(45deg, ${Math.random() > 0.5 ? '#E100FF' : '#00A7FF'}, #FFFFFF)`,
                borderRadius: '50%',
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                boxShadow: '0 0 10px currentColor'
              }}
            />
          ))}
        </div>
      </div>

      {/* Información del signo seleccionado mejorada */}
      {selectedSign && (
        <div className="mt-12 text-center animate-float-gentle">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-400/40 shadow-2xl max-w-lg mx-auto zodiac-sign-glow">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">{selectedSign.emoji}</span>
              <h3 className="text-white text-3xl font-bold">{selectedSign.name}</h3>
              <span className="text-4xl" style={{color: selectedSign.color}}>{selectedSign.symbol}</span>
              <span className="text-3xl">{selectedSign.emoji}</span>
            </div>
            <p className="text-purple-300 text-lg mb-2 font-medium">{selectedSign.dates}</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-bold" style={{backgroundColor: selectedSign.color, color: '#fff'}}>
                Elemento: {selectedSign.element}
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedSign.description}</p>
            <button
              onClick={() => setSelectedSign(null)}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full font-bold text-lg hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              ✨ Explorar más signos ✨
            </button>
          </div>
        </div>
      )}

      {/* Llamada a la acción */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 max-w-2xl mx-auto">
          <h3 className="text-white text-2xl font-bold mb-3">🔮 ¿Listo para tu lectura personalizada? 🔮</h3>
          <p className="text-slate-300 mb-4">La Maestra Atenea interpretará las energías cósmicas específicamente para ti</p>
          <a
            href="#consulta"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600 text-white rounded-full font-bold text-lg hover:from-orange-500 hover:via-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl sol-luna-glow"
          >
            🌟 Comenzar mi consulta ahora 🌟
          </a>
        </div>
      </div>
    </div>
  );
}; 