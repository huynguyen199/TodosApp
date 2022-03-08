import types from '../Action/Todos.Action';

const initialTodos = [];

export default (state = initialTodos, action) => {
  switch (action.type) {
    case types.GET_TODO:
      return [...action.payload];

    case types.ADD_TODO:
      return [...state, action.payload];
    case types.DELETE_TODO:
      return state.filter(item => item.id !== action.payload.id);
    case types.COMPLETE_TODO:
      const todo = [...state];
      const index = state.findIndex(item => item.id === action.payload.id);
      const isCompleted = todo[index].completed;
      todo[index].completed = !isCompleted;
      console.log('todo');
      return todo;
    default:
      return state;
  }
};
