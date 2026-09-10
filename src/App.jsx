import React from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Menu } from './components/sections/Menu';
import { FeaturedPizza } from './components/sections/FeaturedPizza';
import { Process } from './components/sections/Process';
import { BrandExperience } from './components/sections/BrandExperience';
import { Reviews } from './components/sections/Reviews';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Menu />
        <FeaturedPizza />
        <Process />
        <BrandExperience />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
