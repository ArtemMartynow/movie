<template>
	<div class="booking-scene">
		<div class="time-session">
			<h2>{{ $store.state.timeSession }}</h2>
		</div>
		<Scene />
		<Purchase />
		<ModalWindow />
	</div>
</template>

<script>
import Scene from '../components/Scene.vue'
import Purchase from '../components/Purchase.vue'
import ModalWindow from '@/components/ModalWindow.vue'

export default {
	data() {
		return {
				
		}
	},
	components: {
		Scene,
		Purchase,
		ModalWindow
	}
}
</script>