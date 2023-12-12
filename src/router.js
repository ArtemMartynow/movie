import { createRouter, createWebHashHistory } from "vue-router";

import MovieList from './components/global/MovieList.vue'
import BookingScene from './components/global/BookingScene.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: MovieList },
        { path: '/BookingScene', component: BookingScene },
    ]
})