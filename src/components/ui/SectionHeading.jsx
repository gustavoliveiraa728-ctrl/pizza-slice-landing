import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const SectionHeading = ({
  children,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-bold uppercase tracking-widest text-sm block mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black leading-none"
      >
        {children}
      </motion.h2>
    </div>
  );
};
