<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "./TodoList.vue";
defineEmits(["toggleComplete", "toggleEditTodo", "updateTodo", "removeTodo"]);
let { todo, index } = defineProps<{ todo: Todo; index: number }>();
const editPayload = ref(todo.text);
</script>

<template>
	<div
		class="flex justify-between items-center gap-5 text-2xl bg-zinc-600 rounded p-4"
	>
		<input
			class="h-5 w-5"
			type="checkbox"
			:checked="todo.isCompleted"
			@input="$emit('toggleComplete', index)"
			@submit="$emit('updateTodo', editPayload)"
		/>
		<div class="grow font-semibold">
			<form
				v-if="todo.isBeingEdited"
				@submit="$emit('updateTodo', index, editPayload)"
			>
				<input
					type="text"
					v-model="editPayload"
					class="w-full bg-transparent outline-none text-zinc-200"
				/>
			</form>
			<span v-else :class="{ 'line-through opacity-30': todo.isCompleted }">
				{{ todo.text }}
			</span>
		</div>
		<div class="flex gap-2">
			<div>
				<button
					v-if="todo.isBeingEdited"
					@click="$emit('updateTodo', index, editPayload)"
				>
					✔
				</button>
				<button
					:disabled="todo.isCompleted"
					v-else
					@click="$emit('toggleEditTodo', index)"
					:class="{ 'disabled:opacity-20': todo.isCompleted }"
					class="transition-all duration-500"
				>
					✏
				</button>
			</div>
			<button class="" @click="$emit('removeTodo', todo.id)">❌</button>
		</div>
	</div>
</template>
