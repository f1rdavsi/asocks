import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from '@shared/ui';
import { CountriesList } from '@shared/ui/CountriesList';


export const GeoPage: React.FC = () => {
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
      <CountriesList/>
      <Footer />
    </div>
  );
};
