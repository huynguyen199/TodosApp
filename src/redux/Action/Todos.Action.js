import axios from 'axios';

const types = {
  GET_TODO: 'GET_TODO',
  ADD_TODO: 'ADD_TODOS',
  DELETE_TODO: 'DELETE_TODOS',
  COMPLETE_TODO: 'COMPLETE_TODO',
};
export default types;

export const addTodos = payload => {
  return {type: types.ADD_TODO, payload};
};

export const getTodos = payload => {
  return {type: types.GET_TODO, payload};
};

export const deleteTodos = id => {
  return {type: types.DELETE_TODO, payload: {id}};
};

export const compoletedTodo = id => {
  return {type: types.COMPLETE_TODO, payload: {id}};
};

export const fetchTodos = () => {
  return async dispatch => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    console.log('response', response);
    // dispatch(getTodos(response.data));
    dispatch({type: types.GET_TODO, payload: response.data});
  };
};

export const postTodos = data => {
  console.log('test post');
  return async dispatch => {
    try {
      const body = data;
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        body,
      );
      console.log('response', response);
      dispatch(addTodos(response.data));
    } catch (err) {
      console.log('error', err);
    }
  };
};

export const removeTodos = data => {
  console.log('test post');
  return async dispatch => {
    const body = data;
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      body,
    );
    console.log('response', response);
    dispatch(addTodos(response.data));
  };
};
