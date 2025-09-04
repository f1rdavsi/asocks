import type React from 'react'
import { useEffect, useState } from 'react'
import { Container } from '@shared/ui'
import { api } from '@shared/api'
import styles from './WhyChooseUs.module.scss'

interface WhyChooseUsItem {
  img: string | undefined
  id: string
  title: string
  description: string
}

export const WhyChooseUs: React.FC = () => {
  const [items, setItems] = useState<WhyChooseUsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getWhyChooseUs()
        if (response.success) {
          setItems(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch why choose us data:', error)
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
        <h2 className={styles.title}>Why companies choose us</h2>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.img} alt={item.title} className={styles.itemImage} />
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
