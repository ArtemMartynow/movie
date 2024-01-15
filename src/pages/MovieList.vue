<template>
  <div class="movie-list">
    <div 
      class="movie" 
      v-for="movie in $store.state.movies"
      :key="movie.name"
    >
      <img :src="movie.img" alt="poster" class="movie__img">
      <div class="movie__content">
        <h2>{{ movie.movieName }}</h2>
        <h3>{{ movie.date }}</h3>
        <div class="movie__sessions">
          <p class="movie__p">{{ movie.type }}</p>
          <div class="movie__session">
            <router-link 
              to="/booking-scene" 
              v-for="session in movie.session"
              :key="session"
              @click="
                $store.state.timeSession = 
                  movie.movieName + ' : ' + session
              "
            >{{ session }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>