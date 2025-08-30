import type React from 'react'
import { useState } from 'react'
import { Container, Button } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import styles from './Hero.module.scss'
import HeroImage from '../../assets/images/hero-image.svg'
import { useTranslation } from 'react-i18next'

export const Hero: React.FC = () => {
  const { t } = useTranslation()
  console.log(t);
  
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.leftSide}>
            <div className={styles.reviews}>
              <div className={styles.stars}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className={styles.reviewText}>Read our reviews on</span>
              <img src="https://ext.same-assets.com/600384834/1495846889.svg" alt="G2" className={styles.g2Logo} />
            </div>

            <h1 className={styles.title}>
              Only the most <span className={styles.highlight}>stable</span>
              <br />
              proxy
            </h1>

            <p className={styles.subtitle}>
              Universal proxy service with the
              <br />
              best functionality
            </p>

            <div className={styles.actions}>
              <Button
                variant="secondary"
                size="large"
                onClick={() => {
                  setAuthMode('register')
                  setAuthModalOpen(true)
                }}>
                {t('sell')}
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => {
                  setAuthMode('login')
                  setAuthModalOpen(true)
                }}>
                {t('buy')}
              </Button>
            </div>
          </div>

          <div className={styles.rightSide}>
            <img src={HeroImage} alt="Collecting data" className={styles.heroImage} />
          </div>
        </div>
      </Container>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultMode={authMode} />
    </section>
  )
}
