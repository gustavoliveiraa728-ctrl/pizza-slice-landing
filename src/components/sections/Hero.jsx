import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-20">
      {/* Background Graphic Elements */}
      <div className="absolute top-1/4 -right-20 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm block mb-6">
              Urbana. Ousada. Premium.
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
              MAIS QUE <br />
              <span className="text-accent">PIZZA.</span> <br />
              É O SEU <br />
              <span className="outline-text">SLICE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/60 max-w-xl mb-10 font-medium leading-relaxed">
              Estamos reescrevendo as regras do jogo. Ingredientes de luxo,
              sabores experimentais e uma vibe que bate diferente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="text-lg px-10 py-5">
                Peça Agora
              </Button>
              <Button variant="ghost" className="text-lg px-10 py-5">
                Explore o Menu
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Placeholder for cinematic pizza image */}
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000"
                alt="Signature Pizza Slice"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-primary text-white p-6 rounded-full shadow-2xl border-4 border-accent w-32 h-32 flex items-center justify-center text-center"
            >
              <span className="font-black text-sm leading-tight uppercase">
                Massa Fresca <br /> Diária
              </span>
            </motion.div>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/10 rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/5 rounded-full -z-10" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 2px #121212;
          color: transparent;
        }
      `}} />
    </section>
  );
};
