import type React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { Container, Button } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import { NAVIGATION_ITEMS } from '@shared/config'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import FlagEn from '@shared/assets/flags/sh.svg'
import FlagRu from '@shared/assets/flags/ru.svg'
import Logo from '@shared/assets/logos/logo.svg'
import { useUser } from '@shared/context/UserContext'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const { i18n } = useTranslation()
  const { user, signOut } = useUser()

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="Asocks" />
            <span>Asocks</span>
          </Link>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            {NAVIGATION_ITEMS.map(item => {
              const isHashLink = item.href.includes('#')
              return isHashLink ? (
                <HashLink
                  key={item.href}
                  smooth
                  to={item.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </HashLink>
              ) : (
                <Link key={item.href} to={item.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className={styles.actions}>
            <div className={styles.language}>
              <select className="select" onChange={handleLanguageChange} value={i18n.language}>
                <option value="en">
                  <img src={FlagEn} alt="EN" />
                  EN
                </option>
                <option value="ru">
                  <img src={FlagRu} alt="RU" />
                  RU
                </option>
              </select>
            </div>

            {user ? (
              <>
                <span className={styles.username}>Hello, {user.name}</span>
                <Button variant="secondary" size="small" onClick={signOut}>
                  SIGN OUT
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => {
                    setAuthMode('register')
                    setAuthModalOpen(true)
                  }}>
                  REGISTRATION
                </Button>

                <button
                  className={styles.signIn}
                  onClick={() => {
                    setAuthMode('login')
                    setAuthModalOpen(true)
                  }}>
                  SIGN IN
                </button>
              </>
            )}
          </div>

          <button className={styles.mobileMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultMode={authMode} />
    </header>
  )
}
