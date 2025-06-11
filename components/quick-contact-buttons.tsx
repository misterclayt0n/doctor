"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./whatsapp-icon";
import { GoogleCalendarButton } from "./google-calendar-button";

export function QuickWhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5513997905778";
    const message = "Olá! Gostaria de agendar uma consulta com o Dr. Rodolfo Leite Arantes.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      size="lg" 
      className="bg-green-500 hover:bg-green-600 text-white"
    >
      <WhatsAppIcon className="mr-2 h-5 w-5" />
      Agendar via WhatsApp
    </Button>
  );
}

export function ContactLinkButton({ type, children, className = "" }: { 
  type: "whatsapp" | "phone", 
  children: React.ReactNode,
  className?: string 
}) {
  const handleClick = () => {
    if (type === "whatsapp") {
      const whatsappNumber = "5513997905778";
      const message = "Olá! Gostaria de agendar uma consulta com o Dr. Rodolfo Leite Arantes.";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else if (type === "phone") {
      window.open('tel:+551332215375', '_self');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
} 