<script setup lang="ts">
import { Todo } from "./TodoList.vue";

type Props = {
	todo: Todo;
	removeTodo: (id: number) => void;
};

let { todo, removeTodo } = defineProps<Props>();
</script>

<template>
	{{ todo.text }}
	<button @click="removeTodo(todo.id)">X</button>
</template>
