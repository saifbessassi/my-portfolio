import i18n from '../plugins/i18n'
import { nextTick } from 'vue'

const Trans = {
  get supportedLocales() {
    return 'en,fr'
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale
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
