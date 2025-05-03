import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission (would be replaced with actual API call)
    setFormStatus({ submitted: true, success: true, message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto." });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu espacio verde? Ponte en contacto con nosotros para una consulta personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 text-green-700 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Teléfono</h4>
                  <a 
                    href="tel:+51962225397" 
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    +51 962 225 397
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 text-green-700 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a 
                    href="mailto:contacto@jpjardines.com" 
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    alejandrolr1508999@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 text-green-700 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Ubicación</h4>
                  <p className="text-gray-600">
                    Lima, Perú<br />
                    Atendemos en toda la ciudad
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-gray-800 mb-4">Horario de Atención</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600">Lunes - Viernes:</div>
                <div className="text-gray-600">8:00 AM - 6:00 PM</div>
                <div className="text-gray-600">Sábados:</div>
                <div className="text-gray-600">9:00 AM - 3:00 PM</div>
                <div className="text-gray-600">Domingos:</div>
                <div className="text-gray-600">Cerrado</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h3>
            
            {formStatus.submitted && formStatus.success ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;