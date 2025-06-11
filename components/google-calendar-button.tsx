"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function GoogleCalendarButton() {
  const handleGoogleCalendar = () => {
    // Configuração do evento do Google Calendar
    const eventDetails = {
      text: "Consulta com Dr. Rodolfo Leite Arantes - Cardiologista",
      dates: "", // Será preenchido pelo usuário
      details: "Consulta cardiológica com Dr. Rodolfo Leite Arantes\n\nEspecialista em:\n- Cardiologia Clínica\n- Hipertensão Arterial\n- Tratamentos Personalizados\n\nLocalização: Av. Conselheiro Nébias, 756 - conj. 2007 em Santos/SP",
      location: "Av. Conselheiro Nébias, 756 - conj. 2007, Santos/SP",
      ctz: "America/Sao_Paulo"
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&ctz=${eventDetails.ctz}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleGoogleCalendar}
      className="bg-blue-600 hover:bg-blue-700 text-white"
      size="lg"
    >
      <Calendar className="mr-2 h-5 w-5" />
      Agendar no Google Calendar
    </Button>
  );
} 