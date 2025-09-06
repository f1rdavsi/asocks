import type React from 'react'
import { useEffect, useState } from 'react'
import { Container } from '@shared/ui'
import { api } from '@shared/api'
import styles from './Application.module.scss'
import { useTranslation } from 'react-i18next'
// import type { Application } from './types'
export interface Application {
  img: string | undefined
  id: string
  text: string
}

export const Application: React.FC = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getApplications()
        if (response.success) {
          setItems(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch applications data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section className={styles.section}>
        <Container>
          <div className={styles.skeleton}>Loading...</div>
        </Container>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.text}>{t('applications.title', 'Learn more about applications')}</h2>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.img} alt={t(item.text)} className={styles.itemImage} />
              <div className={styles.itemContent}>
                <h3 className={styles.itemtext}>{t(item.text)}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
