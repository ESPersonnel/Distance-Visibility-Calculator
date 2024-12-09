import React from 'react';
import { X } from 'lucide-react';

interface ExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExplainerModal: React.FC<ExplainerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">How This Calculator Works</h2>
        <div className="space-y-4">
          <p>
            This calculator helps you determine if two people can see each other across a distance,
            taking into account the Earth's curvature.
          </p>
          <h3 className="font-semibold text-lg">How to use:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Enter the distance between the two observers</li>
            <li>Optionally, adjust the height of each observer (defaults to 1.8m)</li>
            <li>If applicable, add any elevation above ground level</li>
            <li>Click calculate to see if the observers can see each other</li>
          </ol>
          <p className="text-sm text-gray-600">
            The calculation considers the Earth's radius (6,371km) and uses geometry to determine
            if the line of sight between observers is blocked by the Earth's curve.
          </p>
        </div>
      </div>
    </div>
  );
};