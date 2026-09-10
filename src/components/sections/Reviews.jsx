import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Alex Rivera',
    text: `A Trufa Neon mudou meu conceito de pizza. Já comi em todo o mundo, mas nada bate a experiência da PIZZA SLICE.`,
    role: 'Crítico Gastronômico',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    text: `Amo a vibe urbana e os sabores ousados. É mais do que comida; é uma experiência. A massa é a perfeição.`,
    role: 'Designer',
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    text: `Finalmente, uma pizzaria que não é genérica. A fatia Lenda Urbana é uma obra-prima de equilíbrio. Recomendadíssima.`,
    role: 'Músico',
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section className="bg-surface py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <SectionHeading subtitle="Comunidade" align="center">
            Amada por <span className="text-accent">Pizza Lovers</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl italic text-primary/80 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full" />
                <div>
                  <h4 className="font-bold uppercase tracking-tighter">{review.name}</h4>
                  <p className="text-sm text-primary/50">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
