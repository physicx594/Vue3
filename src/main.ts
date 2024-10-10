import '@/styles/main.css'

import { createApp } from 'vue'
import { colorsGenerator } from './utilities/colors'
import App from './App.vue'
import router from './router'

colorsGenerator()

const app = createApp(App)

app.use(router)

app.mount('#app')
