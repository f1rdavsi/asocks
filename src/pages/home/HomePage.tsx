import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Hero, Statistics, WhyChooseUs, Pricing, Application, TechSupport, Footer } from '@shared/ui';
import { PartnersSection } from '@shared/ui/Partners';


export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <Pricing />
      <Application />
      <PartnersSection/>
      <TechSupport />
      <Footer />
    </div>
  );
};
