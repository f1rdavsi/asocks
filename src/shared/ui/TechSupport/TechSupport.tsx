import React from 'react'
import { Button, Container } from '@shared/ui'
import SupportImage from '../../assets/images/support.png'
import styles from './TechSupport.module.scss'
export const TechSupport: React.FC = () => {
  return (
    <section className={styles.support}>
      <Container>
        <h2 className={styles.heading}>Tech Support</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.title}>We will support you every step of the way</h3>
            <p className={styles.subtitle}>Talk to a web data expert to get the most out of your data.</p>

            <ul className={styles.features}>
              <li>Rated #1 by customers on G2</li>
              <li>Average response time less than 10 minutes</li>
              <li>24/7 support anytime, anywhere</li>
            </ul>

            <Button variant="primary" size="medium">
              <a href="https://t.me/frontInterview_bot" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>

          <div className={styles.image}>
            <img src={SupportImage} alt="Support" />
          </div>
        </div>
      </Container>
    </section>
  )
}
