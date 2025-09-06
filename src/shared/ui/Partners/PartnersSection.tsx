import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { partnersMock } from '@shared/api/mock-data'
import styles from './PartnersSection.module.scss'
import { useTranslation } from 'react-i18next'

export const PartnersSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('partners.title')}</h2>

      <Swiper
        centeredSlides
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className={styles.swiper}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 12 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1440: { slidesPerView: 7, spaceBetween: 30 },
        }}>
        {partnersMock.map(partner => (
          <SwiperSlide key={partner.id}>
            <div className={styles.card}>
              <img src={partner.image} alt={partner.name} className={styles.logo} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
