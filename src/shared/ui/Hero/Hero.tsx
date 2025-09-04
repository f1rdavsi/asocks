import type React from 'react'
import { useState } from 'react'
import { Container, Button } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import styles from './Hero.module.scss'
import HeroImage from '@shared/assets/images/hero-image.svg'
import { useTranslation, Trans } from 'react-i18next'
import Revews from '@shared/assets/images/revew.svg'
import { useUser } from '@shared/context/UserContext'

export const Hero: React.FC = () => {
  const { t } = useTranslation()
  const { user } = useUser() // берём пользователя из контекста

  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const handleButtonClick = (mode: 'login' | 'register', url?: string) => {
    if (user && url) {
      // если пользователь авторизован, переходим на внешний сайт
      window.open(url, '_blank')
      return
    }

    // если не авторизован, открываем модалку
    setAuthMode(mode)
    setAuthModalOpen(true)
  }

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.leftSide}>
            <div className={styles.reviews}>
              <span className={styles.reviewText}>{t('hero.reviewsText')}</span>
              <img src={Revews} alt="G2" className={styles.g2Logo} />
            </div>
            <h1 className={styles.title}>
              <Trans i18nKey="hero.title">
                Only the most <span className={styles.highlight}>stable</span> proxy
              </Trans>
            </h1>
            <p className={styles.subtitle}>
              <Trans i18nKey="hero.subtitle" />
            </p>
            <div className={styles.actions}>
              <Button
                variant="secondary"
                size="large"
                onClick={() => handleButtonClick('register', 'https://proxysell.com/')}>
                {t('hero.buttons.sell')}
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => handleButtonClick('register', 'login')}>
                {t('hero.buttons.buy')}
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
