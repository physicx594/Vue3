import { createApp } from 'vue'
import './style.css'
import './commonInit'
import App from './App.vue'
import router from './router'
import svgicon from '$components/SvgIcons/index.vue'

const app = createApp(App)
app.component('svgicon', svgicon)
app.use(router)
app.mount('#app')
