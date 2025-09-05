import type React from 'react'
import { useState } from 'react'
import { Container, Button } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import styles from './ProxiesSection.module.scss'
import { useUser } from '@shared/context/UserContext'
import { toast } from 'react-toastify'

// Импорт изображений
import ResidentialImage from '@shared/assets/images/residental.svg'
import MobileImage from '@shared/assets/images/mobile.svg'

export const ProxiesSection: React.FC = () => {
  const { user, addPurchasedTariff } = useUser()
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const proxies = [
    {
      id: 'residential',
      title: 'Residential proxies',
      description: 'Never get IP-banned and get complete anonymity',
      features: [
        '7+ million IPs',
        'Free ASN targeting',
        'Full IP Pool is available',
        'Automatic IP Rotation',
        'Constantly growing IP Pool',
      ],
      image: ResidentialImage,
      price: 3,
      proxyCount: 7,
      pricePerProxy: 0.43,
      connections: 100,
    },
    {
      id: 'mobile',
      title: 'Mobile LTE Proxies',
      description: 'See the web from the eyes of real mobile users',
      features: [
        '4G/LTE Mobile IPs',
        'Real Mobile Devices',
        'Automatic IP Rotation',
        '97% Success Rate',
      ],
      image: MobileImage,
      price: 3,
      proxyCount: 4,
      pricePerProxy: 0.75,
      connections: 50,
    },
  ]

  // Покупаем все прокси сразу или просто первую непокупанную
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
        toast.success(`Successfully bought ${proxy.title}!`)
      }
    })
  }

  const allPurchased = proxies.every(proxy =>
    user?.purchasedTariffs?.some(t => t.id === proxy.id)
  )

  return (
    <section className={styles.proxies}>
      <Container>
        <h2 className={styles.title}>
          Premium proxies for <span className={styles.highlight}>any use case</span>
        </h2>

        <div className={styles.cards}>
          {proxies.map(proxy => (
            <div key={proxy.id} className={styles.card}>
              <img src={proxy.image} alt={proxy.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{proxy.title}</h3>
              <p className={styles.cardDescription}>{proxy.description}</p>
              <ul className={styles.features}>
                {proxy.features.map(f => (
                  <li key={f} className={styles.feature}>{f}</li>
                ))}
              </ul>
              <div className={styles.priceInfo}>
                <span>${proxy.price} per GB</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapperCenter}>
          <Button
            variant="primary"
            size="large"
            onClick={handleBuyAll}
            disabled={allPurchased}
          >
            {allPurchased ? 'Purchased' : user ? 'Buy All' : 'Sign In to Buy'}
          </Button>
        </div>
      </Container>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode="login"
      />
    </section>
  )
}
