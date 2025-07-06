export const pricingPlans = [
  {
    title: "Basic",
    price: "$19/mo",
    features: [
      "Access to basic AI tools",
      "Limited data analytics",
      "Email support",
    ],
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: [
      "Everything in Basic",
      "Advanced AI features",
      "Real‑time analytics",
      "Priority email support",
    ],
    bestValue: true,
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 premium support",
    ],
  },
];

export const magicPlans = [
  {
    id: 1,
    title: "Consulta Básica",
    price: 35,
    currency: "USD",
    description: "Lectura de 3 cartas para preguntas específicas sobre amor, trabajo o situaciones personales.",
    features: [
      "Lectura de 3 cartas del tarot",
      "Interpretación detallada",
      "Duración: 30 minutos",
      "Consulta vía WhatsApp",
      "Seguimiento de 7 días"
    ],
    whatsappLink: "https://api.whatsapp.com/send?phone=19145206230&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta%20básica%20de%20tarot",
    icon: "book"
  },
  {
    id: 2,
    title: "Consulta Completa",
    price: 65,
    currency: "USD",
    description: "Lectura completa del Sol y la Luna con análisis profundo de tu situación actual y futuro.",
    features: [
      "Lectura completa de 10 cartas",
      "Análisis del pasado, presente y futuro",
      "Duración: 60 minutos",
      "Consulta vía videollamada",
      "Grabación de la sesión",
      "Seguimiento de 15 días",
      "Ritual de protección incluido"
    ],
    whatsappLink: "https://api.whatsapp.com/send?phone=19145206230&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta%20completa%20de%20tarot",
    bestValue: true,
    icon: "sun"
  },
  {
    id: 3,
    title: "Consulta Premium",
    price: 120,
    currency: "USD",
    description: "Experiencia completa con lectura personalizada, ritual de manifestación y guía espiritual.",
    features: [
      "Lectura personalizada de 15 cartas",
      "Análisis detallado de chakras",
      "Duración: 90 minutos",
      "Consulta vía videollamada privada",
      "Ritual de manifestación personalizado",
      "Guía espiritual por 30 días",
      "Informe escrito detallado",
      "Acceso a meditaciones exclusivas"
    ],
    whatsappLink: "https://api.whatsapp.com/send?phone=19145206230&text=Hola%20Maestra%20Atenea%2C%20me%20interesa%20una%20consulta%20premium%20de%20tarot",
    icon: "star"
  }
];
