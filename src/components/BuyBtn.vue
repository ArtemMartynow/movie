<template>
  <button
    class="buy-btn"
    @click="buyTickets"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    buyTickets() {
      this.$store.commit('buyTickets')
      this.$store.commit('deleateAll')
    }
  }
}
</script>