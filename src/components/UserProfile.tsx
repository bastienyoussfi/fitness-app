import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import Avatar from './Avatar';

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
      className="bg-white p-6 rounded shadow-md flex items-center space-x-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Avatar />
      <div>
        <h2 className="text-xl font-semibold text-primary">{user.name}</h2>
        <p className="text-sm text-gray-600">Level: {user.level}</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-primary h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1 text-gray-600">
          {user.xp} / {nextLevelXP} XP
        </p>
        <p className="text-sm text-gray-600">Streak: {user.streak} day(s)</p>
      </div>
    </motion.div>
  );
};

export default UserProfile;
