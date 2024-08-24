import { createApp } from 'vue'
import store from 'store/index.js'
import './style.css'
import App  from './App.vue'

 const app = createApp(App)
    app.use(router)
    app.mount('#app')

App.use(store)
