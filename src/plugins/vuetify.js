import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        primary: '#6200EE',
        secondary: '#03DAC6',
        accent: '#BB86FC',
        error: '#CF6679',
        background: '#121212'
      },
    },
  },
})

export default vuetify
