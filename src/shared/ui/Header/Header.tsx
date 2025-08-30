import type React from 'react';
import { useState } from 'react';
import { Container, Button } from '@shared/ui';
import { AuthModal } from '@features/auth/AuthModal';
import { NAVIGATION_ITEMS } from '@shared/config';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src="https://ext.same-assets.com/600384834/696197596.svg" alt="Asocks" />
            <span>Asocks</span>
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            {NAVIGATION_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.language}>
              <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg" alt="EN" />
              <span>EN</span>
            </div>

            <Button
              variant="primary"
              size="small"
              onClick={() => {
                setAuthMode('register');
                setAuthModalOpen(true);
              }}
            >
              REGISTRATION
            </Button>

            <button
              className={styles.signIn}
              onClick={() => {
                setAuthMode('login');
                setAuthModalOpen(true);
              }}
            >
              SIGN IN
            </button>
          </div>

          <button
            className={styles.mobileMenu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </header>
  );
};
