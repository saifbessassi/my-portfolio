import { createI18n } from 'vue-i18n'
import fr from '../i18n/locales/fr.json'

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    fr
  }
})
