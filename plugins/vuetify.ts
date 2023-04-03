import {createVuetify} from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// noinspection JSUnusedGlobalSymbols
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        // ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'light'
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
