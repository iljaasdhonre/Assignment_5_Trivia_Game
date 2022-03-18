import { createApp } from 'vue'
import router from './utils/router.js'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
