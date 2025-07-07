import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { ZodiacWheel } from "./ZodiacWheel";
// import { Numbers } from "./Numbers"; // Temporalmente deshabilitado
import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
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
        setEnviado(true);
        setEmail("");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="relative pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-transparent via-purple-900/15 to-transparent">
      {/* Fondo celestial ultra moderno */}
      <div className="absolute inset-0 celestial-gradient"></div>
      
      {/* Elementos decorativos del Sol y Luna */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sol mejorado */}
        <div className="absolute top-16 right-16 w-40 h-40 rounded-full sol-gradient animate-pulse-cosmic opacity-70 zodiac-sign-glow">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-300 to-yellow-400 animate-float-gentle shadow-2xl"></div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 animate-pulse opacity-80"></div>
          {/* Rayos de sol */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`sun-ray-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-t from-transparent to-yellow-300 opacity-60 animate-pulse"
              style={{
                top: '-16px',
                left: '50%',
                transformOrigin: '50% 32px',
                transform: `translateX(-50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Luna mejorada */}
        <div className="absolute bottom-28 left-12 w-36 h-36 rounded-full luna-gradient animate-pulse-cosmic opacity-80 zodiac-sign-glow">
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 animate-float-gentle shadow-2xl" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse opacity-70" style={{animationDelay: '1.5s'}}></div>
          {/* Cráteres lunares */}
          <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-slate-500 opacity-40"></div>
          <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-slate-600 opacity-30"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-slate-500 opacity-35"></div>
        </div>
        
        {/* Constelación de estrellas mejorada */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute animate-celestial-dance opacity-70"
            style={{
              width: `${6 + Math.random() * 10}px`,
              height: `${6 + Math.random() * 10}px`,
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
        ))}
        
        {/* Nebulosas de fondo */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/10 to-transparent blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-gradient-to-l from-blue-600/10 to-transparent blur-2xl animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full bg-gradient-to-b from-pink-600/10 to-transparent blur-3xl animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
      </div>
      
      <Container className="flex flex-col gap-12 lg:gap-16 relative z-10">
        {/* Título principal */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight relative">
              {/* Texto principal con mejor contraste */}
              <span className="relative block mb-4 text-white font-extrabold drop-shadow-lg" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8)' }}>
                Tarot
              </span>
              <span className="relative block tarot-gradient animate-text-glow font-extrabold drop-shadow-lg" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8)' }}>
                Sol y Luna
              </span>
              
              {/* Subtítulo mejorado con mejor contraste */}
              <div className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light relative">
                <span className="text-white font-light drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>con </span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 animate-text-glow drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                  Maestra Atenea
                </span>
              </div>
          </h1>
          </div>
          
          {/* Párrafo con mejor legibilidad */}
          <Paragraph className="mt-8 md:mt-12 leading-relaxed text-xl max-w-4xl relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <span className="text-white font-semibold text-center block mb-3" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              ✨ Descubre los misterios del universo a través de la sabiduría ancestral del tarot ✨
            </span>
            <span className="text-gray-200 font-normal block text-center" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
            La Maestra Atenea te guiará en un viaje de autodescubrimiento, revelando los secretos 
            que el Sol y la Luna tienen guardados para ti.
            </span>
          </Paragraph>
        </div>

        {/* Rueda Zodiacal - Elemento principal atractivo */}
        <div className="relative mb-12">
          {/* Efectos de partículas reducidos para mejor legibilidad */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={`cosmic-particle-${i}`}
                className="absolute animate-float-gentle opacity-30"
                style={{
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                  background: `linear-gradient(45deg, ${Math.random() > 0.5 ? '#E100FF' : '#00A7FF'}, #FFFFFF)`,
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${5 + Math.random() * 4}s`,
                  boxShadow: '0 0 10px currentColor'
                }}
              />
            ))}
          </div>
          <ZodiacWheel />
        </div>

        {/* Formulario de contacto */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Separador decorativo */}
          <div className="w-full flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-32"></div>
            <div className="mx-4 text-purple-400 text-2xl">✦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-32"></div>
          </div>
          
          <div className="mb-10 relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="relative text-3xl lg:text-4xl font-bold text-white mb-6 animate-text-glow" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              🌟 Inicia Tu Viaje Cósmico 🌟
            </h3>
            
            <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
              <span className="text-purple-300 font-semibold">Déjanos tu email</span> y la Maestra Atenea te contactará para 
              <span className="text-pink-300 font-semibold"> revelar los misterios</span> que el universo tiene preparados para ti.
            </p>
          </div>
          
          <div className="w-full flex max-w-2xl mx-auto">
              <form
                onSubmit={handleSubmit}
              className="w-full ultra-glass rounded-full p-4 flex gap-4 items-center hover:shadow-2xl transition-all duration-500 group border-2 border-purple-400/40 hover:border-purple-400/80 relative overflow-hidden"
              >
              {/* Efecto de brillo animado en el formulario */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer-advanced"></div>
              
              <div className="flex items-center flex-1 px-6">
                <div className="min-w-max pr-6 border-r border-purple-300/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 text-purple-400 group-hover:text-orange-400 transition-colors duration-300 group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="correo"
                  placeholder="✨ tu@email.com ✨"
                  value={email}
                  onChange={handleChange}
                  required
                  className="w-full py-5 outline-none bg-transparent text-white placeholder-purple-300 font-medium text-xl"
                  disabled={enviando || enviado}
                />
              </div>
                <button
                  type="submit"
                  disabled={enviando || enviado}
                className="min-w-max text-white px-10 py-5 rounded-full bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600 hover:from-orange-500 hover:via-rose-600 hover:to-purple-700 font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed sol-luna-glow relative overflow-hidden"
              >
                {/* Efecto de brillo en el botón */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 animate-shimmer-advanced"></div>
                <span className="relative z-10" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  {enviado ? "✨ ¡Enviado! ✨" : enviando ? "🔮 Enviando..." : "🌟 Comenzar mi consulta 🌟"}
                </span>
                </button>
              </form>
          </div>
          
              {showToast && (
                <div className="fixed left-1/2 bottom-10 transform -translate-x-1/2 z-50">
              <div className="modern-card text-slate-800 px-8 py-6 flex items-center gap-4 animate-bounce border border-emerald-200 shadow-2xl">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                <span className="font-semibold text-lg">¡Tu consulta ha sido enviada con éxito!</span>
                </div>
            </div>
          )}
        </div>
      </Container>
      {/* Componente Numbers temporalmente oculto */}
      {/* <Numbers /> */}
    </section>
  );
};
