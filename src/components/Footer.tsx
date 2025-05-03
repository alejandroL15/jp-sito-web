import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="font-bold text-xl">JP Jardines</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos espacios verdes con pasión y profesionalismo. Ofrecemos servicios de jardinería de alta calidad en Lima, Perú.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Galería', 'Nosotros', 'Testimonios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                'Diseño de Jardines',
                'Mantenimiento',
                'Paisajismo',
                'Instalación de Césped',
                'Sistemas de Riego',
                'Preparación de Terrenos'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#servicios"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="tel:+51962225397" 
                  className="hover:text-white transition-colors"
                >
                  +51 962 225 397
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contacto@jpjardines.com" 
                  className="hover:text-white transition-colors"
                >
                  contacto@jpjardines.com
                </a>
              </li>
              <li>Lima, Perú</li>
              <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
              <li>Sáb: 9:00 AM - 3:00 PM</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} JP Jardines. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;