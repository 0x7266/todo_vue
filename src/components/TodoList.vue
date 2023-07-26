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
	<div class="w-full flex flex-col items-center gap-5">
		<form class="flex gap-3 w-1/3" @submit="addTodo">
			<input class="py-2 px-3 rounded w-full" type="text" v-model="text" />
			<button
				class="py-3 px-5 rounded bg-blue-600 font-semibold text-white hover:bg-blue-700 transition-all"
			>
				ADD
			</button>
		</form>
		<ul class="flex flex-col gap-2 w-1/3">
			<div v-for="todo in todos">
				<Todo :todo="todo" :removeTodo="removeTodo" />
			</div>
		</ul>
	</div>
</template>
