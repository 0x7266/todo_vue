<script setup lang="ts">
import { ref } from "vue";
import Todo from "./Todo.vue";

const text = ref<string>("");

export type Todo = {
	id: number;
	text: string;
	isCompleted: boolean;
};

const todos = ref<Todo[]>([
	{ id: Math.random() * 100000, text: "todo 1", isCompleted: false },
	{ id: Math.random() * 100000, text: "todo 2", isCompleted: true },
	{ id: Math.random() * 100000, text: "todo 3", isCompleted: false },
	{ id: Math.random() * 100000, text: "todo 4", isCompleted: true },
	{ id: Math.random() * 100000, text: "todo 5", isCompleted: false },
]);

function addTodo(e: Event) {
	e.preventDefault();
	todos.value.push({ id: Math.random(), text: text.value, isCompleted: false });
}

function removeTodo(id: number) {
	todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
	<div
		class="w-full px-4 flex flex-col items-center gap-5 lg:px-10 xl:w-4/6 xl:max-w-3xl"
	>
		<form class="flex gap-3 w-full" @submit="addTodo">
			<input class="py-2 px-3 rounded w-full" type="text" v-model="text" />
			<button
				class="py-3 px-5 rounded bg-blue-600 font-semibold text-white hover:bg-blue-700 transition-all"
			>
				ADD
			</button>
		</form>
		<ul class="flex flex-col gap-2 w-full">
			<div v-for="todo in todos">
				<Todo
					:todo="todo"
					:removeTodo="removeTodo"
					@completeTodo="(id) => todos.find(t => t.id === id)!.isCompleted = !todos.find(t => t.id)?.isCompleted"
				/>
			</div>
		</ul>
	</div>
</template>
