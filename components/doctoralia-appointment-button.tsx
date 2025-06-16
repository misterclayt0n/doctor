"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function DoctoraliaAppointmentButton() {
  const handleDoctoraliaAppointment = () => {
    // URL direta para a página de agendamento do Doctoralia
    const doctoraliaUrl = 'https://www.doctoralia.com.br/rodolfo-leite-arantes/cardiologista/santos';
    window.open(doctoraliaUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleDoctoraliaAppointment}
      className="bg-blue-600 hover:bg-blue-700 text-white hover-lift hover-glow transition-all duration-300"
      size="lg"
    >
      <Calendar className="mr-2 h-5 w-5" />
      Agendar Consulta
    </Button>
  );
} 