import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    secondary: 'bg-primary text-white hover:bg-primary-light',
    ghost: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
