"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { DoctoraliaAppointmentButton } from "@/components/doctoralia-appointment-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import Image from "next/image";

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
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/cardio_arantes_logo.jpeg"
            alt="Logo Dr. Rodolfo Leite Arantes"
            width={350}
            height={100}
            className="h-16 w-auto object-contain"
            priority
          />
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-[#31c3fe] transition-colors">Início</a>
          <a href="#sobre" className="text-gray-700 hover:text-[#31c3fe] transition-colors">Sobre</a>
          <a href="#tratamentos" className="text-gray-700 hover:text-[#31c3fe] transition-colors">Tratamentos</a>
          <a href="#contato" className="text-gray-700 hover:text-[#31c3fe] transition-colors">Contato</a>
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
                className="border-[#31c3fe] text-[#31c3fe] hover:bg-blue-50 p-3 transition-all duration-300"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </>
          )}
          <DoctoraliaAppointmentButton />
        </div>
      </div>
    </header>
  );
} 