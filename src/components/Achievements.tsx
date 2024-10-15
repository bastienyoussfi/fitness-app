import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy, FaStar } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const { achievements } = useContext(AppContext);

  const getIcon = (name: string) => {
    switch (name) {
      case 'First Workout':
        return <FaMedal className="text-accent" />;
      case 'Consistency':
        return <FaStar className="text-accent" />;
      case 'Marathon':
        return <FaTrophy className="text-accent" />;
      default:
        return <FaStar className="text-accent" />;
    }
  };

  return (
    <motion.div
      className="bg-surface p-6 rounded-lg shadow-md mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold text-primary mb-4">Achievements</h2>
      {achievements.length === 0 ? (
        <p className="text-onSurface">No achievements unlocked yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {achievements.map((achv) => (
            <motion.div
              key={achv.id}
              className={`flex flex-col items-center p-4 rounded-md shadow ${
                achv.unlocked ? 'bg-green-100' : 'bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getIcon(achv.name)}
              <h3 className="mt-2 text-md font-medium text-onSurface">{achv.name}</h3>
              <p className="text-sm text-onSurface">{achv.description}</p>
              {achv.unlocked ? (
                <span className="mt-2 text-green-600">Unlocked</span>
              ) : (
                <span className="mt-2 text-gray-500">Locked</span>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Achievements;