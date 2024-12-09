<template>
	<div class="flex items-start justify-between gap-4 py-12">
		<div class="w-1/4">
			<img class="w-full" :src="product.image" alt="" />
		</div>
		<div class="w-2/3">
			<p class="text-xl">Title: {{ product.title }}</p>
			<p class="font-bold py-4">Price: {{ product.price }}</p>
			<p>Product Description: {{ product.description }}</p>
		</div>
	</div>
</template>

<script setup>
const product = ref({});
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const res = await $fetch(uri);
product.value = res;
// console.log(product, "asad");
</script>

<style lang="scss" scoped></style>
