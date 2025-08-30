import type React from 'react';
import { useEffect, useState } from 'react';
import { Container } from '@shared/ui';
import { api } from '@shared/api';
import type { Statistics as StatisticsType } from '@shared/types';
import styles from './Statistics.module.scss';

export const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await api.getStatistics();
        if (response.success) {
          setStatistics(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <section className={styles.statistics}>
        <Container>
          <div className={styles.grid}>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={`skeleton-${Date.now()}-${i}`} className={styles.skeleton} />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  if (!statistics) return null;

  const stats = [
    {
      value: statistics.connectionSuccess,
      label: 'Connection success'
    },
    {
      value: statistics.locations,
      label: 'Locations'
    },
    {
      value: statistics.ipAddresses,
      label: 'IP addresses'
    },
    {
      value: statistics.satisfiedCustomers,
      label: 'Satisfied customers'
    }
  ];

  return (
    <section className={styles.statistics}>
      <Container>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={`stat-${index}-${stat.label}`} className={styles.statItem}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
