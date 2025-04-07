import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  onLanguageChange: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  const [currentLang, setCurrentLang] = useState('es');

  const handleLanguageChange = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setCurrentLang(newLang);
    onLanguageChange(newLang);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={handleLanguageChange}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:bg-[#fdfbe8] transition-colors"
      >
        <Globe className="w-5 h-5 text-[#3a36c9]" />
        <span className="text-[#3a36c9] font-medium">{currentLang.toUpperCase()}</span>
      </button>
    </div>
  );
};

export default LanguageSelector; 