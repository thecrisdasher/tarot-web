import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";
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
    <section className="relative pt-24 lg:pt-28 pb-6 md:pb-10">
      <Container className="flex flex-col gap-8 lg:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="group relative overflow-hidden rounded-3xl">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv6hbjzxf1frstc0sapp70q6%2F1747197568_img_0.webp?st=2025-05-14T03%3A14%3A24Z&se=2025-05-20T04%3A14%3A24Z&sks=b&skt=2025-05-14T03%3A14%3A24Z&ske=2025-05-20T04%3A14%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=vluy38swT4GKgh9NMEei04TA%2BbutDkFZrVWdOlfhZuI%3D&az=oaivgprodscus"
              alt="Hero image 1"
              width={2350}
              height={2359}
              className="w-full h-[500px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Amarres de Amor</h3>
              <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Un ritual ancestral que une dos almas en un vínculo eterno, despertando la pasión y el deseo más profundo. Nuestros amares son realizados con elementos naturales y bendecidos por la luna.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl">
            <img
              src="/assets/images/endulzamientos.webp"
              alt="Hero image 2"
              width={2350}
              height={2359}
              className="w-full h-[500px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Endulzamientos</h3>
              <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Rituales poderosos que suavizan corazones endurecidos, eliminando rencores y abriendo caminos para la reconciliación. Utilizamos miel, azúcar y esencias especiales para endulzar las relaciones.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl">
            <img
              src="/assets/images/limpieza.webp"
              alt="Hero image 3"
              width={2350}
              height={2359}
              className="w-full h-[500px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Limpiezas Energéticas</h3>
              <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Purificación espiritual que elimina energías negativas, maldiciones y trabajos oscuros. Nuestros rituales de limpieza utilizan hierbas sagradas y velas consagradas para restaurar tu energía vital.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto mt-2 lg:mt-16">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Hechizos y Rituales 
            <span 
              className="text-transparent bg-clip-text ml-2 relative inline-block"
              style={{
                background: 'linear-gradient(to right, #ff0844, #b300ff)',
                WebkitBackgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'textShimmer 2s infinite alternate',
                textShadow: '0 0 20px rgba(255, 8, 68, 0.5), 0 0 30px rgba(179, 0, 255, 0.3)'
              }}
            >
              Maestro Alaric{" "}
              <div 
                style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  right: '-5px',
                  bottom: '-5px',
                  background: 'radial-gradient(circle, rgba(255,8,68,0.3) 0%, rgba(179,0,255,0.2) 50%, rgba(0,0,0,0) 70%)',
                  filter: 'blur(8px)',
                  borderRadius: '10px',
                  zIndex: -1,
                  animation: 'glowPulse 3s infinite'
                }}
              ></div>
            </span>
          </h1>
          <Paragraph className="mt-8 md:mt-10">
           El Maestro Alaric, guía y hechicero con más de dos décadas de experiencia, ofrece servicios de hechicería auténtica, realizados con sabiduría, respeto y poder ritual. A través de prácticas místicas personalizadas, podrás encontrar soluciones profundas a problemas de amor, protección, dinero, salud, y armonía espiritual.
          </Paragraph>
          <div className="mt-10 md:mt-12 w-full flex max-w-md mx-auto">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                onSubmit={handleSubmit}
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                  shadow-lg border border-purple-900/30 backdrop-blur-sm
                  bg-transparent rounded-full ease-linear focus-within:border-purple-600"
              >
                <span className="min-w-max pr-2 border-r border-purple-900/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-purple-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="correo"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 outline-none bg-transparent text-white placeholder-gray-400"
                  disabled={enviando || enviado}
                />
                <button
                  type="submit"
                  disabled={enviando || enviado}
                  className="min-w-max text-white px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 font-semibold shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <span className="relative z-[5]">
                    {enviado ? "¡Enviado!" : enviando ? "Enviando..." : "Get Started"}
                  </span>
                </button>
              </form>
              {showToast && (
                <div className="fixed left-1/2 bottom-10 transform -translate-x-1/2 z-50">
                  <div className="bg-black/90 border border-green-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-fade-in-up">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>¡Correo enviado con éxito!</span>
                  </div>
                  <style>{`
                    @keyframes fade-in-up {
                      0% { opacity: 0; transform: translateY(30px) scale(0.95); }
                      100% { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    .animate-fade-in-up {
                      animation: fade-in-up 0.7s cubic-bezier(.39,.575,.565,1) both;
                    }
                  `}</style>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Numbers />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes textShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          
          @keyframes glowPulse {
            0% { opacity: 0.5; transform: scale(0.97); }
            50% { opacity: 0.8; transform: scale(1.05); }
            100% { opacity: 0.5; transform: scale(0.97); }
          }
        `
      }} />
    </section>
  );
};
