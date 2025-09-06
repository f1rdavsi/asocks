import type React from 'react'
import { useState } from 'react'
import { Container, Button } from '@shared/ui'
import styles from './ReliableSection.module.scss'
import HeroImage from '@shared/assets/images/reliable.png' // убедись, что путь правильный

export const ReliableSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {/* Левая сторона */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            ReliableProxy network but much <span className={styles.highlight}>cheaper</span>.
          </h1>
          <p className={styles.subtitle}>Speed, Stability and Anonymity - All in one service</p>
          <Button variant="primary" size="large">
            Begin
          </Button>
        </div>

        {/* Правая сторона */}
        <div className={styles.right}>
          <img src={HeroImage} alt="ReliableProxy" className={styles.image} />
        </div>
      </Container>
    </section>
  )
}
