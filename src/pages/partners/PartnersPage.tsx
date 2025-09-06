import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import Logo from '@shared/assets/logos/logo_2.svg'
import Shield from '@shared/assets/images/shit.png'
import { partnersMock } from '@shared/api/mock-data'
import styles from './PartnersPage.module.scss'
import { NAVIGATION_ITEMS } from '@shared/config'
import { Partner } from './types'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC<{ open: boolean; onRegisterClick: () => void }> = ({ open, onRegisterClick }) => {
  const { t } = useTranslation()
  return (
    <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      {NAVIGATION_ITEMS.map(item => (
        <a key={item.href} href={item.href} className={styles.navLink}>
          {t(item.label)}
        </a>
      ))}
      <Button variant="primary" size="small" onClick={onRegisterClick}>
        {t('auth.register')}
      </Button>
    </nav>
  )
}

const PartnerCard: React.FC<{ partner: Partner; onClick: (p: Partner) => void }> = ({ partner, onClick }) => (
  <div className={styles.partnerCard} onClick={() => onClick(partner)}>
    <img src={partner.image} alt={partner.name} />
  </div>
)

export const PartnersPage: React.FC = () => {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPartners(partnersMock)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleCardClick = (partner: Partner) => setSelectedPartner(partner)
  const closeModal = () => setSelectedPartner(null)
  const handleRegisterClick = () => {
    setAuthMode('register')
    setAuthModalOpen(true)
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Asocks" />
        </Link>

        <Navbar open={menuOpen} onRegisterClick={handleRegisterClick} />

        <button
          className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>

        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              <span>
                <img src={Logo} alt="logo" />
              </span>{' '}
              {t('partnersPage.heroTitle')}
            </h1>
            <p>{t('partnersPage.heroDescription')}</p>
          </div>
          <div className={styles.heroImage}>
            <img src={Shield} alt="Shield" />
          </div>
        </section>

        <section className={styles.partners}>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <div key={i} className={styles.partnerCardSkeleton}></div>)
          ) : partners.length === 0 ? (
            <p className={styles.noPartners}>{t('partnersPage.noPartners')}</p>
          ) : (
            partners.map(partner => <PartnerCard key={partner.id} partner={partner} onClick={handleCardClick} />)
          )}
        </section>

        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultMode={authMode} />

        <Modal isOpen={!!selectedPartner} onClose={closeModal} title={selectedPartner?.name}>
          {selectedPartner && (
            <>
              <img
                src={selectedPartner.image}
                alt={selectedPartner.name}
                style={{ maxWidth: '100%', marginBottom: '20px' }}
              />
              {selectedPartner.description && <p>{selectedPartner.description}</p>}
              {selectedPartner.url && (
                <Button className={styles.modalButton} variant="primary" as="a" href={selectedPartner.url}>
                  {t('partnersPage.modalButton', { name: selectedPartner.name })}
                </Button>
              )}
            </>
          )}
        </Modal>
      </main>

      <footer className={styles.footer}>
        <img src={Logo} alt="logo" />
        <p>&copy; 2023 Asocks. {t('partnersPage.footerRights')}</p>
      </footer>
    </div>
  )
}
