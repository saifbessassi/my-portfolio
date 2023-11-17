import i18n from '../plugins/i18n'
import { nextTick } from 'vue'

const Trans = {
  get supportedLocales() {
    return ['en', 'fr']
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale
  },

  getUserLocale() {
    const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    }
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem('user-locale')
    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLocale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }
    const userPreferredLocale = Trans.getUserLocale()
    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }
    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },

  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },

  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale)
    Trans.currentLocale = newLocale
    document.querySelector('html').setAttribute('lang', newLocale)
    localStorage.setItem('user-locale', newLocale)
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick()
  },

  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale
    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale())
    }
    await Trans.switchLanguage(paramLocale)
    return next()
  }
}

export default Trans
