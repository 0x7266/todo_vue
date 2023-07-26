<script setup lang="ts">
import { ref } from "vue";
import { uid } from "uid";
import Todo from "./Todo.vue";

const text = ref<string>("");

export type Todo = {
	id: string;
	text: string;
	isCompleted: boolean;
	isBeingEdited: boolean;
};

const todos = ref<Todo[]>([
	{
		id: uid(),
		text: "todo 1",
		isCompleted: false,
		isBeingEdited: false,
	},
	{
		id: uid(),
		text: "todo 2",
		isCompleted: true,
		isBeingEdited: false,
	},
	{
		id: uid(),
		text: "todo 3",
		isCompleted: false,
		isBeingEdited: false,
	},
	{
		id: uid(),
		text: "todo 4",
		isCompleted: true,
		isBeingEdited: false,
	},
	{
		id: uid(),
		text: "todo 5",
		isCompleted: false,
		isBeingEdited: false,
	},
]);

function addTodo(e: Event) {
	e.preventDefault();
	todos.value.push({
		id: uid(),
		text: text.value,
		isCompleted: false,
		isBeingEdited: false,
	});
}

function toggleEditTodo(index: number) {
	todos.value[index].isBeingEdited = !todos.value[index].isBeingEdited;
}

function updateTodo(index: number, payload: string) {
	todos.value[index].text = payload;
	toggleEditTodo(index);
}

function removeTodo(id: string) {
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
			<div v-for="(todo, index) in todos">
				<Todo
					:todo="todo"
					:index="index"
					@toggleComplete="
						(index) => (todos[index].isCompleted = !todos[index].isCompleted)
					"
					@toggleEditTodo="toggleEditTodo"
					@updateTodo="updateTodo"
					@removeTodo="removeTodo"
				/>
			</div>
		</ul>
	</div>
</template>
