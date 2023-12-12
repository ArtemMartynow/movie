import MovieList from './MovieList.vue'

const components = [
    {name: 'MovieList', component: MovieList},
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}