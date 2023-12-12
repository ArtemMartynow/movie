import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components/global/index.js' 
import router from './router'

import './assets/scss/style.scss'
import './assets/scss/movieList.scss'
import './assets/scss/bookingScene.scss'

const app = createApp(App)
app.use(globalComponents)
app.use(router)
app.mount('#app')