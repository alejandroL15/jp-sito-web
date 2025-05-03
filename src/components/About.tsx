import React from 'react';
import { ThumbsUp, Award, Clock, Users } from 'lucide-react';

const About = () => {
  const stats = [
    {
      value: "5+",
      label: "Años de Experiencia",
      icon: <Clock className="h-6 w-6" />
    },
    {
      value: "200+",
      label: "Proyectos Completados",
      icon: <ThumbsUp className="h-6 w-6" />
    },
    {
      value: "50+",
      label: "Clientes Satisfechos",
      icon: <Users className="h-6 w-6" />
    },
    {
      value: "15+",
      label: "Premios y Reconocimientos",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre JP Jardines</h2>
            <p className="text-gray-600 mb-6">
              En JP Jardines, nos apasiona crear y mantener espacios verdes hermosos y sostenibles. Fundada hace más de 5 años, nuestra empresa se ha convertido en sinónimo de excelencia en el sector de la jardinería.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está formado por profesionales con amplia experiencia y conocimiento en diseño de jardines, paisajismo y mantenimiento. Nos enorgullece ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.
            </p>
            <p className="text-gray-600 mb-6">
              Utilizamos técnicas modernas y sostenibles para garantizar que cada proyecto no solo sea visualmente atractivo, sino también respetuoso con el medio ambiente. En JP Jardines, creemos que un espacio verde bien diseñado puede transformar cualquier propiedad.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Equipo de JP Jardines trabajando" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-green-100 rounded-lg -z-10"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-green-200 rounded-lg -z-10"></div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4 text-green-700">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;