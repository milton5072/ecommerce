<template>
	<div class="container mx-auto">
		<div class="bg-slate-200 py-6">
			<header><NuxtLink to="/">Logo</NuxtLink></header>
		</div>
		<slot />
		<footer class="bg-gray-200">
			<nav>
				<ul class="flex items-center justify-center gap-4 border-t py-6">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/product">Products</NuxtLink></li>
				</ul>
			</nav>
		</footer>
	</div>
</template>
<script></script>

<style scoped>
.router-link-active {
	color: #12b488;
}
</style>
