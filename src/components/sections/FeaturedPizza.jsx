import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const FeaturedPizza = () => {
  return (
    <section className="bg-primary text-surface py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1593560708920-617bc18ef67c?auto=format&fit=crop&q=80&w=1000"
                alt="Pizza em Destaque"
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              />

              {/* Detail callouts */}
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-accent p-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg">
                Farinha Orgânica
              </div>
              <div className="absolute top-1/2 -right-6 md:-right-10 bg-surface text-primary p-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg">
                Abertura Manual
              </div>
              <div className="absolute -bottom-6 left-1/4 md:-bottom-10 bg-primary text-white border border-surface/20 p-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg">
                Forno a Lenha
              </div>
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-accent/20 rounded-full rotate-12" />
          </div>

          <div>
            <SectionHeading subtitle="A Obra-Prima" align="left">
              A <span className="text-accent">Lenda Urbana</span>
            </SectionHeading>
            <p className="text-xl md:text-2xl text-surface/60 mb-12 leading-relaxed">
              Nossa criação mais ousada. Uma sinfonia de salame picante,
              mozzarella de búfala premium e um fio de mel secreto
              que cria um equilíbrio explosivo entre o doce e o picante.
            </p>
            <div className="space-y-8 mb-12">
              {[
                { label: 'Mozzarella de Búfala', detail: 'Proveniente das melhores laticínios da Campania.' },
                { label: 'Salame Picante', detail: 'Curado por 30 dias com um blend ousado de pimentas.' },
                { label: 'Mel Assinatura', detail: 'Infundido com pimenta e um toque de cítricos.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 shrink-0 bg-accent/20 text-accent flex items-center justify-center rounded-full font-black">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-1">{item.label}</h4>
                    <p className="text-surface/50">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button variant="primary" className="text-lg">Pedir Esta Fatia</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
