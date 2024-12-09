<template>
	<div class="text-center">
		<img class="h-24 mx-auto" :src="product.image" alt="" />
		<p class="truncate">{{ product.title }}</p>
		<NuxtLink
			:to="`/product/${product.id}`"
			class="w-full block text-white bg-green-700 py-1"
			>View Details</NuxtLink
		>
	</div>
</template>

<script setup>
defineProps({
	product: {
		type: Object,
	},
});
// console.log(props, "Props");
</script>

<style scoped></style>
