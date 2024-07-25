<template>
	<div class="my-20 relative">
		<Dialog
			:state="dialogState"
			class="animate-pulse absolute top-[-50px] left-0"
		>
			<template #content>please enter your name</template>
		</Dialog>
		<Logo />
		<Input v-model="dialogState"/>
		<span class="flex justify-center mt-10">[ - Home Page - ]</span>
	</div>
	<!-- <button @click="changState">open dialog</button> -->
</template>

<script setup>
const dialogState = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s ease;
	transform-origin: top center;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(-100%);
}
</style>
