"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";

export function OfficeGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before using portals
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageClick = (imageNumber: number) => {
    setSelectedImage(imageNumber);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      setSelectedImage(selectedImage === 7 ? 1 : selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      setSelectedImage(selectedImage === 1 ? 7 : selectedImage - 1);
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Modal content component
  const ModalContent = () => (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-black">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={`/office${selectedImage}.jpeg`}
          alt="Background"
          fill
          className="object-cover blur-2xl opacity-10 select-none pointer-events-none"
        />
      </div>

      {/* Close */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-transform duration-300 hover:scale-110"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-transform duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-transform duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Image
          src={`/office${selectedImage}.jpeg`}
          alt="Consultório Dr. Rodolfo Leite Arantes"
          fill
          className="object-contain"
          priority
          sizes="100vw"
        />
      </div>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-20 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
        {selectedImage} / 7
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/70 rounded-full px-4 py-2">
        {[1,2,3,4,5,6,7].map(num => (
          <button
            key={num}
            onClick={() => setSelectedImage(num)}
            className={`w-2 h-2 rounded-full transition-transform ${selectedImage===num? 'bg-white scale-150': 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
        ESC para fechar • ← → para navegar
      </div>
    </div>
  );

  return (
    <>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
          {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
            <div 
              key={num} 
              className="flex-shrink-0 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(num)}
              >
                <Image
                  src={`/office${num}.jpeg`}
                  alt={`Consultório Dr. Rodolfo Leite Arantes - Ambiente ${num}`}
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover w-80 h-60 md:w-96 md:h-72 hover-glow transition-all duration-300 group-hover:scale-105"
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Indicador de clique */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Portal Modal - only render after mount and when image is selected */}
      {isMounted && selectedImage && typeof document !== 'undefined' && createPortal(
        <ModalContent />,
        document.body
      )}
    </>
  );
} 