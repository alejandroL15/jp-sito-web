import React from 'react';
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  phoneNumber: string;
};

const WhatsAppButton = ({ phoneNumber }: WhatsAppButtonProps) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      
      <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Contáctanos por WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;