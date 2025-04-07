import React, { useEffect, useState } from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import WhatsAppIcon from './components/whatsappIcon';
import LanguageSelector from './components/LanguageSelector';
import { translations } from './translations';

function App() {
  const [currentLang, setCurrentLang] = useState('es');
  const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="font-inter">
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <div className="min-h-[70vh] bg-[#fdfbe8] relative flex items-center py-8 sm:py-12 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <img src="/logo.png" alt="SOLBA Logo" className="w-20 sm:w-24" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3a36c9]">
                {t.hero.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#3a36c9] max-w-3xl">
              {t.hero.description}
            </p>
          </div>
        </div>
      </div>

      {/* Quienes Somos Section */}
      <section className="py-12 sm:py-16 bg-[#3a36c9] animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t.about.title}</h2>
            <p className="text-base sm:text-lg text-white mb-6 px-4">
              {t.about.description1}
            </p>
            <p className="text-base sm:text-lg text-white mb-6 px-4">
              {t.about.description2}
            </p>
            <p className="text-base sm:text-lg text-white px-4">
              {t.about.description3}
            </p>
          </div>
        </div>
      </section>

      {/* Mercado Objetivo Section */}
      <section className="py-12 sm:py-16 bg-[#fdfbe8] animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#fe5200]">{t.market.title}</h2>
              <p className="mb-4 text-gray-700 text-sm sm:text-base">
                {t.market.description}
              </p>
              <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                {t.market.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#fe5200]">{t.value.title}</h3>
              <p className="mb-4 text-gray-700 text-sm sm:text-base">
                {t.value.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                {t.value.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="py-12 sm:py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a36c9] mb-6 sm:mb-8 text-center">{t.methodology.title}</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            {t.methodology.description}
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">{t.methodology.steps.analysis.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{t.methodology.steps.analysis.description}</p>
            </div>
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">{t.methodology.steps.operations.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{t.methodology.steps.operations.description}</p>
            </div>
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">{t.methodology.steps.distribution.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{t.methodology.steps.distribution.description}</p>
            </div>
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">{t.methodology.steps.followup.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{t.methodology.steps.followup.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 sm:py-8 bg-[#fdfbe8] relative animate-on-scroll">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <img src="/isotipo.png" alt="SOLBA Isotipo" className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href={`mailto:${t.footer.email}`}
              className="flex items-center text-[#3a36c9] hover:text-[#fe5200] transition-colors"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span className="text-sm sm:text-base">{t.footer.email}</span>
            </a>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/gruposolba?igsh=bjRwenYzeHVpMjMy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#3a36c9] hover:text-[#fe5200] transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm sm:text-base">{t.footer.social.instagram}</span>
              </a>
              <a
                href="https://www.linkedin.com/company/solba-s-a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#3a36c9] hover:text-[#fe5200] transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm sm:text-base">{t.footer.social.linkedin}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppIcon />
    </div>
  );
}

export default App;