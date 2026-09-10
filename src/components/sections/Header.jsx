import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre', href: '#about' },
    { name: 'Ofertas', href: '#deals' },
    { name: 'Lojas', href: '#locations' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-primary/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="Pizza Slice Logo"
            className="w-12 h-12 object-contain"
          />
          <span className={cn(
            'font-black text-2xl tracking-tighter',
            isScrolled ? 'text-white' : 'text-primary'
          )}>
            PIZZA<span className="text-accent">SLICE</span>
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'font-medium uppercase tracking-wider transition-colors hover:text-accent',
                isScrolled ? 'text-white/80' : 'text-primary/80'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'secondary'} className="py-2 px-6 text-sm">
            Peça Agora
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'p-2',
              isScrolled ? 'text-white' : 'text-primary'
            )}
          >
            {isMobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? '100vh' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="fixed inset-0 bg-primary text-white z-[-1] flex flex-col items-center justify-center gap-8 overflow-hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <Button variant="primary" className="text-xl">
          Order Now
        </Button>
      </motion.div>
    </header>
  );
};
