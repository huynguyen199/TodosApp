import React from 'react';
import TodoScreen from './src/screens/TodoScreen';
import {Provider, useDispatch} from 'react-redux';
import configureStore from './src/redux/configureStore';
import {fetchTodos} from './src/redux/Action/Todos.Action';

const store = configureStore();
store.dispatch(fetchTodos());

const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
};

export default App;
