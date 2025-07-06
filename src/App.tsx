import SmokeBackground from "./components/elements/SmokeBackground";
import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { WhatsappContact } from "./components/sections/WhatsappContact";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { ContactForm } from "./components/sections/CallToAction";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Agregar un pequeño efecto de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout title="Maestro Alaric">
      <section id="hero">
        <Hero />
      </section>
      <WhatsappContact />
      <Services />
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="servicios">
        <Pricing />
      </section>
      <CTA />
      <div id="testimonios"></div>
      <section id="contacto">
        <ContactForm />
      </section>
      <SmokeBackground />
      
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=19145206230&text=Hola%20Maestro%20Alaric%2C%20me%20interesa%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
        }`}
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-emerald-400 blur-lg transition-all duration-300 opacity-60 group-hover:opacity-80 group-hover:scale-110"></div>
          <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full p-4 shadow-xl mystic-glow transition-all duration-300 transform group-hover:scale-105 border-2 border-emerald-300/50">
            <div className="flex items-center justify-center">
              <img 
                src="/assets/logos/logowhatsapp.png" 
                alt="WhatsApp" 
                className="w-11 h-11 z-10 object-contain filter brightness-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
              />
            </div>
            <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
              1
            </div>
          </div>
          <div className="absolute top-0 right-full mr-3 mystic-card text-purple-900 font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-purple-200/50">
            ¡Contáctame ahora!
          </div>
        </div>
      </a>
    </Layout>
  );
}

export default App;
