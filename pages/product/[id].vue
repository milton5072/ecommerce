<template>
	<div>
		<p class="text-xl">Title: {{ product.title }}</p>
		<p class="font-bold py-4">Price: {{ product.price }}</p>
		<p>Product Description: {{ product.description }}</p>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;
	const uri = "https://fakestoreapi.com/products/" + id;
	const product = await $fetch(uri);
	console.log(product, "asad");
</script>

<style lang="scss" scoped></style>
