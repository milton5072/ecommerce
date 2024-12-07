<template>
	<div>
		<p>Product Details for {{ id }}</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore vel
			corrupti. Aut corrupti voluptate aliquam dolorum? A, unde explicabo?
		</p>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
