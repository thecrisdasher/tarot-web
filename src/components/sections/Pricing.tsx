import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { magicPlans } from "../../utils/pricing-plan";
import { useBookingStore } from "../../store/BookingStore";

export const Pricing = () => {
  const { setSelectedService } = useBookingStore();

  const handleSelectPlan = (plan: typeof magicPlans[0]) => {
    setSelectedService({
      id: plan.id,
      title: plan.title,
      price: plan.price,
      description: plan.description
    });
    
    // Scroll to calendar section
    document.getElementById('calendario')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-900/30 to-transparent">
      {/* Fondo celestial */}
      <div className="absolute inset-0 celestial-gradient"></div>
      
      {/* Elementos decorativos Sol y Luna */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 sol-gradient rounded-full animate-pulse-cosmic opacity-40"></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 luna-gradient rounded-full animate-pulse-cosmic opacity-50"></div>
        
        {/* Constelaciones decorativas */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`constellation-${i}`}
            className="absolute animate-celestial-dance"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                Math.random() > 0.5 ? '#FB923C' : '#94A3B8'
              }, white)`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8)' }}>
            Consultas de 
            <span className="tarot-gradient"> Tarot Personalizadas</span>
          </h1>
          <div className="text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
            Descubre los misterios del Sol y la Luna a través de lecturas personalizadas 
            con la Maestra Atenea. Cada consulta es única y diseñada para iluminar tu camino.
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {magicPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`group relative modern-card premium-shadow p-8 lg:p-10 transition-all duration-700 hover:scale-105 tarot-decoration
                ${index === 1 ? 'border-4 border-orange-400 sol-luna-glow' : ''}
                ${index === 0 ? 'cosmic-gradient' : index === 1 ? 'sol-gradient' : 'luna-gradient'}
              `}
            >
              {/* Marca de plan recomendado */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg drop-shadow-lg">
                    ✨ Más Popular
                  </div>
                    </div>
                  )}
                  
              {/* Borde decorativo */}
              <div className="absolute inset-0 rounded-3xl cosmic-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 
                    ${index === 0 ? 'bg-indigo-500' : index === 1 ? 'bg-orange-500' : 'bg-slate-500'}
                    sol-luna-glow transform group-hover:scale-110 transition-transform duration-500`}>
                    {plan.icon === "book" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    ) : plan.icon === "sun" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    )}
                    </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600 transition-all duration-500 drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
                    {plan.title}
                  </h3>
                  <p className="text-slate-700 mb-6 leading-relaxed font-medium drop-shadow-sm" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.7)' }}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl lg:text-5xl font-bold tarot-gradient drop-shadow-lg">
                      €{plan.price}
                    </span>
                    <span className="text-slate-600 text-lg font-semibold" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
                      {plan.currency}
                    </span>
                  </div>
                  </div>
                  
                <div className="mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 flex items-center justify-center mt-0.5 shadow-lg">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-slate-800 leading-relaxed font-medium drop-shadow-sm" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full justify-center py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl drop-shadow-lg
                      ${index === 1 
                        ? 'bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600 text-white sol-luna-glow hover:from-orange-500 hover:via-rose-600 hover:to-purple-700' 
                        : 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800'
                      }
                    `}
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    📅 Agendar Consulta
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        {/* Sección de confidencialidad con mejor contraste */}
        <div className="mt-20 lg:mt-32">
          <div className="modern-card premium-shadow p-8 lg:p-12 text-center bg-white/95 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 drop-shadow-sm">
                Confidencialidad y Privacidad Garantizada
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4 drop-shadow-sm">
                    🔒 Consultas Privadas
                  </h4>
                  <Paragraph className="text-slate-700 leading-relaxed font-medium">
                    Todas las consultas son completamente confidenciales. Tu información personal 
                    y las revelaciones de las cartas se mantienen en absoluto secreto.
                  </Paragraph>
            </div>
            <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4 drop-shadow-sm">
                    ⭐ Experiencia Personalizada
                  </h4>
                  <Paragraph className="text-slate-700 leading-relaxed font-medium">
                    Cada lectura es única y personalizada según tu situación específica. 
                    La Maestra Atenea canaliza las energías cósmicas para darte la guía más precisa.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partículas flotantes adicionales */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={`float-particle-${i}`}
              className="absolute animate-float-gentle"
              style={{
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  Math.random() > 0.5 ? 'rgba(251, 146, 60, 0.3)' : 'rgba(148, 163, 184, 0.3)'
                } 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(2px)',
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
                opacity: 0.5
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
