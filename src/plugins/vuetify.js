import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#1b242f',
          surface: '#f5f5f5',
          primary: '#e31b6d',
          secondary: '#04c2c9',
          info: '#616161'
        }
      }
    },
    variations: {
      colors: ['primary', 'secondary', 'info'],
      lighten: 4,
      darken: 4
    }
  }
})
