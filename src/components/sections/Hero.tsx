import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { ZodiacWheel } from "./ZodiacWheel";
// import { Numbers } from "./Numbers"; // Temporalmente deshabilitado
import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const formData = new FormData();
      formData.append("correo", email);
      formData.append("origen", "Hero");
      const response = await fetch("https://formspree.io/f/meogvbjj", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });
      if (response.ok) {
        setEmail("");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="section-transition relative pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Nebulosas de transición */}
      <div className="nebula-transition top"></div>
      <div className="nebula-transition bottom"></div>

      {/* Fondo celestial refinado */}
      <div className="absolute inset-0 celestial-gradient"></div>
      
      {/* Elementos decorativos del Sol y Luna */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sol refinado */}
        <div className="absolute top-16 right-16 w-40 h-40 rounded-full sol-gradient animate-pulse-cosmic opacity-70 zodiac-sign-glow">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-300 to-yellow-400 animate-float-gentle shadow-2xl">
            {/* Corona solar sutil */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`corona-${i}`}
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                }}
              >
                <div 
                  className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-t from-transparent via-yellow-300 to-transparent opacity-40 animate-cosmic-shimmer"
                  style={{
                    transformOrigin: 'bottom center',
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 animate-pulse opacity-60"></div>
        </div>
        
        {/* Luna refinada */}
        <div className="absolute bottom-28 left-12 w-36 h-36 rounded-full luna-gradient animate-pulse-cosmic opacity-70 zodiac-sign-glow">
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 animate-float-gentle shadow-2xl" style={{animationDelay: '1s'}}>
            {/* Halo lunar sutil */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-cosmic-shimmer"></div>
          </div>
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse opacity-50" style={{animationDelay: '1.5s'}}></div>
          {/* Cráteres lunares sutiles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`crater-${i}`}
              className="absolute rounded-full bg-slate-500 opacity-30"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                top: `${30 + Math.random() * 40}%`,
                left: `${30 + Math.random() * 40}%`,
              }}
            />
          ))}
        </div>
        
        {/* Constelaciones refinadas */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`constellation-${i}`}
            className="absolute animate-celestial-dance opacity-60"
          >
            <div
              className="absolute animate-cosmic-shimmer"
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, ${
                  Math.random() > 0.5 ? '#E100FF' : '#00A7FF'
                }, #FFFFFF)`,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
                boxShadow: '0 0 10px currentColor'
              }}
            />
            {/* Líneas de constelación sutiles */}
            {Math.random() > 0.7 && (
              <div
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-20"
                style={{
                  width: `${20 + Math.random() * 30}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            )}
          </div>
        ))}
        
        {/* Nebulosas sutiles */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/10 via-pink-500/5 to-transparent blur-2xl animate-cosmic-shimmer opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-gradient-to-l from-blue-600/10 via-cyan-500/5 to-transparent blur-xl animate-cosmic-shimmer opacity-30" style={{animationDelay: '2s'}}></div>
      </div>
      
      <Container className="flex flex-col gap-12 lg:gap-16 relative z-10">
        {/* Título principal refinado */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="relative leading-tight tracking-wide">
              {/* Título "Tarot" refinado */}
              <span 
                className="relative block mb-8 premium-title animate-luxury-glow text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]" 
                style={{ 
                  letterSpacing: '0.2em',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: '600'
                }}
              >
                𝒯𝒶𝓇𝑜𝓉
                {/* Destellos sutiles */}
                <div className="absolute -inset-4 opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`sparkle-${i}`}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full animate-cosmic-shimmer"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    />
                  ))}
                </div>
              </span>
              
              {/* "Sol y Luna" refinado */}
              <span 
                className="relative block elegant-subtitle animate-luxury-glow font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" 
                style={{ 
                  letterSpacing: '0.3em',
                  fontFamily: 'Cinzel, serif',
                  fontWeight: '500'
                }}
              >
                Sol y Luna
                {/* Línea decorativa sutil */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-40"></div>
              </span>
              
              {/* Subtítulo refinado */}
              <div className="mt-10 relative">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light relative inline-block mystical-name"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    letterSpacing: '0.15em'
                  }}
                >
                  <span className="text-white/80 font-light" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>con </span>
                  <span className="mystical-name animate-luxury-glow font-medium">
                    Maestra Atenea
                  </span>
                </div>
                
                {/* Ornamentos sutiles */}
                <div className="mt-6 flex justify-center items-center gap-4">
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-40"></div>
                  <div className="text-purple-300 text-xl animate-cosmic-shimmer">✧</div>
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-40"></div>
                </div>
              </div>
            </h1>
          </div>
          
          {/* Párrafo refinado */}
          <Paragraph className="mt-12 md:mt-16 leading-relaxed text-xl max-w-4xl relative mystical-card p-8">
            <span 
              className="text-white font-medium text-center block mb-6 text-2xl" 
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                letterSpacing: '0.05em'
              }}
            >
              ✧ Descubre los misterios del universo a través de la sabiduría ancestral del tarot ✧
            </span>
            <span 
              className="text-gray-100 font-light block text-center text-lg leading-relaxed" 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                letterSpacing: '0.02em'
              }}
            >
              La Maestra Atenea te guiará en un viaje de autodescubrimiento, revelando los secretos 
              que el Sol y la Luna tienen guardados para ti.
            </span>
          </Paragraph>
        </div>

        {/* Rueda Zodiacal */}
        <div className="relative mb-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas cósmicas sutiles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`cosmic-particle-${i}`}
                className="absolute animate-float-gentle opacity-30"
                style={{
                  width: `${3 + Math.random() * 4}px`,
                  height: `${3 + Math.random() * 4}px`,
                  background: `linear-gradient(45deg, ${Math.random() > 0.5 ? '#E100FF' : '#00A7FF'}, #FFFFFF)`,
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${5 + Math.random() * 4}s`,
                  boxShadow: '0 0 8px currentColor'
                }}
              />
            ))}
          </div>
          <ZodiacWheel />
        </div>

        {/* Formulario de contacto refinado */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Separador decorativo sutil */}
          <div className="w-full flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-24"></div>
            <div className="mx-4 text-purple-400 text-xl animate-cosmic-shimmer">✧</div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-24"></div>
          </div>
          
          <div className="mb-10 relative mystical-card p-8">
            <h3 
              className="relative text-4xl lg:text-5xl font-medium text-white mb-8 animate-luxury-glow" 
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                letterSpacing: '0.05em'
              }}
            >
              ✧ Inicia Tu Viaje Cósmico ✧
            </h3>
            
            <p 
              className="text-white text-xl max-w-3xl mx-auto leading-relaxed" 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                letterSpacing: '0.02em'
              }}
            >
              <span 
                className="text-purple-200 font-medium" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Déjanos tu email
              </span> y la Maestra Atenea te contactará para 
              <span 
                className="text-pink-200 font-medium" 
                style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
              >
                revelar los misterios
              </span> que el universo tiene preparados para ti.
            </p>
            
            {/* Formulario refinado */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4">
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Tu correo electrónico"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all duration-300"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    letterSpacing: '0.02em'
                  }}
                  required
                />
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 rounded-full blur-md"></div>
              </div>
              
              <button
                type="submit"
                disabled={enviando}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full text-white font-medium transform hover:scale-103 transition-all duration-300 animate-cosmic-shimmer"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                {enviando ? "Enviando..." : "Comenzar Mi Viaje Místico"}
              </button>
            </form>
            
            {/* Toast de confirmación refinado */}
            {showToast && (
              <div className="fixed bottom-4 right-4 px-6 py-4 bg-green-500/80 backdrop-blur-md rounded-lg text-white shadow-lg animate-cosmic-shimmer">
                ✨ Tu mensaje ha sido enviado con éxito ✨
              </div>
            )}
          </div>
        </div>
      </Container>
      {/* Componente Numbers temporalmente oculto */}
      {/* <Numbers /> */}
    </section>
  );
};
