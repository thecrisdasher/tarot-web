import { Container } from "../shared/Container";

export const Footer = () => {
  return (
    <footer className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-transparent via-purple-900/25 to-transparent">
      {/* Fondo celestial */}
      <div className="absolute inset-0 celestial-gradient"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-8 right-12 w-16 h-16 sol-gradient rounded-full animate-pulse-cosmic opacity-25"></div>
        <div className="absolute bottom-8 left-16 w-12 h-12 luna-gradient rounded-full animate-pulse-cosmic opacity-30"></div>
        
        {/* Estrellas decorativas */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`footer-star-${i}`}
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
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              opacity: 0.4
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center sol-luna-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold tarot-gradient">
                  Tarot Sol y Luna
                </h3>
                <p className="text-slate-600 font-medium">
                  Maestra Atenea
                </p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
              Descubre los misterios del universo a través de la sabiduría ancestral del tarot. 
              La Maestra Atenea te guía en un viaje de autodescubrimiento y crecimiento espiritual.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=34611334653&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta%20de%20tarot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.491"/>
                </svg>
              </a>
              <a
                href="mailto:tarotsolyluna30@gmail.com"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6">
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">
                  Tarot del Amor
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">
                  Tarot de Prosperidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">
                  Guía Espiritual
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">
                  Consultas Premium
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-600">+34 611 334 653</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-600">tarotsolyluna30@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-slate-600">24/7 Disponible</span>
              </li>
          </ul>
          </div>
        </div>
        
        {/* Línea separadora */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-center md:text-left">
              © 2024 Tarot Sol y Luna. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300 text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
        
        {/* Elementos flotantes decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`footer-float-${i}`}
              className="absolute animate-float-gentle"
              style={{
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  Math.random() > 0.5 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(148, 163, 184, 0.2)'
                } 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(1px)',
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
};
