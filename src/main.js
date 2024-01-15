import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/scss/style.scss'
import './assets/scss/movieList.scss'
import './assets/scss/bookingScene.scss'
import './assets/scss/modalWindow.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')