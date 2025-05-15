import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { useState } from "react";

export const Services = () => {
  // Datos de testimonios con las mismas imágenes temporales
  const testimonios = [
    {
      nombre: "Laura Benitez",
      texto: "Increíble experiencia con el Maestro Alaric. Su amarre de amor funcionó en menos de 2 semanas y mi pareja volvió arrepentido. Totalmente recomendado.",
      imagen: "/assets/logos/conversacion.png",
      gradient: "from-purple-900 via-pink-800 to-rose-700",
      hoverGradient: "from-purple-800 via-pink-700 to-rose-600",
    },
    {
      nombre: "Carlos Rodríguez",
      texto: "La limpieza espiritual que me realizó el Maestro Alaric cambió completamente mi vida. Mis negocios empezaron a prosperar y la mala suerte desapareció.",
      imagen: "/assets/logos/conversacion2.png",
      gradient: "from-emerald-900 via-emerald-700 to-green-600",
      hoverGradient: "from-emerald-800 via-emerald-600 to-green-500",
    },
    {
      nombre: "Sofía Martínez",
      texto: "Después de probar con otros brujos sin resultados, el Maestro Alaric logró resolver mi problema en tan solo 3 días. La protección espiritual que me brindó es real.",
      imagen: "/assets/logos/conversacion3.png",
      gradient: "from-cyan-900 via-cyan-800 to-cyan-600",
      hoverGradient: "from-cyan-800 via-cyan-700 to-cyan-500",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="testimonios" className="py-2 -mt-24 relative">
      {/* Línea separadora decorativa */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
      
      <Container className="space-y-6 md:space-y-8 pt-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Testimonios de Clientes</Title>
          <Paragraph>
            Descubre cómo el Maestro Alaric ha transformado las vidas de sus clientes a través de sus poderosos rituales y consultas espirituales.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-3xl transition-all duration-500 transform hover:translate-y-[-10px] hover:shadow-2xl flex flex-col`}
              style={{
                boxShadow: hoveredCard === index 
                  ? `0 20px 50px rgba(${index === 0 ? '255, 0, 128, 0.7' : index === 1 ? '25, 252, 0, 0.7' : '14, 165, 233, 0.6'})` 
                  : '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.5s ease'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img
                  src={testimonio.imagen}
                  alt={`Testimonio de ${testimonio.nombre}`}
                  className="w-full object-contain bg-black transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500"></div>
              </div>
              <div className="p-6 bg-black flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-2">{testimonio.nombre}</h3>
                <p className="text-gray-200 mb-4">
                  "{testimonio.texto}"
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-white text-sm">Cliente verificado</span>
                </div>
              </div>
              
              {/* Efecto de brillo en el borde */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: `inset 0 0 0px rgba(${index === 0 ? '255, 0, 128, 0.2' : index === 1 ? '25, 252, 0, 0.2' : '14, 165, 233, 0.2'})`
                }}
              ></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
