import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const AboutUs = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Fondo celestial */}
      <div className="absolute inset-0 celestial-gradient"></div>
      
      {/* Elementos decorativos Sol y Luna */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-12 w-28 h-28 sol-gradient rounded-full animate-pulse-cosmic opacity-30"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 luna-gradient rounded-full animate-pulse-cosmic opacity-40"></div>
        
        {/* Constelaciones místicas */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`constellation-${i}`}
            className="absolute animate-celestial-dance"
            style={{
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                Math.random() > 0.5 ? '#FB923C' : '#94A3B8'
              }, white)`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen de la Maestra Atenea */}
          <div className="relative group">
            <div className="modern-card premium-shadow p-8 lg:p-12">
              <div className="relative overflow-hidden rounded-3xl">
            <img
                  src="/assets/logos/logotarot.png"
                  alt="Maestra Atenea - Tarot Sol y Luna"
                  className="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-105"
            />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 cosmic-border rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

          {/* Contenido sobre la Maestra Atenea */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Conoce a la 
                <span className="tarot-gradient block mt-2">Maestra Atenea</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full mb-8"></div>
          </div>
          
            <div className="space-y-6">
              <Paragraph className="text-xl text-slate-700 leading-relaxed">
                Con más de 20 años de experiencia en las artes místicas, la Maestra Atenea es una 
                reconocida tarotista especializada en la lectura del Sol y la Luna. Su don natural 
                para canalizar las energías cósmicas la ha convertido en una guía espiritual de 
                confianza para miles de personas.
          </Paragraph>

              <Paragraph className="text-lg text-slate-600 leading-relaxed">
                Formada en las tradiciones ancestrales del tarot, la Maestra Atenea combina la 
                sabiduría antigua con una perspectiva moderna, ofreciendo lecturas precisas y 
                transformadoras que iluminan el camino hacia la claridad y el bienestar.
              </Paragraph>
            </div>
            
            {/* Especialidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="modern-card p-6 cosmic-gradient">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Tarot del Amor</h3>
          </div>
                <p className="text-slate-600 leading-relaxed">
                  Revelación de los secretos del corazón y orientación en las relaciones amorosas.
                </p>
              </div>
              
              <div className="modern-card p-6 sol-gradient">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.897-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Prosperidad</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Manifestación de abundancia y éxito en todas las áreas de la vida.
                </p>
              </div>
              
              <div className="modern-card p-6 luna-gradient">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Guía Espiritual</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Conexión con la sabiduría interior y el propósito de vida.
                </p>
              </div>
              
              <div className="modern-card p-6 mystical-gradient">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Energías Cósmicas</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Canalización de las fuerzas universales del Sol y la Luna.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de métodos de pago */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Métodos de <span className="tarot-gradient">Pago Seguros</span>
            </h3>
            <Paragraph className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ofrecemos múltiples opciones de pago seguras para tu comodidad y tranquilidad.
            </Paragraph>
            </div>
            
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: "PayPal", image: "/assets/logos/paypal.png" },
              { name: "WhatsApp Pay", image: "/assets/logos/whatsapp.png" },
              { name: "Transferencia", image: "/assets/logos/slack.png" },
              { name: "Stripe", image: "/assets/logos/spotify.png" }
            ].map((method, index) => (
              <div 
                key={index}
                className="modern-card p-6 lg:p-8 text-center group hover:scale-105 transition-all duration-500"
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
                <h4 className="text-slate-800 font-semibold">{method.name}</h4>
            </div>
            ))}
          </div>
        </div>
        
        {/* Elementos flotantes decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={`float-about-${i}`}
              className="absolute animate-float-gentle"
              style={{
                width: `${4 + Math.random() * 10}px`,
                height: `${4 + Math.random() * 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  Math.random() > 0.5 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(148, 163, 184, 0.2)'
                } 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(2px)',
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                opacity: 0.4
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
