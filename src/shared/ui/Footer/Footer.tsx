import React from 'react'
import { Container } from '@shared/ui'
import styles from './Footer.module.scss'
import Logo from '@shared/assets/logos/logo.svg'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  const companyLinks = [
    { label: t('footer.prices'), href: '/pricing' },
    { label: t('footer.signIn'), href: '/login' }
  ]

  const papersLinks = [
    { label: t('footer.terms'), href: '#terms' },
    { label: t('footer.privacy'), href: '#privacy' },
    { label: t('footer.returns'), href: '#returns' }
  ]

  const productLinks = [
    { label: t('footer.partners'), href: '/partners' },
    { label: t('footer.coverage'), href: '/geo' }
  ]

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.topSection}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <img src={Logo} alt={t('footer.logoAlt')} />
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
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>
            </div>

            <div className={styles.linksSection}>
              {[{ title: t('footer.company'), links: companyLinks },
                { title: t('footer.papers'), links: papersLinks },
                { title: t('footer.aboutProduct'), links: productLinks }].map(group => (
                <div key={group.title} className={styles.linkGroup}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.links.map(link => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.copyright}>
              <span>Asocks</span>
              <span>{t('footer.allRights')}</span>
              <span>{t('footer.address')}</span>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://t.me/AsocksComBot" aria-label={t('footer.telegram')}>
                {/* SVG */}
              </a>
              <a href="https://twitter.com/asocks_proxies" aria-label={t('footer.twitter')}>
                {/* SVG */}
              </a>
              <a href="https://discord.com/invite/9wq3rs2Azx" aria-label={t('footer.discord')}>
                {/* SVG */}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
