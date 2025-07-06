import { useEffect, useRef } from "react";

// Definir la interfaz para las partículas celestiales
interface CelestialParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  glowIntensity: number;
  type: 'star' | 'dust' | 'energy';
  phase: number;
}

const SmokeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Referencias principales
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Configuración celestial
    let particlesArray: CelestialParticle[] = [];
    const solColors = [
      "rgba(251, 146, 60, 0.6)",    // Sol dorado
      "rgba(245, 158, 11, 0.5)",    // Oro brillante
      "rgba(255, 193, 7, 0.4)",     // Amarillo solar
    ];
    const lunaColors = [
      "rgba(148, 163, 184, 0.5)",   // Plata lunar
      "rgba(203, 213, 225, 0.4)",   // Plata clara
      "rgba(226, 232, 240, 0.6)",   // Blanco lunar
    ];
    const cosmicColors = [
      "rgba(99, 102, 241, 0.4)",    // Púrpura cósmico
      "rgba(59, 130, 246, 0.3)",    // Azul celestial
      "rgba(236, 72, 153, 0.3)",    // Rosa místico
    ];
    
    let animationFrameId: number;
    let time = 0;
    
    // Configurar canvas
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Funciones para partículas celestiales
    const createCelestialParticle = (): CelestialParticle => {
      const types: ('star' | 'dust' | 'energy')[] = ['star', 'dust', 'energy'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      let colors: string[];
      let size: number;
      
      switch (type) {
        case 'star':
          colors = [...solColors, ...lunaColors];
          size = Math.random() * 3 + 2;
          break;
        case 'dust':
          colors = cosmicColors;
          size = Math.random() * 2 + 1;
          break;
        case 'energy':
          colors = Math.random() > 0.5 ? solColors : lunaColors;
          size = Math.random() * 4 + 3;
          break;
      }
      
      return {
        x: Math.random() * (canvas?.width || 0),
        y: Math.random() * (canvas?.height || 0),
        size,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.2 + Math.random() * 0.4,
        pulseSpeed: 0.015 + Math.random() * 0.025,
        glowIntensity: 0.3 + Math.random() * 0.7,
        type,
        phase: Math.random() * Math.PI * 2
      };
    };
    
    const updateCelestialParticle = (particle: CelestialParticle) => {
      // Movimiento orbital suave
      particle.x += particle.speedX + Math.sin(time * 0.0005 + particle.phase) * 0.15;
      particle.y += particle.speedY + Math.cos(time * 0.0005 + particle.phase) * 0.1;
      
      // Efecto de pulsación celestial
      particle.opacity = 0.2 + Math.sin(time * particle.pulseSpeed + particle.phase) * 0.3;
      
      // Rotación para partículas de energía
      if (particle.type === 'energy') {
        particle.phase += 0.01;
      }
      
      const width = canvas?.width || 0;
      const height = canvas?.height || 0;
      
      // Envolver partículas en los bordes
      if (particle.x < -particle.size) particle.x = width + particle.size;
      if (particle.x > width + particle.size) particle.x = -particle.size;
      if (particle.y < -particle.size) particle.y = height + particle.size;
      if (particle.y > height + particle.size) particle.y = -particle.size;
    };
    
    const drawCelestialParticle = (particle: CelestialParticle) => {
      if (!ctx) return;
      
      ctx.save();
      
      switch (particle.type) {
        case 'star':
          drawStar(particle);
          break;
        case 'dust':
          drawDust(particle);
          break;
        case 'energy':
          drawEnergy(particle);
          break;
      }
      
      ctx.restore();
    };
    
    const drawStar = (particle: CelestialParticle) => {
      if (!ctx) return;
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      
      const baseColor = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`);
      const glowColor = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity * 0.2})`);
      
      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(0.5, glowColor);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      // Dibujar estrella
      ctx.fillStyle = gradient;
      ctx.beginPath();
    
      const spikes = 5;
      const outerRadius = particle.size;
      const innerRadius = particle.size * 0.4;
      
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = particle.x + Math.cos(angle) * radius;
        const y = particle.y + Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.closePath();
      ctx.fill();
    };
    
    const drawDust = (particle: CelestialParticle) => {
      if (!ctx) return;
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      
      const baseColor = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`);
      const fadeColor = particle.color.replace(/[\d.]+\)$/g, `0)`);
      
      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(1, fadeColor);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };
    
    const drawEnergy = (particle: CelestialParticle) => {
      if (!ctx) return;
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2.5
      );
      
      const baseColor = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity * 0.8})`);
      const midColor = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity * 0.4})`);
      const fadeColor = particle.color.replace(/[\d.]+\)$/g, `0)`);
      
      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(0.3, midColor);
      gradient.addColorStop(1, fadeColor);
      
      // Dibujar orbe de energía
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Añadir brillo central
      const centerGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 0.5
      );
      
      centerGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.6})`);
      centerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Función para crear conexiones celestiales
    const drawCelestialConnections = () => {
      if (!ctx) return;
      
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && particlesArray[i].type !== 'dust' && particlesArray[j].type !== 'dust') {
            const opacity = (150 - distance) / 150 * 0.1;
            
            const gradient = ctx.createLinearGradient(
              particlesArray[i].x, particlesArray[i].y,
              particlesArray[j].x, particlesArray[j].y
            );
            
            gradient.addColorStop(0, `rgba(251, 146, 60, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(148, 163, 184, ${opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(99, 102, 241, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Inicializar partículas
    const initParticles = () => {
      particlesArray = [];
      const particleCount = Math.min(50, Math.floor((canvas?.width || 0) * (canvas?.height || 0) / 20000));
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(createCelestialParticle());
      }
    };
    
    // Función de animación
    const animate = () => {
      if (!ctx || !canvas) return;
      
      time += 1;
      
      // Limpiar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Actualizar y dibujar partículas
      for (let i = 0; i < particlesArray.length; i++) {
        updateCelestialParticle(particlesArray[i]);
        drawCelestialParticle(particlesArray[i]);
      }
      
      // Dibujar conexiones celestiales
      drawCelestialConnections();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Iniciar todo
    initParticles();
    animate();
    
    // Agregar partículas con interacción del mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.05) { // 5% de probabilidad
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Crear partícula especial cerca del mouse
        const specialParticle: CelestialParticle = {
          x: mouseX + (Math.random() - 0.5) * 50,
          y: mouseY + (Math.random() - 0.5) * 50,
          size: Math.random() * 3 + 2,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: [...solColors, ...lunaColors][Math.floor(Math.random() * 6)],
          opacity: 0.7,
          pulseSpeed: 0.03,
          glowIntensity: 1,
          type: Math.random() > 0.5 ? 'star' : 'energy',
          phase: Math.random() * Math.PI * 2
        };
        
        particlesArray.push(specialParticle);
        
        // Eliminar partículas extras
        if (particlesArray.length > 70) {
          particlesArray.shift();
        }
      }
    };
    
    canvas.addEventListener("mousemove", handleMouseMove);
    
    // Limpieza
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
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
        pointerEvents: "none",
      }}
    />
  );
};

export default SmokeBackground;