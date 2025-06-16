"use client";

import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5513997905778";
    const message = "Olá! Gostaria de agendar uma consulta com o Dr. Rodolfo Leite Arantes.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-pulse-slow hover-lift hover-glow"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </button>
  );
} 