import { createApp } from 'vue'
import router from './utils/router.js'
import App from './App.vue'
import './index.css'

createApp(App)
.use(router)
.mount('#app')
