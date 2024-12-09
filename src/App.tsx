import React, { useState, useEffect } from 'react';
import { InputForm } from './components/InputForm';
import { ResultCard } from './components/ResultCard';
import { ExplainerModal } from './components/ExplainerModal';
import { InspirationModal } from './components/InspirationModal';
import { calculateVisibility } from './utils/calculations';
import { FormData, VisibilityResult } from './types';
import { Globe2, Lightbulb } from 'lucide-react';

function App() {
  const [showExplainer, setShowExplainer] = useState(true);
  const [showInspiration, setShowInspiration] = useState(false);
  const [result, setResult] = useState<VisibilityResult | null>(null);

  useEffect(() => {
    const hasSeenExplainer = localStorage.getItem('hasSeenExplainer');
    if (hasSeenExplainer) {
      setShowExplainer(false);
    }
  }, []);

  const handleFormSubmit = (data: FormData) => {
    const result = calculateVisibility(
      data.distance,
      data.heightA,
      data.heightB,
      data.clearanceA,
      data.clearanceB
    );
    setResult(result);
  };

  const handleCloseExplainer = () => {
    setShowExplainer(false);
    localStorage.setItem('hasSeenExplainer', 'true');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ExplainerModal isOpen={showExplainer} onClose={handleCloseExplainer} />
      <InspirationModal isOpen={showInspiration} onClose={() => setShowInspiration(false)} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Globe2 className="w-12 h-12 text-blue-600" />
          </div>
          <div className="relative">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Earth Curvature Visibility Calculator
            </h1>
            <button
              onClick={() => setShowInspiration(true)}
              className="absolute -right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500 transition-colors"
              title="Learn about the inspiration behind this calculator"
            >
              <Lightbulb className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600">
            Calculate if two observers can see each other across the horizon
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <InputForm onSubmit={handleFormSubmit} />
        </div>

        {result && (
          <div className="mt-8">
            <ResultCard result={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;