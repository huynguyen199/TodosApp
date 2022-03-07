import {createAction, createSlice} from '@reduxjs/toolkit';

export const initialState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.filter(item => item.id !== action.payload.id);
    },
    completeTodo: (state, action) => {
      // console.log('state', action.payload);
      const index = state.findIndex(item => item.id === action.payload);

      const isCompleted = state[index].completed;
      state[index].completed = !isCompleted;
    },
  },
});

export const action = todoSlice.actions;

export default todoSlice.reducer;
