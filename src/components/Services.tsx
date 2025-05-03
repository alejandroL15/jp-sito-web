import React from 'react';
import { Shovel, Scissors, Leaf, TreePine, Palette, Droplets } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col items-center md:items-start">
        <div className="rounded-full bg-green-100 p-3 mb-4 text-green-700">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Diseño de Jardines",
      description: "Creamos jardines personalizados que reflejan tu estilo y complementan tu espacio exterior.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: "Mantenimiento",
      description: "Servicio regular de cuidado para mantener tu jardín hermoso y saludable durante todo el año.",
      icon: <Scissors className="h-6 w-6" />
    },
    {
      title: "Paisajismo",
      description: "Transformamos espacios exteriores en paisajes armoniosos que combinan estética y funcionalidad.",
      icon: <TreePine className="h-6 w-6" />
    },
    {
      title: "Instalación de Césped",
      description: "Instalación profesional de césped natural o artificial para un jardín verde y atractivo.",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "Sistemas de Riego",
      description: "Instalación de sistemas de riego eficientes para mantener tu jardín hidratado.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Preparación de Terrenos",
      description: "Preparamos el terreno para asegurar las condiciones óptimas para el crecimiento de tus plantas.",
      icon: <Shovel className="h-6 w-6" />
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de jardinería profesional para transformar y mantener tu espacio verde.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;