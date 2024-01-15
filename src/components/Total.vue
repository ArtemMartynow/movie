<template>
  <div class="selected-places__total">
			<h3>
        Total: 
        <span>
          {{ $store.state.reservationList.length * 50 }}
          <small>UAN</small>
        </span> 
      </h3>
			<BuyBtn>Next</BuyBtn>
		</div>
</template>

<script>
import BuyBtn from './BuyBtn.vue'

export default {
  data() {
    return {

    }
  },
  components: {
		BuyBtn
	}
}
</script>