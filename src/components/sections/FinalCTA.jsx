import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const FinalCTA = () => {
  return (
    <section className="bg-accent text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
            Sua Fatia <br /> Está Esperando.
          </h2>
          <Button variant="secondary" className="text-2xl px-12 py-6">
            Peça Agora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
