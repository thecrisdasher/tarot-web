import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { useState } from "react";

export const AboutUs = () => {
  const [isHoveredImage, setIsHoveredImage] = useState(false);
  
  return (
    <section id="about-us" className="py-12 relative">
      {/* Efecto de partículas místicas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={`mystic-particle-bg-${i}`}
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
      
      <Container className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-5/12 xl:w-1/2">
          <div 
            className="w-full h-72 sm:h-80 lg:h-96 relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 mx-auto max-w-md lg:max-w-none"
            onMouseEnter={() => setIsHoveredImage(true)}
            onMouseLeave={() => setIsHoveredImage(false)}
            style={{
              boxShadow: isHoveredImage 
                ? '0 20px 50px rgba(138, 43, 226, 0.4), 0 0 0 1px rgba(138, 43, 226, 0.1)' 
                : '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.7s ease',
              background: 'linear-gradient(to bottom, #1e1b4b, #111827)'
            }}
          >
            <img
              src="/assets/logos/logobaston.png"
              className={`w-full h-full object-contain rounded-3xl relative z-10 transition-all duration-700 ${isHoveredImage ? 'scale-105 filter brightness-110' : ''}`}
              alt="Maestro Alaric - Experiencia Espiritual"
            />
            
            {/* Efecto de brillo en el borde */}
            <div 
              className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${isHoveredImage ? 'opacity-100' : 'opacity-0'}`}
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: 'inset 0 0 30px rgba(138, 43, 226, 0.3)'
              }}
            ></div>
            
            {/* Sello de autenticidad */}
            <div 
              className={`absolute bottom-4 right-4 bg-gradient-to-r from-purple-900/80 to-amber-900/80 px-4 py-2 rounded-full backdrop-blur-sm z-20 transition-all duration-500 transform ${isHoveredImage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <p className="text-white text-sm font-semibold flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full inline-block mr-2 animate-pulse"></span>
                Certificado desde 1998
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col mt-8 lg:mt-0">
          <div className="mb-4">
            <Title>
              <span className="text-transparent bg-clip-text ml-2 relative inline-block mr-2"
                style={{
                  background: 'linear-gradient(to right, #c084fc, #fcd34d)',
                  WebkitBackgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'textShimmer 2s infinite alternate',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 30px rgba(217, 119, 6, 0.2)'
                }}
              >
                25 Años
              </span>
              de Sabiduría Mística
            </Title>
          </div>
          
          <Paragraph className="mb-6">
            El Maestro Alaric ha dedicado más de dos décadas a perfeccionar el arte de los rituales esotéricos ancestrales. 
            Reconocido internacionalmente por la efectividad de sus trabajos, ha ayudado a miles de personas a transformar 
            sus vidas mediante técnicas espirituales auténticas transmitidas por generaciones en su linaje familiar.
          </Paragraph>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl">
            <Info
              title="Experiencia Garantizada"
              description="El Maestro Alaric cuenta con 25 años de experiencia en rituales de alto impacto y conexión espiritual genuina."
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </Info>
            
            <Info
              title="Resultados Verificables"
              description="Más de 10,000 casos de éxito documentados y testimonios reales de clientes satisfechos."
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Info>
          </div>
          
          {/* Sección de métodos de pago */}
          <div className="mt-6 lg:mt-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm p-4 lg:p-6 border border-purple-900/30">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              Métodos de Pago Seguros
            </h3>
            
            <p className="text-gray-300 mb-4">
              El Maestro Alaric ofrece múltiples opciones de pago seguras y convenientes para sus servicios espirituales:
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-gray-800/60 rounded-xl p-3 flex flex-col items-center justify-center transition-all hover:bg-gray-800/90 hover:scale-105">
                <img src="/assets/logos/paypal.png" alt="PayPal" className="h-8 w-auto mb-2" />
                <span className="text-white text-xs">PayPal</span>
              </div>
              
              <div className="bg-gray-800/60 rounded-xl p-3 flex flex-col items-center justify-center transition-all hover:bg-gray-800/90 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-xs">Transferencia</span>
              </div>
              
              <div className="bg-gray-800/60 rounded-xl p-3 flex flex-col items-center justify-center transition-all hover:bg-gray-800/90 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-xs">Western Union</span>
              </div>
              
              <div className="bg-gray-800/60 rounded-xl p-3 flex flex-col items-center justify-center transition-all hover:bg-gray-800/90 hover:scale-105">
                <img src="/assets/logos/whatsapp.png" alt="WhatsApp" className="h-8 w-auto mb-2" />
                <span className="text-white text-xs">Efectivo</span>
              </div>
            </div>
            
            <div className="mt-4 flex items-center">
              <span className="text-emerald-400 text-xs mr-2">•</span>
              <p className="text-gray-300 text-sm">Precios accesibles y planes personalizados según tu situación</p>
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
