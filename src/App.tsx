import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { WhyAdunnati } from './components/WhyAdunnati';
import { About } from './components/About';
import { LetsTalk } from './components/LetsTalk';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="site-shell" id="home">
      {/* Hero Section (Flat view) */}
      <div className="hero-flat-section">
        <Header />
        <Hero />
      </div>

      <main>
        <Services />
        <WhyAdunnati />
        <About />
        <FeaturedWork />
        <LetsTalk />
        <Footer />
      </main>
    </div>
  );
};

export default App;
