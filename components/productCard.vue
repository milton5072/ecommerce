<template>
	<div class="card text-center">
		<!-- {{ product.title }} -->
	</div>
</template>

<script setup>
	const props = defineProps(["product"]);
	console.log(props, "Props");
</script>

<style scoped></style>
