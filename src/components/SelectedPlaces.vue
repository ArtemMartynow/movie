<template>
  <div class="selected-places">
    <h2 v-if="$store.state.reservationList.length === 0">
      You didn't pick the place.
    </h2>
    <ul 
      v-else
      :class="
        $store.state.reservationList.length > 3 ? 'ul-scroll' : ''
      "  
    >
      <li 
        class="row-place-price"
      >row <span>place</span> price</li>
      <li
        v-for="res in $store.state.reservationList"
        :key="res.id"
        :id="res.id"
      >
        {{ res.row }} <span>{{ res.place }}</span> 50
        <sub>UAN</sub> <DeleateBtn @click="deleatePlace(res.id)"/>
      </li>
    </ul>
    <div class="selected-places__deleat-all">
      <span>Delete all</span> <DeleateBtn @click="deleateAll" />
    </div>
  </div>
</template>

<script>
import DeleateBtn from './DeleateBtn.vue'

export default {
  data() {
    return {

    }
  },
  methods: {
    deleatePlace(id) {
      this.$store.state.reservationList.forEach((value, key) => {
        if(value.id == id) {
          this.$store.state.reservationList.splice(key, 1)
        } 
      })
      for (let e = 0; e < this.$store.state.places.length; e++) {
        if (this.$store.state.places[e].id == id) {
          this.$store.state.places[e].active = false
        }    
      }
    },
    deleateAll() {
      this.$store.commit('deleateAll')
    }
  },
  components: {
    DeleateBtn
  }
}
</script>