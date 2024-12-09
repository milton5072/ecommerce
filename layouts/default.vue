<template>
	<div class="container mx-auto">
		<header>
			<nav>
				<ul class="flex items-center justify-center gap-4 border-b py-6">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/product">Products</NuxtLink></li>
				</ul>
			</nav>
		</header>
		<slot />
	</div>
</template>
<script></script>

<style scoped>
.router-link-active {
	color: #12b488;
}
</style>
