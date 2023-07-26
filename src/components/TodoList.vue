<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { uid } from "uid";
import Todo from "./Todo.vue";

const text = ref<string>("");
const errorMsg = ref<string>("");

export type Todo = {
	id: string;
	text: string;
	isCompleted: boolean;
	isBeingEdited: boolean;
};

const todos = ref<Todo[]>([]);

watch(
	todos,
	() => {
		setTodosOnLocalStorage();
	},
	{ deep: true }
);

(() => {
	const list = localStorage.getItem("todos");
	if (list) {
		todos.value = JSON.parse(list);
	}
})();

function setTodosOnLocalStorage() {
	localStorage.setItem("todos", JSON.stringify(todos.value));
}

const todosCompleted = computed(() => {
	return todos.value.every((todo) => todo.isCompleted);
});

function addTodo(e: Event) {
	e.preventDefault();
	if (text.value === "") {
		errorMsg.value = "todo can't be blank";
		return;
	}
	todos.value.push({
		id: uid(),
		text: text.value,
		isCompleted: false,
		isBeingEdited: false,
	});
	text.value = "";
	errorMsg.value = "";
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
	<main class="w-full px-4 flex flex-col items-center gap-5 lg:px-10 xl:w-5/6">
		<form class="flex gap-3 w-full" @submit="addTodo">
			<input
				class="py-2 px-3 rounded w-full"
				type="text"
				v-model="text"
				:class="{
					'outline outline-2 outline-red-400 focus-within:outline-red-400 focus-within:outline-2':
						errorMsg,
				}"
			/>
			<button
				class="py-3 px-5 rounded bg-blue-600 font-semibold text-white hover:bg-blue-700 transition-all"
			>
				ADD
			</button>
		</form>
		<p
			v-if="errorMsg"
			class="text-2xl text-red-700 rounded text-center py-1 px-5"
		>
			<span class="">{{ errorMsg }}</span>
		</p>
		<ul class="flex flex-col gap-2 w-full" v-else-if="todos.length > 0">
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
		<p v-else class="todos-msg">
			<span class="text-2xl">😌 you have no todos! add one!</span>
		</p>
		<p v-if="todosCompleted && todos.length > 0" class="todos-msg">
			<span class="text-2xl">you have completed all your todos! 🎉</span>
		</p>
	</main>
</template>
