import type React from 'react'
import { Container } from '@shared/ui'
import styles from './Footer.module.scss'
import Logo from '@shared/assets/logos/logo.svg'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.topSection}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <img src={Logo} alt="Asocks" />
                <span>Asocks</span>
              </div>
              <div className={styles.contacts}>
                <a href="mailto:support@asocks.com">support@asocks.com</a>
                <a href="tel:+447862508327">+992006660476</a>
                <a href="https://t.me/frontInterview_bot">@frontInterview_bot</a>
              </div>
              <div className={styles.rating}>
                <span>4.9</span>
                <div className={styles.stars}>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>

            <div className={styles.linksSection}>
              <div className={styles.linkGroup}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="/pricing">Prices</a>
                  </li>
                  <li>
                    <a href="/login">Sign in</a>
                  </li>
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4>Papers</h4>
                <ul>
                  <li>
                    <a href="#terms">Terms of use</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#returns">Returns Policy</a>
                  </li>
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4>About the product</h4>
                <ul>
                  <li>
                    <a href="/partners">Partners</a>
                  </li>
                  <li>
                    <a href="/geo">Coverage</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.copyright}>
              <span>Asocks</span>
              <span>All rights reserved</span>
              <span>40 Quai de Dion Bouton, 92800 Puteaux, France</span>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://t.me/AsocksComBot" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.378 2.617-1.411 3.075-2.888 1.928-1.277-.993-2.03-1.581-3.287-2.548-.87-.673-.3-1.04.23-1.644l3.895-3.794c.445-.445.243-.747-.273-.462l-4.862 3.057c-1.031.645-2.171.627-3.169-.057l-3.291-1.991c-.685-.415-.686-1.507.282-1.923 0 0 7.776-2.81 10.321-3.827 1.409-.564 3.129-.47 2.938 1.533z" />
                </svg>
              </a>
              <a href="https://twitter.com/asocks_proxies" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.57-2.11-9.94-5.02-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.55z" />
                </svg>
              </a>
              <a href="https://discord.com/invite/9wq3rs2Azx" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
