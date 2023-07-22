<script setup lang="ts">
import { ref } from "vue";
import Todo from "./Todo.vue";

const text = ref<string>("");

export type Todo = {
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
		<Todo :todo="todo" :removeTodo="removeTodo" />
	</div>
</template>
