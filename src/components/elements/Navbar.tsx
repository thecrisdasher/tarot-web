import { Container } from "../shared/Container";
import logo from "/assets/icon.png";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "#hero", text: "Inicio" },
  { href: "#servicios", text: "Servicios" },
  { href: "#testimonios", text: "Testimonios" },
  { href: "#about-us", text: "Sobre mí" }
];

export const Navbar = () => {
  const { theme } = useThemeStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-0 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="EdgeAI Logo" 
                  className="w-20 h-15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(238,254,10,0.5)] relative z-10" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eefe0a] to-[#e31515] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-full"></div>
              </div>
              <div className="inline-flex text-lg font-semibold text-heading-1 ml-2">
                Maestro
                <span
                  className="ml-2 text-transparent bg-clip-text relative inline-block transition-all duration-500 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(to right, #eefe0a, #e31515)',
                    WebkitBackgroundClip: 'text',
                    backgroundSize: '200% auto',
                    animation: 'textShimmer 2s infinite alternate',
                    textShadow: '0 0 20px rgba(230,254,10,0.3), 0 0 30px rgba(227,21,21,0.2)'
                  }}
                >
                  Alaric
                  <div className="absolute inset-0 bg-gradient-to-r from-[#eefe0a] to-[#e31515] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10"></div>
                </span>
                <style>{`
                  @keyframes textShimmer {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                  }
                  
                  @keyframes glowPulse {
                    0% { filter: drop-shadow(0 0 5px rgba(238,254,10,0.3)) drop-shadow(0 0 10px rgba(227,21,21,0.2)); }
                    50% { filter: drop-shadow(0 0 15px rgba(238,254,10,0.5)) drop-shadow(0 0 20px rgba(227,21,21,0.4)); }
                    100% { filter: drop-shadow(0 0 5px rgba(238,254,10,0.3)) drop-shadow(0 0 10px rgba(227,21,21,0.2)); }
                  }
                `}</style>
              </div>
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                      absolute top-full left-0 lg:static lg:top-0 bg-gray-900 lg:bg-transparent 
                      border-x border-gray-700 lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-gray-700 lg:border-t-0 px-6 lg:px-0 
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                           text-lg text-gray-200 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
                            lg:pb-0 border-b border-box-border lg:border-0
                            px-6 lg:px-0"
            >
              <BtnLink text="Get Started" href="#contacto" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" />
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <button
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer hover:bg-gray-800 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
