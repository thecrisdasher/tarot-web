import { magicServices } from "../../utils/magic-services";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { useState } from "react";

export const Pricing = () => { // Mantenemos el nombre para no romper las importaciones
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Definimos los íconos para los servicios
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "heart":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        );
      case "fire":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        );
      case "eye":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        );
      case "money":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
          </svg>
        );
      case "shield":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <section id="servicios" className="py-16 relative">
      {/* Efecto de partículas místicas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`mystic-particle-services-${i}`}
            className="absolute animate-mystic-float"
            style={{
              width: `${3 + Math.random() * 8}px`,
              height: `${3 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 
                ? `radial-gradient(circle, rgba(138,43,226,${0.5 + Math.random() * 0.5}) 0%, rgba(103,16,155,0) 70%)`
                : `radial-gradient(circle, rgba(255,215,0,${0.3 + Math.random() * 0.4}) 0%, rgba(218,165,32,0) 70%)`,
              borderRadius: '50%',
              filter: 'blur(2px)',
              opacity: 0.3 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>
      
      <Container className="text-center">
        <div className="mb-12 -mt-48">
          <Title>
            Servicios Místicos
            <span 
              className="text-transparent bg-clip-text ml-2 relative inline-block"
              style={{
                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'textShimmer 2s infinite alternate',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(236, 72, 153, 0.3)'
              }}
            > Ancestrales</span>
          </Title>
          <Paragraph className="mt-4 max-w-3xl mx-auto">
            El Maestro Alaric ofrece rituales y hechizos poderosos, elaborados con sabiduría ancestral 
            y elementos naturales consagrados para resultados garantizados y duraderos.
        </Paragraph>
        </div>
      </Container>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magicServices.map((service, index) => (
            <div 
              key={index} 
              className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow: hoveredCard === index 
                  ? `0 20px 50px ${service.shadowColor}` 
                  : '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.5s ease'
              }}
            >
              <div className={`h-full bg-gradient-to-br ${hoveredCard === index ? service.hoverColor : service.color} p-[3px] rounded-3xl`}>
                <div className="h-full w-full rounded-3xl p-6 flex flex-col relative backdrop-blur-sm border border-gray-800/50">
                  {service.featured && (
                    <div className="absolute -top-3 right-6 bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Destacado
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`text-white p-2 rounded-full mr-3 bg-gradient-to-br ${service.color}`}>
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                  </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="flex-1 space-y-3 text-gray-300">
                    {service.details.map((detail, keyDetail) => (
                      <li key={keyDetail} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a 
                      href={`https://api.whatsapp.com/send?phone=573163314375&text=Hola%20Maestro%20Alaric%2C%20me%20interesa%20una%20consulta%20sobre%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-block py-3 px-6 text-center rounded-xl bg-gradient-to-r ${service.color} 
                                  text-white font-medium transition-all duration-300 transform 
                                  hover:scale-105 hover:shadow-lg hover:${service.hoverColor}`}
                    >
                      Consultar Servicio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      
      {/* Mensaje de confidencialidad */}
      <Container className="mt-16">
        <div className="max-w-4xl mx-auto rounded-2xl p-6 border border-purple-900/30 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-pink-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">100% Confidencial y Personalizado</h4>
              <p className="text-gray-300">
                Todos los rituales son realizados de forma personalizada por el Maestro Alaric, 
                adaptándose a tu situación específica para maximizar su efectividad. Garantizamos 
                total confidencialidad y discreción en cada consulta y ritual.
              </p>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Añadimos estilos para animaciones */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes textShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          
          @keyframes mystic-float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); }
            33% { transform: translateY(-8px) translateX(5px) rotate(2deg); }
            66% { transform: translateY(5px) translateX(-7px) rotate(-1deg); }
            100% { transform: translateY(0) translateX(0) rotate(0deg); }
          }
        `
      }} />
    </section>
  );
};
