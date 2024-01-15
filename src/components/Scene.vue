<template>
  <div class="scene">
    <div class="scene__screen">
      <h2>screen</h2>
    </div>
    <Places />
  </div>    
</template>

<script>
import Places from './Places.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Places
  },
  beforeCreate() {
    if(this.$store.state.places.length === 0) {
      return this.$store.commit('createPlaces')
    } 
  }
}
</script>