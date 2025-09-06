import React from 'react'
import { Button, Container } from '@shared/ui'
import SupportImage from '../../assets/images/support.png'
import styles from './TechSupport.module.scss'
import { useTranslation } from 'react-i18next'

export const TechSupport: React.FC = () => {
  const { t } = useTranslation()

  const features = [t('techSupport.feature1'), t('techSupport.feature2'), t('techSupport.feature3')]

  return (
    <section className={styles.support}>
      <Container>
        <h2 className={styles.heading}>{t('techSupport.heading')}</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.title}>{t('techSupport.title')}</h3>
            <p className={styles.subtitle}>{t('techSupport.subtitle')}</p>

            <ul className={styles.features}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <Button variant="primary" size="medium">
              <a href="https://t.me/frontInterview_bot" target="_blank" rel="noopener noreferrer">
                {t('techSupport.contact')}
              </a>
            </Button>
          </div>

          <div className={styles.image}>
            <img src={SupportImage} alt={t('techSupport.alt')} />
          </div>
        </div>
      </Container>
    </section>
  )
}
