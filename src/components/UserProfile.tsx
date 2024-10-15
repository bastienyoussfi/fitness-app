import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { FaUser, FaStar } from 'react-icons/fa';

const UserProfile: React.FC = () => {
  const { user } = useContext(AppContext);

  const getNextLevelXP = (level: number) => {
    const thresholds = [100, 250, 500, 1000];
    return thresholds[level - 1] || 1500;
  };

  const nextLevelXP = getNextLevelXP(user.level);
  const progress = Math.min((user.xp / nextLevelXP) * 100, 100);

  return (
    <motion.div
      className="bg-surface p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-4xl">
        <FaUser />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-primary">{user.name}</h2>
        <p className="text-sm text-onSurface">Level: {user.level}</p>
      </div>
      <div className="w-full">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-primary h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-onSurface mt-1">
          {user.xp} / {nextLevelXP} XP
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <FaStar className="text-accent" />
        <span className="text-sm text-onSurface">Streak: {user.streak} day(s)</span>
      </div>
    </motion.div>
  );
};

export default UserProfile;