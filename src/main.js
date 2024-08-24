import { createApp } from 'vue'
import store from '/store/index.js'
import './style.css'
import App  from './App.vue'
import router from './router/index.js'

const app = createApp(App)
  app.use(router)
  app.use(store)
  app.mount('#app')