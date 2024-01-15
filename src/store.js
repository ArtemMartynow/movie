import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      movies: [
            {
                movieName: 'Miss slone (16+)',
                img: '/src/assets/images/miss_slone.jpg',
                session: ['19:30'],
                type: 'cinetech+, 2d',
                date: '20 october, saturday'
            },
            {
                movieName: 'First man (0+)',
                img: '/src/assets/images/first_man.png',
                session: ['11:45', '16:10', '18:50', '21:30'],
                type: 'cinetech+, 2d',
                date: '20 october, saturday'
            },
      ],
      row: 10,
      place: 21,
      id: 0,
      places: [],
      reservationList: [],
      modalWindow: false,
      timeSession: ''
    }
  },
  mutations: {
    createPlaces(state) {
      for(let i = 0; i < state.row; i++) {
        for(let j = 0; j < state.place; j++) {
          state.places.push({ 
            row: i + 1, place: j + 1, active: false, id: state.id++
          })
        }
      }
    },
    deleateAll(state) {
      state.reservationList = []
      for (let q = 0; q < state.places.length; q++) {
        state.places[q].active = false    
      }
    },
    buyTickets(state) {
      state.modalWindow = true
    }
  }
})

  export default store