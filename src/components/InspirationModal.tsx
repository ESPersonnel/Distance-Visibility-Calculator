import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

interface InspirationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inspirationImages = [
  {
    url: `${import.meta.env.BASE_URL}/eddie_sniper.png`,
    caption: 'A sniper looking through a scope connected monitor to a target on water.',
  },
  {
    url: `${import.meta.env.BASE_URL}/long_range_view.png`,
    caption: 'A visual of the scope\'s view on the monitor and the precise distance of the target.',
  },
  {
    url: `${import.meta.env.BASE_URL}/aerial_view.png`,
    caption: 'An aerial shot of the boat in vast emptiness of the ocean.',
  },
];

export const InspirationModal: React.FC<InspirationModalProps> = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % inspirationImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + inspirationImages.length) % inspirationImages.length);
  };

  const currentImage = inspirationImages[currentImageIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg w-[600px] p-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-bold">Inspiration</h2>
          </div>

          <p className="text-sm text-gray-600">
            Inspired by the British TV series "The Day of the Jackal", season 1 episode 9. It depicts the sniper taking a shot from a boat in the middle of the ocean 3500-4500m away from the target. The scene made me curious about the effect of the curvature of the earth on the view of the sniper and the target.
          </p>

          <div className="relative">
            <div className="h-[240px] rounded-lg overflow-hidden">
              <img
                src={currentImage.url}
                alt={currentImage.caption}
                className="w-full h-full object-cover"
              />
            </div>
            
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full hover:bg-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-gray-600 mt-2 text-center">
              {currentImage.caption}
            </p>

            <div className="flex justify-center space-x-1.5 mt-2">
              {inspirationImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};