import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Propietaria de Casa",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial: "Excelente servicio. Transformaron mi jardín en un espacio hermoso y relajante. El equipo fue profesional y atento a todos los detalles. Recomiendo JP Jardines sin dudarlo.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Gerente de Hotel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial: "Contratamos a JP Jardines para el mantenimiento de las áreas verdes de nuestro hotel y el resultado ha sido extraordinario. Su profesionalismo y dedicación son admirables.",
      rating: 5
    },
    {
      name: "Laura Mendoza",
      role: "Diseñadora de Interiores",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial: "Como diseñadora, valoro mucho el trabajo de calidad. JP Jardines ha superado mis expectativas en cada proyecto que hemos realizado juntos. Su creatividad y atención al detalle son excepcionales.",
      rating: 5
    },
    {
      name: "Roberto Sánchez",
      role: "Propietario de Restaurante",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial: "Gracias a JP Jardines, nuestro restaurante ahora cuenta con un hermoso jardín que nuestros clientes adoran. El diseño y la implementación fueron perfectos.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos enorgullece la satisfacción de nuestros clientes. Aquí hay algunas opiniones sobre nuestro trabajo.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Version */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">"{testimonial.testimonial}"</p>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Version (Carousel) */}
          <div className="md:hidden">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonials[currentIndex].testimonial}"</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5 text-green-700" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight className="h-5 w-5 text-green-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;