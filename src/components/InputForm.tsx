import React from 'react';
import { FormData } from '../types';
import { Info } from 'lucide-react';

interface InputFormProps {
  onSubmit: (data: FormData) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    distance: 0,
    heightA: 1.8,
    heightB: 1.8,
    clearanceA: 0,
    clearanceB: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Distance (meters)
          <input
            type="number"
            required
            min="0"
            value={formData.distance}
            onChange={(e) => setFormData({ ...formData, distance: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">Observer A</h3>
          <div>
            <label className="block text-sm text-gray-700">
              Height (meters)
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={formData.heightA}
                  onChange={(e) => setFormData({ ...formData, heightA: Number(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Info className="h-4 w-4 text-gray-400" title="Eyeline will be calculated as 10cm below total height" />
                </div> */}
              </div>
            </label>
          </div>
          <label className="block text-sm text-gray-700">
            Ground Clearance (meters)
            <input
              type="number"
              step="0.1"
              value={formData.clearanceA}
              onChange={(e) => setFormData({ ...formData, clearanceA: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Observer B</h3>
          <div>
            <label className="block text-sm text-gray-700">
              Height (meters)
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={formData.heightB}
                  onChange={(e) => setFormData({ ...formData, heightB: Number(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Info className="h-4 w-4 text-gray-400" title="Eyeline will be calculated as 10cm below total height" />
                </div> */}
              </div>
            </label>
          </div>
          <label className="block text-sm text-gray-700">
            Ground Clearance (meters)
            <input
              type="number"
              step="0.1"
              value={formData.clearanceB}
              onChange={(e) => setFormData({ ...formData, clearanceB: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Calculate Visibility
      </button>
    </form>
  );
};