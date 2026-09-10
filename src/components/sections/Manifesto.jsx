import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const Manifesto = () => {
  return (
    <section className="bg-primary text-surface overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <SectionHeading subtitle="A Filosofia" align="left" className="text-surface">
                Não Apenas <br /> Mais Uma <br /> Pizzaria.
              </SectionHeading>
              <div className="w-24 h-2 bg-accent mb-12" />
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-medium leading-tight tracking-tight"
            >
              Acreditamos que a pizza é uma <span className="text-accent">tela</span>. <br />
              Uma expressão urbana de sabor, textura e audácia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-surface/60 leading-relaxed"
            >
              Esqueça as toalhas xadrez vermelhas e os recheios genéricos.
              Estamos trazendo uma nova energia para as ruas—combinando
              artesanato premium com uma atitude urbana e crua.
              Cada fatia é projetada para ser uma experiência, não apenas uma refeição.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-8 pt-12 border-t border-surface/10"
            >
              <div>
                <h4 className="text-accent text-4xl font-black mb-2">01</h4>
                <p className="text-surface/80 font-medium uppercase text-sm tracking-wider">
                  Qualidade Absoluta
                </p>
              </div>
              <div>
                <h4 className="text-accent text-4xl font-black mb-2">02</h4>
                <p className="text-surface/80 font-medium uppercase text-sm tracking-wider">
                  Inovação Ousada
                </p>
              </div>
              <div>
                <h4 className="text-accent text-4xl font-black mb-2">03</h4>
                <p className="text-surface/80 font-medium uppercase text-sm tracking-wider">
                  Cultura Urbana
                </p>
              </div>
              <div>
                <h4 className="text-accent text-4xl font-black mb-2">04</h4>
                <p className="text-surface/80 font-medium uppercase text-sm tracking-wider">
                  Fatias Premium
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
