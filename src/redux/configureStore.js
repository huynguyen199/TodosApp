import {compose, createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // composeEnhancers,r
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};

export default configureStore;
