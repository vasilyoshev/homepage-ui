import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TodoSliceState } from 'interfaces';

const initialState: Array<TodoSliceState> = [
  {
    id: '12412',
    text: 'Walk the dog',
    completed: false,
  },
  {
    id: '124121',
    text: 'Make app',
    completed: false,
  },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false });
      return state;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if(todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;
