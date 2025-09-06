import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from '@shared/ui';
import { CountriesList } from '@shared/ui/CountriesList';
import { ProxiesSection } from '@shared/ui/ProxiesSection';
import { ReliableSection } from '@shared/ui/Reliable/ReliableSection';


export const ComparePage: React.FC = () => {
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
      <ReliableSection/>
      <Footer />
    </div>
  );
};
