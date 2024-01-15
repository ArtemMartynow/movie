import { createRouter, createWebHashHistory } from "vue-router";

import MovieList from '../src/pages/MovieList.vue'
import BookingScene from '../src/pages/BookingScene.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: MovieList, alias: '/' },
        { path: '/booking-scene', component: BookingScene },
    ]
})