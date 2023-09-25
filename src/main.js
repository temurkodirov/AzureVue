import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
document.documentElement.classList.add('dark');
localStorage.setItem("color-theme", "dark");
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
