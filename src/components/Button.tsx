import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const variantClasses = {
  primary: 'bg-primary text-onPrimary hover:bg-blue-700',
  secondary: 'bg-secondary text-onSecondary hover:bg-purple-700',
  danger: 'bg-error text-onError hover:bg-red-700',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${variantClasses[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
