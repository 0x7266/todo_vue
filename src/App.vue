<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
	<div class="bg-zinc-500 min-h-screen">
		<div
			class="container md:w-3/5 mx-auto bg-zinc-400 min-h-screen flex flex-col items-center gap-10 shadow"
		>
			<Header />
			<RouterView />
		</div>
	</div>
</template>
