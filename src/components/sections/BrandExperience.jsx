import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const BrandExperience = () => {
  return (
    <section className="bg-primary text-surface py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <SectionHeading subtitle="A Vibe" align="left">
              Energia <span className="text-accent">Urbana.</span>
            </SectionHeading>
            <p className="text-xl text-surface/60 mb-12 leading-relaxed">
              Nós não apenas vendemos pizza; nós curamos um estilo de vida urbano.
              Da música em nossas lojas à arte em nossas caixas,
              tudo é um reflexo da força bruta da cidade.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-accent text-white font-bold uppercase text-xs tracking-widest rounded-full">
                Street Art
              </div>
              <div className="px-6 py-3 border border-surface/20 text-surface font-bold uppercase text-xs tracking-widest rounded-full">
                Vinyl Beats
              </div>
              <div className="px-6 py-3 border border-surface/20 text-surface font-bold uppercase text-xs tracking-widest rounded-full">
                City Lights
              </div>
            </div>
          </div>

          <div className="relative h-[600px]">
            {/* Asymmetric Image Montage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden z-20 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1514525253364-7773659566d1?auto=format&fit=crop&q=80&w=800"
                alt="Vibe da Cidade"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-3xl overflow-hidden z-30 shadow-2xl border-8 border-primary"
            >
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
                alt="Detalhe da Pizza"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
