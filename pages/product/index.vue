<template>
	<div class="min-h-[80vh] grid grid-cols-4 gap-4">
		<div class="" v-for="product in products" :key="product.id">
			<div>
				<NuxtLink :to="`product/${product.id}`">{{ product.title }}</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
// definePageMeta({
//   layout: "custom",
// });
const products = await $fetch("https://fakestoreapi.com/products");
console.log(products, "sfj");
</script>

<style lang="scss" scoped></style>
