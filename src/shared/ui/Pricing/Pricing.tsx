import type React from 'react';
import { useEffect, useState } from 'react';
import { Container, Button } from '@shared/ui';
import { AuthModal } from '@features/auth/AuthModal';
import { api } from '@shared/api';
import type { Tariff } from '@shared/types';
import styles from './Pricing.module.scss';

export const Pricing: React.FC = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await api.getTariffs();
        if (response.success) {
          setTariffs(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch tariffs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  if (loading) {
    return (
      <section className={styles.section}>
        <Container>
          <h2 className={styles.title}>Choose your tariff</h2>
          <div className={styles.grid}>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={`tariff-skeleton-${Date.now()}-${i}`} className={styles.skeleton} />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Choose your tariff</h2>
        <p className={styles.subtitle}>the amount of proxy</p>

        <div className={styles.grid}>
          {tariffs.map((tariff) => (
            <div
              key={tariff.id}
              className={`${styles.tariffCard} ${tariff.isPopular ? styles.popular : ''}`}
            >
              {tariff.isPopular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.proxyCount}>{tariff.proxyCount}</div>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>{tariff.price.toFixed(2)}</span>
                  <span className={styles.period}>/ month</span>
                </div>
                <div className={styles.pricePerProxy}>
                  price for one proxy
                  <br />
                  <strong>${tariff.pricePerProxy} per month</strong>
                </div>
                <div className={styles.connections}>
                  the number of connections
                  <br />
                  <strong>{tariff.connections} flows</strong>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => setAuthModalOpen(true)}
                >
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode="login"
      />
    </section>
  );
};
