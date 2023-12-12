<script setup>
  import { ref } from 'vue';

// create array places
  let places = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 21; j++) {
      places.push({row: i+1, place: j+1, active: false})
    }
  }

  for (let f = 0; f < places.length; f++) {
    places[f].id = f
  }

// reservation list
  let reservationList = ref([])

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('place')) { return }
    let placeId = e.target.id

    let reservation = places.find(item => item.id == placeId)
    reservationList.value.push({row: reservation.row, reservation: reservation.place, id: placeId});
  }); 

// deleate palce
  const deletePlace = () => {
    document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('deleate')) { return }
    let Id = e.target.id

    // deleate palce in reservationList
    reservationList.value.forEach((el, i) => {
    if (el.id == Id) reservationList.value.splice(i, 1)
    })

    // deleate palce in places
    for (let e = 0; e < places.length; e++) {
      if (places[e].id == Id) {
        places[e].active = false
      }    
    }
  });
  }

  const deleateAll = () => {
    reservationList.value = []
    for (let q = 0; q < places.length; q++) {
      places[q].active = false    
    }
  }

  // tickets bought
  const ticketsBought = () => {
    const url = new URL('http://localhost:5174/#/BookingScene')
    if (reservationList.value.length !== 0) {
      alert('tickets bought')
      window.location.href='#'
    }
    if (reservationList.value.length === 0) {
      alert('select seats')
    }
  }
</script>

<template>
  <div class="booking-scene">
    <div class="screen">
      <h3>screen</h3>
      <div class="scene">
        <span 
          v-for="place in places"
          :key="place"
          :class="place.active ? 'place-active' : 'place'"
          :id="place.id"
          @click="place.active = true"
        ></span>
      </div>
    </div>
    <div class="purchase">
      <h2>Selected places</h2>
      <div class="selected-places">
        <p>row <span>place</span>  price</p>
        <div 
          class="selected-places__place"
          v-for="resPlace in reservationList"
          :key="resPlace.id"
          :id="resPlace.id"
        >
          <span>{{ resPlace.row }}</span>
          <span>{{ resPlace.reservation }}</span>
          <span id="price">50 UAN</span>
          <button 
            class="deleate" 
            :id="resPlace.id" 
            @click="deletePlace()"
          ></button>
        </div>
      </div>
      <div
        class="selected-places__deleate-all"
        v-if="reservationList.length !== 0"
        >
        <p>All deleate</p>
        <button 
          class="deleate deleate-all" 
          @click="deleateAll"
        ></button>
      </div>
      <div class="total">
        <h3>Total:</h3>
        <p>{{ reservationList.length * 50 + 'UAN' }}</p>
        <button
          class="next"
          @click="ticketsBought"
        >Next</button>
      </div>
    </div>
  </div>
</template>