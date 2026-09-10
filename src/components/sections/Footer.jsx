import React from 'react';
import { ShoppingBag, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-surface py-20 border-t border-surface/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="font-black text-xl tracking-tighter">
                PIZZA<span className="text-accent">SLICE</span>
              </span>
            </div>
            <p className="text-surface/50 max-w-md mb-8 text-lg leading-relaxed">
              Elevando a experiência da pizza urbana. Ingredientes premium,
              sabores ousados e uma vibe que define a cidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-surface/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-surface/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-surface/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase mb-6 tracking-widest text-accent">Links Rápidos</h4>
            <ul className="space-y-4 text-surface/60 font-medium">
              <li><a href="#menu" className="hover:text-white transition-colors">O Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Ofício</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase mb-6 tracking-widest text-accent">Fique Conectado</h4>
            <p className="text-surface/60 mb-6 text-sm">Entre para o Slice Club e receba ofertas exclusivas.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-surface/10 border border-surface/20 px-4 py-2 rounded-l-lg focus:outline-none focus:border-accent w-full text-white"
              />
              <button className="bg-accent p-2 rounded-r-lg hover:bg-accent-dark transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-6 text-surface/40 text-sm font-medium">
          <p>© 2026 PIZZA SLICE. Todos os Direitos Reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
