import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Todo[];
  selectedTodo: Todo | null;
}

const initialState: TodoState = {
  todos: [],
  selectedTodo: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    handleEditTodo: (state, action: PayloadAction<Todo | null>) => {
      state.selectedTodo = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: Todo = { id: Date.now(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, handleEditTodo } = todoSlice.actions;

export default todoSlice.reducer;
