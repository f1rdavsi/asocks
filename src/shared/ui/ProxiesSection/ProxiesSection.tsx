import type React from 'react'
import { useState } from 'react'
import { Container, Button } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import styles from './ProxiesSection.module.scss'
import { useUser } from '@shared/context/UserContext'
import { toast } from 'react-toastify'
import ResidentialImage from '@shared/assets/images/residental.svg'
import MobileImage from '@shared/assets/images/mobile.svg'
import { useTranslation } from 'react-i18next'

interface ProxyItem {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  price: number
  proxyCount: number
  pricePerProxy: number
  connections: number
}

export const ProxiesSection: React.FC = () => {
  const { t } = useTranslation()
  const { user, addPurchasedTariff } = useUser()
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const proxies: ProxyItem[] = [
    {
      id: 'residential',
      title: t('proxies.residential.title'),
      description: t('proxies.residential.description'),
      features: t('proxies.residential.features', { returnObjects: true }) as string[],
      image: ResidentialImage,
      price: 3,
      proxyCount: 7,
      pricePerProxy: 0.43,
      connections: 100,
    },
    {
      id: 'mobile',
      title: t('proxies.mobile.title'),
      description: t('proxies.mobile.description'),
      features: t('proxies.mobile.features', { returnObjects: true }) as string[],
      image: MobileImage,
      price: 3,
      proxyCount: 4,
      pricePerProxy: 0.75,
      connections: 50,
    },
  ]

  const handleBuyAll = () => {
    if (!user) {
      setAuthModalOpen(true)
      return
    }

    proxies.forEach(proxy => {
      const isPurchased = user.purchasedTariffs?.some(t => t.id === proxy.id)
      if (!isPurchased) {
        addPurchasedTariff({
          id: proxy.id,
          name: proxy.title,
          proxyCount: proxy.proxyCount,
          price: proxy.price,
          pricePerProxy: proxy.pricePerProxy,
          connections: proxy.connections,
          features: proxy.features,
          isPopular: false,
        })
        toast.success(`${t('proxies.buttons.buyAll')} ${proxy.title}!`)
      }
    })
  }

  const allPurchased = proxies.every(proxy => user?.purchasedTariffs?.some(t => t.id === proxy.id))

  return (
    <section className={styles.proxies}>
      <Container>
        <h2 className={styles.title}>{t('proxies.title', { useCase: t('proxies.highlight') })}</h2>

        <div className={styles.cards}>
          {proxies.map((proxy, idx) => (
            <div key={`${proxy.id}-${idx}`} className={styles.card}>
              <img src={proxy.image} alt={proxy.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{proxy.title}</h3>
              <p className={styles.cardDescription}>{proxy.description}</p>
              <ul className={styles.features}>
                {proxy.features.map((f, i) => (
                  <li key={`${f}-${i}`} className={styles.feature}>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.priceInfo}>
                <span>{t('proxies.pricePerGB', { price: proxy.price })}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapperCenter}>
          <Button variant="primary" size="large" onClick={handleBuyAll} disabled={allPurchased}>
            {allPurchased
              ? t('proxies.buttons.purchased')
              : user
                ? t('proxies.buttons.buyAll')
                : t('proxies.buttons.signIn')}
          </Button>
        </div>
      </Container>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultMode="login" />
    </section>
  )
}
