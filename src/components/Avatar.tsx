// src/components/Avatar.tsx

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Avatar: React.FC = () => {
  const { user } = useContext(AppContext);

  // Determine avatar image based on level
  const getAvatarImage = (level: number) => {
    if (level >= 10) return '/avatars/avatar-level10.png';
    if (level >= 5) return '/avatars/avatar-level5.png';
    return '/avatars/avatar-default.png';
  };

  const avatarSrc = getAvatarImage(user.level);

  return (
    <motion.img
      src={avatarSrc}
      alt="User Avatar"
      className="w-32 h-32 rounded-full mx-auto"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Avatar;
