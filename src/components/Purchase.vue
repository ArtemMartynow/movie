<template>
	<div class="purchase">
		<h2>Selected places</h2>
		<SelectedPlaces />
		<Total />
	</div>
</template>

<script>
import SelectedPlaces from './SelectedPlaces.vue'
import Total from './Total.vue'

export default {
	data() {
		return {

		}
	},
	components: {
		SelectedPlaces,
		Total
	}
}
</script>