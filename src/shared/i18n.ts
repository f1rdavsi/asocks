import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../src/locales/en.json'
import ru from '../../src/locales/ru.json'
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    
  },
})

export default i18n
