import type React from 'react'
import { useEffect, useState } from 'react'
import { Container, Button } from '@shared/ui'
import { AuthModal } from '@features/auth/AuthModal'
import { api } from '@shared/api'
import type { Tariff } from '@shared/types'
import styles from './Pricing.module.scss'
import { useUser } from '@shared/context/UserContext'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const Pricing: React.FC = () => {
  const { t } = useTranslation()
  const [tariffs, setTariffs] = useState<Tariff[]>([])
  const [loading, setLoading] = useState(true)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const { user, addPurchasedTariff } = useUser()

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await api.getTariffs()
        if (response.success) {
          setTariffs(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch tariffs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchTariffs()
  }, [])

  const handleBuy = (tariff: Tariff) => {
    if (!user) {
      setAuthModalOpen(true)
      return
    }

    if (user.purchasedTariffs?.some(t => t.id === tariff.id)) return

    addPurchasedTariff(tariff)
    toast.success(t('pricing.successToast', { name: t(tariff.name) }))
  }

  if (loading) {
    return (
      <section id="pricing" className={styles.section}>
        <Container>
          <h2 className={styles.title}>{t('pricing.title')}</h2>
          <div className={styles.grid}>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={`tariff-skeleton-${i}`} className={styles.skeleton} />
            ))}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t('pricing.title')}</h2>
        <p className={styles.subtitle}>{t('pricing.subtitle')}</p>

        <div className={styles.grid}>
          {tariffs.map(tariff => {
            const isPurchased = user?.purchasedTariffs?.some(t => t.id === tariff.id)
            return (
              <div key={tariff.id} className={`${styles.tariffCard} ${tariff.isPopular ? styles.popular : ''}`}>
                {tariff.isPopular && <div className={styles.popularBadge}>{t('pricing.mostPopular')}</div>}

                <div className={styles.cardHeader}>
                  <div className={styles.proxyCount}>{t(tariff.name)}</div>
                  <div className={styles.price}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{tariff.price.toFixed(2)}</span>
                    <span className={styles.period}>/ {t('tariff.month')}</span>
                  </div>
                  <div className={styles.pricePerProxy}>
                    {t('pricing.pricePerProxy')}
                    <br />
                    <strong>${tariff.pricePerProxy} / {t('tariff.month')}</strong>
                  </div>
                  <div className={styles.connections}>
                    {t('pricing.connections')}
                    <br />
                    <strong>{tariff.connections} flows</strong>
                  </div>

                  <div className={styles.period}>
                    <strong>{tariff.features.map(f => t(f)).join(', ')}</strong>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Button variant="primary" size="medium" onClick={() => handleBuy(tariff)} disabled={isPurchased}>
                    {isPurchased
                      ? t('pricing.button.purchased')
                      : user
                        ? t('pricing.button.buy')
                        : t('pricing.button.signIn')}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultMode="login" />
    </section>
  )
}
