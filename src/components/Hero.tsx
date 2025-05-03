import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/589/garden-green-trees-park.jpg?auto=compress&cs=tinysrgb&w=1600')" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          JP Jardines
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Transformamos espacios verdes con pasión y profesionalismo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contacto" 
            className="px-8 py-3 bg-green-700 text-white rounded-full font-medium hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Contáctanos
          </a>
          <a 
            href="#servicios" 
            className="px-8 py-3 bg-white text-green-700 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToServices}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;