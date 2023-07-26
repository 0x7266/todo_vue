<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
	<header class="bg-zinc-300 w-full flex justify-around items-center pt-3 pb-5">
		<strong class="text-5xl">📃</strong>
		<nav class="flex gap-4 text-2xl font-semibold">
			<RouterLink to="/">home</RouterLink>
			<RouterLink to="/about">about</RouterLink>
		</nav>
	</header>
</template>
