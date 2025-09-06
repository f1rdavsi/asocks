import type React from 'react'
import { Container, Button } from '@shared/ui'
import styles from './ReliableSection.module.scss'
import HeroImage from '@shared/assets/images/reliable.png'
import { useTranslation } from 'react-i18next'

export const ReliableSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {/* Левая сторона */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            {t('reliable.title.part1')} <span className={styles.highlight}>{t('reliable.title.highlight')}</span>.
          </h1>
          <p className={styles.subtitle}>{t('reliable.subtitle')}</p>
          <Button variant="primary" size="large">
            {t('reliable.button')}
          </Button>
        </div>

        {/* Правая сторона */}
        <div className={styles.right}>
          <img src={HeroImage} alt={t('reliable.imageAlt')} className={styles.image} />
        </div>
      </Container>
    </section>
  )
}
