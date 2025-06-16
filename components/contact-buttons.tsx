"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp-icon";

interface ContactButtonsProps {
  variant?: "default" | "compact" | "hero" | "white";
  showLabels?: boolean;
}

export function ContactButtons({ variant = "default", showLabels = true }: ContactButtonsProps) {
  const whatsappNumber = "5513997905778";
  const phoneNumber = "551332215375";
  const doctorName = "Dr. Rodolfo Leite Arantes";
  
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de agendar uma consulta com o ${doctorName}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  if (variant === "compact") {
    return (
      <div className="flex space-x-2">
        <Button
          onClick={handleWhatsAppClick}
          size="sm"
          className="bg-green-500 hover:bg-green-600 text-white"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </Button>
        <Button
          onClick={handlePhoneClick}
          size="sm"
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
          aria-label="Telefone"
        >
          <Phone className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={handleWhatsAppClick}
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
        >
          <WhatsAppIcon className="mr-2 h-5 w-5" />
          {showLabels && "WhatsApp Direto"}
        </Button>
        <Button 
          onClick={handlePhoneClick}
          size="lg" 
          variant="outline" 
          className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
        >
          <Phone className="mr-2 h-5 w-5" />
          {showLabels && "Ligar Agora"}
        </Button>
      </div>
    );
  }

  if (variant === "white") {
    return (
      <div className="space-y-3">
        <Button 
          onClick={handleWhatsAppClick}
          size="lg" 
          className="w-full bg-green-500 hover:bg-green-600 text-white"
        >
          <WhatsAppIcon className="mr-2 h-5 w-5" />
          {showLabels && "WhatsApp Direto"}
        </Button>
        <Button 
          onClick={handlePhoneClick}
          size="lg" 
          variant="outline"
          className="w-full border-white text-white hover:bg-white/10"
        >
          <Phone className="mr-2 h-5 w-5" />
          {showLabels && "Ligar Agora"}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Button 
        onClick={handleWhatsAppClick}
        size="lg" 
        className="w-full bg-green-500 hover:bg-green-600 text-white"
      >
        <WhatsAppIcon className="mr-2 h-5 w-5" />
        {showLabels && "WhatsApp Direto"}
      </Button>
      <Button 
        onClick={handlePhoneClick}
        size="lg" 
        variant="outline"
        className="w-full border-[#31c3fe] text-[#31c3fe] hover:bg-blue-50"
      >
        <Phone className="mr-2 h-5 w-5" />
        {showLabels && "Ligar Agora"}
      </Button>
    </div>
  );
} 