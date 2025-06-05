import { Container } from "../shared/Container";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";
import logo from "/assets/icon.png";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-20 h-15" alt="Maestro Alaric Logo" />
            <div className="inline-flex text-lg font-semibold text-heading-1 ml-2">
              Maestro
              <span
                className="ml-2 text-transparent bg-clip-text relative inline-block"
                style={{
                  background: 'linear-gradient(to right,rgb(36, 8, 198),rgb(255, 0, 0))',
                  WebkitBackgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'textShimmer 2s infinite alternate',
                  textShadow: '0 0 20px rgba(230,254,10,0.3), 0 0 30px rgba(227,21,21,0.2)'
                }}
              >
                Alaric
              </span>
            </div>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
        
        {/* Texto de copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500/50 font-light">
            Desarrollado por{" "}
            <a 
              href="https://portafolio-cris-sepia.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Mejor Llama A Cris
            </a>{" "}
            © {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>
      </Container>
      <style>{`
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </footer>
  );
};
