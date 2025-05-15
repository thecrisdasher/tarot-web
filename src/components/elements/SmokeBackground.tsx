import { useEffect, useRef } from "react";

// Definir la interfaz para las partículas
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const SmokeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Referencias principales
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Configuración
    let particlesArray: Particle[] = [];
    const colors = ["rgba(255,255,255,0.03)", "rgba(200,200,200,0.02)"];
    let animationFrameId: number;
    
    // Configurar canvas
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Funciones para partículas
    const createParticle = (): Particle => {
      return {
        x: Math.random() * (canvas?.width || 0),
        y: Math.random() * (canvas?.height || 0),
        size: Math.random() * 30 + 20,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };
    
    const updateParticle = (particle: Particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      const width = canvas?.width || 0;
      const height = canvas?.height || 0;
      
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
    };
    
    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Inicializar partículas
    const initParticles = () => {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        particlesArray.push(createParticle());
      }
    };
    
    // Función de animación
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        updateParticle(particlesArray[i]);
        drawParticle(particlesArray[i]);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Iniciar todo
    initParticles();
    animate();
    
    // Limpieza
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default SmokeBackground;