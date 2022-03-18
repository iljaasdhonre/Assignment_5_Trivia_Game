import { createApp } from 'vue'
import router from './utils/router.js'
import App from './App.vue'
import './index.css'
import store from './store.js'

createApp(App)
.use(router)
.use(store)
.mount('#app')
