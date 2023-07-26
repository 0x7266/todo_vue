<script setup lang="ts">
import { Todo } from "./TodoList.vue";

type Props = {
	todo: Todo;
	removeTodo: (id: number) => void;
};

let { todo, removeTodo } = defineProps<Props>();
defineEmits(["completeTodo"]);
</script>

<template>
	<div class="flex justify-between items-center gap-5 text-xl">
		<input
			class="h-5 w-5"
			type="checkbox"
			@input="$emit('completeTodo', todo.id)"
		/>
		<span
			class="grow font-semibold"
			:class="{ 'line-through': todo.isCompleted }"
		>
			{{ todo.text }}
		</span>
		<button class="" @click="removeTodo(todo.id)">❌</button>
	</div>
</template>
