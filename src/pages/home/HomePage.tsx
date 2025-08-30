import type React from 'react';
import { Header, Hero, Statistics, WhyChooseUs, Pricing, Footer } from '@shared/ui';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <Pricing />
      <Footer />
    </div>
  );
};
