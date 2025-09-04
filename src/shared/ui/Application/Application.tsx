import type React from 'react'
import { useEffect, useState } from 'react'
import { Container } from '@shared/ui'
import { api } from '@shared/api'
import styles from './Application.module.scss'

interface Application {
  img: string | undefined
  id: string
  text: string
}

export const Application: React.FC = () => {
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
        <h2 className={styles.text}>Learn more about applications</h2>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.img} alt={item.text} className={styles.itemImage} />
              <div className={styles.itemContent}>
                <h3 className={styles.itemtext}>{item.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
