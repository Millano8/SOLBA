import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppIcon: React.FC = () => {
  const defaultMessage = "Hola Ernesto, me gustaría obtener más información sobre los servicios de SOLBA.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  
  return (
    <a
      href={`https://wa.me/3388502347?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppIcon; 