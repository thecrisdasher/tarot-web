import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { useState, useEffect } from "react";

export const CTA = () => {
  return (
    <section className="py-24 relative">
      <Container>
        <div className="relative z-10 text-center max-w-2xl mx-auto p-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            <span
              className="text-transparent bg-clip-text relative inline-block"
              style={{
                background: 'linear-gradient(to right,rgb(230, 254, 10),rgb(227, 21, 21))',
                WebkitBackgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'textShimmer 2s infinite alternate',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(236, 72, 153, 0.3)'
              }}
            >
              Maestra Atenea
            </span>{" "}
            cambia tu destino hoy
          </h1>
          <Paragraph className="mb-10 text-lg !text-white">
            La Maestra Atenea te guía con sabiduría ancestral para resolver problemas de amor, prosperidad y protección. ¡Transforma tu vida hoy mismo con una consulta confidencial y resultados garantizados!
          </Paragraph>
          <div className="mx-auto max-w-md">
            <a 
              href="https://api.whatsapp.com/send?phone=34611334653&text=Hola%20Maestra%20Atenea%2C%20quiero%20una%20consulta%20espiritual" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-900 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
        {/* Efecto de gradiente animado para el texto */}
        <style>{`
          @keyframes textShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
      </Container>
    </section>
  );
};

// Nueva sección: Formulario de contacto minimalista
export const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (enviado) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [enviado]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const response = await fetch("https://formspree.io/f/xpwrgqey", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (response.ok) {
        setEnviado(true);
        setForm({ nombre: '', email: '', telefono: '', mensaje: '' });
      } else {
        console.error(await response.text());
        alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente más tarde.");
      }
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Contacto directo</h2>
          <p className="mb-10 text-gray-300">¿Prefieres que te contactemos? Déjanos tus datos y la Maestra Atenea se comunicará contigo personalmente.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
            />
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje o consulta aquí..."
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-3 rounded-xl border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition resize-none"
            />
            <button
              type="submit"
              disabled={enviando || enviado}
              className={`mt-4 px-8 py-3 rounded-xl font-bold text-lg shadow-lg transition-transform duration-300
                ${enviado
                  ? 'bg-gradient-to-r from-purple-900 to-indigo-900 text-white cursor-default'
                  : 'bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-800 text-white hover:scale-105'}
              `}
            >
              {enviado ? "¡Enviado con éxito!" : enviando ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
        {/* Toast de éxito */}
        {showToast && (
          <div className="fixed left-1/2 bottom-10 transform -translate-x-1/2 z-50">
            <div className="bg-black/90 border border-green-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-fade-in-up">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>¡Mensaje enviado con éxito! Pronto recibirás respuesta de la Maestra Atenea.</span>
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
      </Container>
    </section>
  );
};
