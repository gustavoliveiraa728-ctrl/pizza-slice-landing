import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const PIZZAS = [
  {
    name: 'A Lenda Urbana',
    description: 'Mozzarella de búfala, salame picante, fio de mel e manjericão fresco.',
    price: 'R$ 84',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad87ad75?auto=format&fit=crop&q=80&w=800',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    name: 'Trufa Neon',
    description: 'Azeite de trufa negra, cogumelos silvestres, ricota e parmesão.',
    price: 'R$ 98',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    size: 'col-span-1 row-span-1',
  },
  {
    name: 'Pepperoni Elétrico',
    description: 'Pepperoni duplo, mel picante, mozzarella e pimenta vermelha.',
    price: 'R$ 72',
    image: 'https://images.unsplash.com/photo-1534308983496-4f97a7377f1?auto=format&fit=crop&q=80&w=800',
    size: 'col-span-1 row-span-1',
  },
  {
    name: 'Jardim da Meia-Noite',
    description: 'Espinafre, feta, alho assado e cebolas caramelizadas.',
    price: 'R$ 68',
    image: 'https://images.unsplash.com/photo-1571407970376-d06373696f9d?auto=format&fit=crop&q=80&w=800',
    size: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    name: 'A Fatia Ousada',
    description: 'Linguiça, jalapeño, cebola roxa e provolone defumado.',
    price: 'R$ 78',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="bg-surface py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <SectionHeading subtitle="A Coleção" align="left">
            Nossas Fatias <span className="text-accent">Assinatura</span>
          </SectionHeading>
          <Button variant="ghost" className="mb-12">Ver Menu Completo</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {PIZZAS.map((pizza, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                'relative group overflow-hidden bg-primary text-white rounded-3xl cursor-pointer',
                pizza.size
              )}
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <motion.div
                  className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-black uppercase leading-none">
                      {pizza.name}
                    </h3>
                    <span className="text-accent font-black text-xl">{pizza.price}</span>
                  </div>
                  <p className={cn(
                    'text-white/60 transition-opacity duration-300 text-sm md:text-base max-w-xs',
                    'opacity-100 md:opacity-0 md:group-hover:opacity-100'
                  )}>
                    {pizza.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
