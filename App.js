import React from 'react';
import TodoScreen from './src/screens/TodoScreen';
import {Provider} from 'react-redux';
import configureStore from './src/redux/configureStore';
const store = configureStore();

const App = () => {
  console.log('test');
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
};

export default App;
