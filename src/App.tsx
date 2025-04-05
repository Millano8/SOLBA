import React from 'react';
import { Mail, Phone } from 'lucide-react';
import WhatsAppIcon from './components/whatsappIcon';

function App() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <div className="min-h-[70vh] bg-[#fdfbe8] relative flex items-center py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <img src="/logo.png" alt="SOLBA Logo" className="w-20 sm:w-24" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3a36c9]">
                SOLBA
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#3a36c9] max-w-3xl">
              Impulsamos tu empresa hacia el éxito ofreciéndole soluciones integrales de importación, exportación y logística diseñadas para optimizar su cadena de suministro y maximizar sus ganancias.
            </p>
          </div>
        </div>
      </div>

      {/* Quienes Somos Section */}
      <section className="py-12 sm:py-16 bg-[#3a36c9]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">¿Quiénes Somos?</h2>
            <p className="text-base sm:text-lg text-white mb-6 px-4">
              Somos una empresa apasionada por conectar a personas y comercios de distintos rubros con productos increíbles de todo el mundo. Nuestra misión es simple: hacer que la importación sea accesible, transparente y confiable para todos.
            </p>
            <p className="text-base sm:text-lg text-white px-4">
              Con años de experiencia en comercio internacional, nos especializamos en traer productos de calidad directamente desde China hasta tu puerta, garantizando los mejores precios y un servicio personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Mercado Objetivo Section */}
      <section className="py-12 sm:py-16 bg-[#fdfbe8]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#fe5200]">Mercado Objetivo</h2>
              <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <li>Comerciantes de artículos producidos en el exterior.</li>
                <li>Comerciantes en el exterior de artículos o materias primas producidas en el país.</li>
                <li>Clientes que ya cuentan con productos de interés a los que se les ofrece mejorar, cambiar, adquirir a menor costo o expandir su mercado.</li>
                <li>Desde PyMEs hasta grandes corporaciones, emprendedores y personas que buscan importar o exportar productos específicos.</li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#fe5200]">Propuesta</h3>
              <p className="mb-4 text-gray-700 text-sm sm:text-base">El objetivo de SOLBA es llevar el producto del cliente a un nuevo nivel, ofreciendo soluciones integrales de importación, exportación y logística.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Reducción de costos y homogeneización de la oferta.</li>
                <li>Experiencia en el mercado interno en diversos rubros comerciales.</li>
                <li>Búsqueda del proveedor ideal y gestión de toda la logística.</li>
                <li>Cartera de productos preferenciales comercializados directamente.</li>
                <li>Servicio de retail.</li>
                <li>Acompañamiento integral en el proceso.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a36c9] mb-6 sm:mb-8 text-center">Metodología para cada Proyecto</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">Análisis y Planificación</h4>
              <p className="text-gray-700 text-sm sm:text-base">Análisis de necesidades, estudio del mercado y planificación estratégica.</p>
            </div>
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">Gestión y Operaciones</h4>
              <p className="text-gray-700 text-sm sm:text-base">Búsqueda de proveedores, gestión documental y coordinación del transporte.</p>
            </div>
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">Distribución y Entrega</h4>
              <p className="text-gray-700 text-sm sm:text-base">Entrega en destino final y gestión de logística inversa si es necesaria.</p>
            </div>
            <div className="bg-[#fdfbe8] p-5 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-bold mb-2 text-[#fe5200] text-base sm:text-lg">Seguimiento y Post-venta</h4>
              <p className="text-gray-700 text-sm sm:text-base">Seguimiento del cliente, evaluación del servicio y gestión de incidencias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 sm:py-8 bg-[#fdfbe8] relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <img src="/isotipo.png" alt="SOLBA Isotipo" className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <a
              href="mailto:admin@gruposolba.com.ar"
              className="flex items-center text-[#3a36c9] hover:text-[#fe5200] transition-colors"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span className="text-sm sm:text-base">admin@gruposolba.com</span>
            </a>
          </div>
        </div>
      </section>
      <WhatsAppIcon />
    </div>
  );
}

export default App;