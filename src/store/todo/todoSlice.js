import { createSlice } from '@reduxjs/toolkit';

// inital state can be array or an object
const initalState = {
	todos: [{ id: Date.now(), text: 'Wash Clothes' }],
	selectedTodo: null,
};

export const todoSlice = createSlice({
	name: 'todo', // for redux dev tools
	initialState: initalState,
	reducers: {
		handleEditTodo: (state, action) =>{
			state.selectedTodo = action.payload;
		},
		addTodo: (state, action) => {
			const todo = { id: Date.now(), text: action.payload };
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo
			);
		},
	},
});

export const {addTodo, removeTodo, updateTodo, handleEditTodo} = todoSlice.actions;

export default todoSlice.reducer;