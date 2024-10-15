import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Achievements: React.FC = () => {
  const { achievements } = useContext(AppContext);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Achievements</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {achievements.map((achv) => (
          <div
            key={achv.id}
            className={`flex flex-col items-center p-4 border rounded ${
              achv.unlocked ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <img src={achv.icon} alt={achv.name} className="w-16 h-16 mb-2" />
            <h3 className="text-md font-medium">{achv.name}</h3>
            {achv.unlocked ? (
              <span className="text-green-600">Unlocked</span>
            ) : (
              <span className="text-gray-500">Locked</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
