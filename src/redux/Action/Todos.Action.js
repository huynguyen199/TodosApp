const types = {
  ADD_TODO: 'ADD_TODOS',
  DELETE_TODO: 'DELETE_TODOS',
  COMPLETE_TODO: 'COMPLETE_TODO',
};
export default types;

export const addTodos = payload => {
  return {type: types.ADD_TODO, payload};
};

export const deleteTodos = id => {
  return {type: types.DELETE_TODO, payload: {id}};
};

export const compoletedTodo = id => {
  return {type: types.COMPLETE_TODO, payload: {id}};
};
