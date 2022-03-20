import { createApp } from 'vue'
import router from './utils/router.js'
import App from './App.vue'
import './index.css'
import store from './utils/store.js'

createApp(App)
.use(store)
.use(router)
.mount('#app')
