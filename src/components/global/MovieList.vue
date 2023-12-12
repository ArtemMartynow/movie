<script setup>
  let movies = [
    {movieName: 'Miss slone (16+)', img: '/src/assets/images/miss_slone.jpg', session: ['19:30']},
    {movieName: 'First man (0+)', img: '/src/assets/images/first_man.png', session: ['11:45', '16:10', '18:50', '21:30']},
  ]
</script>

<template>
  <div class="movie-list">
    <div 
      class="movie" 
      v-for="movie in movies"
      :key="movie"
    >
      <img :src="movie.img" alt="poster" class="movie__img">
      <div class="movie__content">
        <h2>{{ movie.movieName }}</h2>
        <h3>20 october, saturday</h3>
        <div class="movie__sessions">
          <p class="movie__p">cinetech+, 2d</p>
          <div class="movie__session">
            <a 
              href="#/BookingScene" 
              v-for="session in movie.session"
            >{{ session }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>