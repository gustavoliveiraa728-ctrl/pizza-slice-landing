import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const Process = () => {
  const steps = [
    {
      title: 'A Farinha',
      text: 'Usamos um blend proprietário de farinha orgânica de alta proteína para uma massa leve, porém estruturada.',
      img: '/pizza-gourmet.jpg',
    },
    {
      title: 'O Fogo',
      text: 'Nossos fornos a lenha atingem 480°C, criando a tostura perfeita e um aroma defumado complexo.',
      img: '/pizza-doce.jpg',
    },
    {
      title: 'O Topping',
      text: 'Cada ingrediente é curado para frescor máximo, desde os tomates San Marzano até o manjericão fresco.',
      img: '/pizza-artesanal.jpg',
    },
  ];

  return (
    <section className="bg-surface py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <SectionHeading subtitle="Nosso Ofício" align="center">
            Pura <span className="text-accent">Obsessão</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative h-80 overflow-hidden rounded-3xl mb-8">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-accent font-black text-4xl block mb-2">0{idx + 1}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{step.title}</h3>
                </div>
              </div>
              <p className="text-lg text-primary/70 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
