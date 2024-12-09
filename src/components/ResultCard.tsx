import React from 'react';
import { VisibilityResult } from '../types';
import { Eye, EyeOff } from 'lucide-react';

interface ResultCardProps {
  result: VisibilityResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-center space-x-4">
        {result.canSeeEachOther ? (
          <>
            <Eye className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-bold text-green-500">Yes, they can see each other!</h2>
          </>
        ) : (
          <>
            <EyeOff className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-red-500">No, they cannot see each other</h2>
          </>
        )}
      </div>

      <div className="space-y-2 text-gray-600">
        <p>Distance between observers: {result.distance.toFixed(2)}m</p>
        <p>Observer A total height: {result.heightA.toFixed(2)}m (including eyeline adjustment)</p>
        <p>Observer B total height: {result.heightB.toFixed(2)}m (including eyeline adjustment)</p>
        <p>Curvature dip: {result.curvatureDip.toFixed(2)}m</p>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="font-semibold mb-2">Visibility Details:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">From Observer A's perspective:</h4>
              <p>Can see {result.visibleHeightFromA.toFixed(2)}m of Observer B</p>
              <p>({result.percentVisibleFromA.toFixed(1)}% visible)</p>
            </div>
            <div>
              <h4 className="font-medium">From Observer B's perspective:</h4>
              <p>Can see {result.visibleHeightFromB.toFixed(2)}m of Observer A</p>
              <p>({result.percentVisibleFromB.toFixed(1)}% visible)</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="font-semibold mb-2">Maximum Visible Ranges:</h3>
          <p>Observer A can see up to: {result.visibleRangeA.toFixed(2)}m</p>
          <p>Observer B can see up to: {result.visibleRangeB.toFixed(2)}m</p>
        </div>
      </div>
    </div>
  );
};