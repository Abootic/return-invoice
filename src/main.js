import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import common from './common.js'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mixin(common)
app.mount('#app')




