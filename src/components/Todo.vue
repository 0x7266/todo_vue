<script setup lang="ts">
import { Todo } from "./TodoList.vue";

let { todo, index } = defineProps<{ todo: Todo; index: number }>();
defineEmits(["toggleComplete", "removeTodo"]);
</script>

<template>
	<div class="flex justify-between items-center gap-5 text-xl">
		<input
			class="h-5 w-5"
			type="checkbox"
			@input="$emit('toggleComplete', index)"
		/>
		<span
			class="grow font-semibold"
			:class="{ 'line-through': todo.isCompleted }"
		>
			{{ todo.text }}
		</span>
		<button class="" @click="$emit('removeTodo', todo.id)">❌</button>
	</div>
</template>
