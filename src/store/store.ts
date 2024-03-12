import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
