import { useState } from "react";
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 transparent-navbar">
      <Container className="flex items-center justify-between py-4 lg:py-2">
        {/* Logo */}
        <div className="flex items-center gap-0">
          <div className="relative group">
            <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img 
                src="/assets/images/solyluna.png" 
                alt="Logo Tarot Sol y Luna" 
                loading="lazy" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="block -ml-6">
            <h1 className="text-xl lg:text-2xl font-bold flex items-center h-full">
              <span className="navbar-title-white">Tarot &nbsp;</span>
              <span className="navbar-title-modern">Sol y Luna</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            <NavItem href="/" text="Inicio" />
            <NavItem href="#testimonios" text="Testimonios" />
            <NavItem href="#consultas" text="Consultas" />
            <NavItem href="#about" text="Sobre Atenea" />
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=34611334653&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta%20de%20tarot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.491"/>
              </svg>
              <span>Consulta Ahora</span>
            </div>
          </a>
          </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
            <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center hover:from-slate-200 hover:to-slate-300 transition-all duration-300"
            >
                <svg
              className={`w-6 h-6 text-slate-700 transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
                  fill="none"
              stroke="currentColor"
                  viewBox="0 0 24 24"
                >
              {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  />
              )}
            </svg>
            </button>
          </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="bg-white/95 backdrop-blur-xl border-t border-purple-200/40">
            <Container className="py-6">
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-slate-700 hover:text-orange-500 font-medium transition-colors duration-300"
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonios"
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-slate-700 hover:text-orange-500 font-medium transition-colors duration-300"
                    >
                      Testimonios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#consultas"
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-slate-700 hover:text-orange-500 font-medium transition-colors duration-300"
                    >
                      Consultas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-slate-700 hover:text-orange-500 font-medium transition-colors duration-300"
                    >
                      Sobre Atenea
                    </a>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-6">
                <a
                  href="https://api.whatsapp.com/send?phone=34611334653&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta%20de%20tarot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.491"/>
                  </svg>
                  <span>Consulta Ahora</span>
                </a>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
};
