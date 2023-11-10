import './assets/sass/style.scss'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import vuetify from './plugins/vuetify'
// I18n
import i18n from './plugins/i18n'
// Vue Router
import router from './plugins/router'

createApp(App)
    .use(i18n)
    .use(vuetify)
    .use(router)
    .mount('#app')
