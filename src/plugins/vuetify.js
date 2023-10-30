import { createVuetify } from 'vuetify'

import colors from 'vuetify/lib/util/colors'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    background: '#1b242f',
                    surface: '#f5f5f5',
                    primary: '#e31b6d',
                    secondary: '#04c2c9',
                    info: '#444649'
        }
            },
        },
    },
})