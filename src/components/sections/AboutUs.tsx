import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Fondo místico mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-violet-900/20"></div>
      
      {/* Overlay oscuro adicional */}
      <div className="absolute inset-0 celestial-gradient opacity-40"></div>

      {/* Elementos decorativos de cartas de tarot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="relative w-full h-full">
            {[...Array(4)].map((_, i) => (
              <div
                key={`tarot-card-${i}`}
                className="absolute transform rotate-45 border-2 border-white/20 rounded-lg"
                style={{
                  width: '200px',
                  height: '320px',
                  left: `${20 + i * 25}%`,
                  top: `${10 + i * 15}%`,
                  transform: `rotate(${45 + i * 15}deg)`,
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: '0 0 30px rgba(255,255,255,0.1)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Composición de Tarot */}
          <div className="relative group">
            <div className="modern-card premium-shadow p-8 lg:p-12 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Cartas de Tarot */}
                <div className="col-span-2 flex justify-center">
                  <div className="relative w-64 h-96 transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-sm border border-white/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6">
                          <img 
                            src="/assets/images/solyluna.png" 
                            alt="Sol y Luna Logo"
                            className="w-full h-full object-contain filter brightness-150"
                          />
                        </div>
                        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-yellow-500/50 to-purple-500/50 rounded-full mb-4"></div>
                        <p className="text-white/80 text-sm font-light tracking-wider">SOL Y LUNA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido sobre la Maestra Atenea */}
          <div className="space-y-8">
            <div>
              <h2 className="mystical-name text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Maestra Atenea
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <Paragraph className="text-xl !text-white leading-relaxed font-light drop-shadow">
                Con más de 20 años de experiencia en las artes místicas, la Maestra Atenea es una 
                reconocida tarotista especializada en la lectura del Sol y la Luna. Su don natural 
                para canalizar las energías cósmicas la ha convertido en una guía espiritual de 
                confianza para miles de personas.
              </Paragraph>

              <Paragraph className="text-lg !text-white leading-relaxed font-light drop-shadow">
                Formada en las tradiciones ancestrales del tarot, la Maestra Atenea combina la 
                sabiduría antigua con una perspectiva moderna, ofreciendo lecturas precisas y 
                transformadoras que iluminan el camino hacia la claridad y el bienestar.
              </Paragraph>
            </div>
            
            {/* Especialidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Tarot del Amor",
                  description: "Revelación de los secretos del corazón y orientación en las relaciones amorosas.",
                  gradient: "from-fuchsia-600 via-pink-500 to-rose-500",
                  shadow: "shadow-[0_0_20px_rgba(255,0,255,0.6)]",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  )
                },
                {
                  title: "Prosperidad",
                  description: "Manifestación de abundancia y éxito en todas las áreas de la vida.",
                  gradient: "from-amber-400 via-yellow-300 to-orange-500",
                  shadow: "shadow-[0_0_20px_rgba(255,200,0,0.55)]",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.897-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  )
                },
                {
                  title: "Guía Espiritual",
                  description: "Conexión con la sabiduría interior y el propósito de vida.",
                  gradient: "from-teal-400 via-cyan-500 to-violet-600",
                  shadow: "shadow-[0_0_20px_rgba(0,255,200,0.55)]",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  )
                },
                {
                  title: "Energías Cósmicas",
                  description: "Canalización de las fuerzas universales del Sol y la Luna.",
                  gradient: "from-indigo-500 via-blue-500 to-cyan-500",
                  shadow: "shadow-[0_0_20px_rgba(0,195,255,0.55)]",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  )
                }
              ].map((specialty, index) => (
                <div 
                  key={index}
                  className={`p-6 bg-gradient-to-br ${specialty.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 rounded-3xl ${specialty.shadow}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {specialty.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow">{specialty.title}</h3>
                  </div>
                  <p className="text-white leading-relaxed drop-shadow">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
