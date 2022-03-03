import React from 'react';
import TodoScreen from './src/screens/TodoScreen';
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
};

export default App;
