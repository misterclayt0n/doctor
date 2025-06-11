"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import { GoogleCalendarButton } from "@/components/google-calendar-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5513997905778";
    const message = "Olá! Gostaria de agendar uma consulta com o Dr. Rodolfo Leite Arantes.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+551332215375', '_self');
  };

  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Dr. Cardios</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
          <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#tratamentos" className="text-gray-700 hover:text-blue-600 transition-colors">Tratamentos</a>
          <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
        </nav>
        
        <div className="flex items-center space-x-3">
          {isScrolled && (
            <>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white p-3 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </Button>
              <Button
                onClick={handlePhoneClick}
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 p-3 transition-all duration-300"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </>
          )}
          <GoogleCalendarButton />
        </div>
      </div>
    </header>
  );
} 