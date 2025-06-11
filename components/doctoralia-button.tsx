"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function DoctoraliaButton() {
  const handleClick = () => {
    window.open('https://www.doctoralia.com.br/rodolfo-leite-arantes/cardiologista/santos', '_blank');
  };

  return (
    <Button 
      variant="outline" 
      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
      onClick={handleClick}
    >
      <ExternalLink className="mr-2 h-4 w-4" />
      Ver no Doctoralia
    </Button>
  );
} 