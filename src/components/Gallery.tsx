import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/6407516/pexels-photo-6407516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Hermoso jardín con plantas ornamentales"
    },
    {
      url: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Área verde con árboles bien cuidados"
    },
    {
      url: "https://images.pexels.com/photos/6044278/pexels-photo-6044278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Jardín residencial con camino decorativo"
    },
    {
      url: "https://images.pexels.com/photos/5490196/pexels-photo-5490196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Jardín vertical con variedad de plantas"
    },
    {
      url: "https://images.pexels.com/photos/4503815/pexels-photo-4503815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Jardín de flores coloridas"
    },
    {
      url: "https://images.pexels.com/photos/5490201/pexels-photo-5490201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Detalle de arreglo de plantas ornamentales"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galería" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galería de Proyectos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros proyectos recientes y cómo hemos transformado espacios para nuestros clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative w-full max-w-4xl mx-auto px-4">
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 transition-colors p-2 rounded-full text-white"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 transition-colors p-2 rounded-full text-white"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <p className="text-white mt-4 text-center">
            {galleryImages[selectedImage].alt}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;