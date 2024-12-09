<template>
	<div class="min-h-[80vh] grid grid-cols-4 gap-8">
		<div class="" v-for="product in products" :key="product.id">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "custom",
});
const products = ref([]);
const res = await $fetch("https://fakestoreapi.com/products");
products.value = res;
</script>

<style scoped></style>
