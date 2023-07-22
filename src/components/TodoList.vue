<script setup lang="ts">
import { ref } from "vue";

const text = ref<string>("");

type Todo = {
	id: number;
	text: string;
};

const todos = ref<Todo[]>([
	{ id: Math.random() * 100000, text: "todo 1" },
	{ id: Math.random() * 100000, text: "todo 2" },
	{ id: Math.random() * 100000, text: "todo 3" },
	{ id: Math.random() * 100000, text: "todo 4" },
	{ id: Math.random() * 100000, text: "todo 5" },
]);

function addTodo(e: Event) {
	e.preventDefault();
	todos.value.push({ id: Math.random(), text: text.value });
}

function removeTodo(id: number) {
	todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
	<form @submit="addTodo">
		<input type="text" v-model="text" />
		<button>ADD</button>
	</form>
	<div v-for="todo in todos">
		{{ todo.text }}
		<button @click="removeTodo(todo.id)">X</button>
	</div>
</template>
