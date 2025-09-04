import React, { useState, useEffect } from 'react'
import Logo from '@shared/assets/logos/logo_2.svg'
import Shield from '@shared/assets/images/shit.png'

import { partnersMock } from '@shared/api/mock-data'
import styles from './PartnersPage.module.scss'
import { Button } from '@shared/ui'
import { Modal } from '../../shared/ui/Modal'
import { NAVIGATION_ITEMS } from '@shared/config'
import { AuthModal } from '@features/auth/AuthModal'
import { Partner } from './types'

const Navbar: React.FC<{ open: boolean; onRegisterClick: () => void }> = ({ open, onRegisterClick }) => (
  <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
    {NAVIGATION_ITEMS.map(item => (
      <a key={item.href} href={item.href} className={styles.navLink}>
        {item.label}
      </a>
    ))}
    <Button variant="primary" size="small" onClick={onRegisterClick}>
      REGISTRATION
    </Button>
  </nav>
)

const PartnerCard: React.FC<{ partner: Partner; onClick: (p: Partner) => void }> = ({ partner, onClick }) => (
  <div className={styles.partnerCard} onClick={() => onClick(partner)}>
    <img src={partner.image} alt={partner.name} />
  </div>
)

export const PartnersPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Симуляция загрузки данных
    const timer = setTimeout(() => {
      setPartners(partnersMock)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleCardClick = (partner: Partner) => setSelectedPartner(partner)
  const closeModal = () => setSelectedPartner(null)

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <img src={Logo} alt="asocks" className={styles.logo} />

        <Navbar
          open={menuOpen}
          onRegisterClick={() => {
            setAuthMode('register')
            setAuthModalOpen(true)
          }}
        />

        <button
          className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              <span>
                <img src={Logo} alt="logo" />
              </span>{' '}
              PARTNERS
            </h1>
            <p>
              Increase your revenue with an innovative app monetization tool that improves user interaction and privacy.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src={Shield} alt="Shield" />
          </div>
        </section>

        {/* Partners grid */}
        <section className={styles.partners}>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <div key={i} className={styles.partnerCardSkeleton}></div>)
          ) : partners.length === 0 ? (
            <p className={styles.noPartners}>No partners found</p>
          ) : (
            partners.map(partner => <PartnerCard key={partner.id} partner={partner} onClick={handleCardClick} />)
          )}
        </section>

        {/* Auth Modal */}
        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultMode={authMode} />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <img src={Logo} alt="logo" />
        <p>&copy; 2023 Asocks. All rights reserved.</p>
      </footer>

      {/* Partner Modal */}
      <Modal isOpen={!!selectedPartner} onClose={closeModal} title={selectedPartner?.name}>
        {selectedPartner && (
          <>
            <img
              src={selectedPartner.image}
              alt={selectedPartner.name}
              style={{ maxWidth: '100%', marginBottom: '20px' }}
            />
            <p>{selectedPartner.description}</p>
            <Button className={styles.modalButton} variant="primary">
              Перейти в страницу {selectedPartner.name}
            </Button>
          </>
        )}
      </Modal>
    </div>
  )
}
