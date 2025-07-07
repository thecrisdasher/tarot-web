import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { services } from "../../utils/services-data";

export const Services = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
      {/* Fondo celestial */}
      <div className="absolute inset-0 celestial-gradient"></div>
      
      {/* Elementos decorativos Sol y Luna */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 sol-gradient rounded-full animate-pulse-cosmic opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 luna-gradient rounded-full animate-pulse-cosmic opacity-40"></div>
        
        {/* Partículas decorativas */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`decoration-${i}`}
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
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Testimonios de 
            <span className="tarot-gradient"> nuestros consultantes</span>
          </h1>
          <Paragraph className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo las cartas del tarot han transformado la vida de nuestros consultantes, 
            guiándolos hacia la claridad, el amor y la prosperidad.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative modern-card premium-shadow p-8 lg:p-10 hover:scale-105 transition-all duration-700 tarot-decoration
                ${index === 0 ? 'cosmic-gradient' : index === 1 ? 'mystical-gradient' : 'sol-gradient'}
              `}
            >
              {/* Borde decorativo */}
              <div className="absolute inset-0 rounded-3xl cosmic-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                    ${index === 0 ? 'bg-indigo-500' : index === 1 ? 'bg-rose-500' : 'bg-orange-500'}
                    sol-luna-glow transform group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600 transition-all duration-500">
                    {service.title}
                  </h3>
                  <Paragraph className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </Paragraph>
                </div>
                
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {service.testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{service.testimonial.name}</h4>
                      <p className="text-slate-500 text-sm">{service.testimonial.location}</p>
                    </div>
              </div>
                  <blockquote className="text-slate-700 italic leading-relaxed">
                    "{service.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sección de confianza */}
        <div className="mt-20 lg:mt-32">
          <div className="modern-card premium-shadow p-8 lg:p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              La confianza de miles de consultantes
            </h3>
            <Paragraph className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Maestra Atenea ha guiado a más de 15,000 personas en su camino hacia la claridad y el bienestar espiritual.
            </Paragraph>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold tarot-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  15,000+
                </div>
                <p className="text-slate-600 font-medium">Consultas realizadas</p>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold tarot-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <p className="text-slate-600 font-medium">Satisfacción garantizada</p>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold tarot-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <p className="text-slate-600 font-medium">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Elementos flotantes decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`float-${i}`}
              className="absolute animate-float-gentle"
              style={{
                width: `${6 + Math.random() * 12}px`,
                height: `${6 + Math.random() * 12}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  Math.random() > 0.5 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(148, 163, 184, 0.2)'
                } 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(1px)',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
                opacity: 0.4
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
