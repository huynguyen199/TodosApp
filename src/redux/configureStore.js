import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // // composeEnhancers,r
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    composedEnhancer,
  );
  return store;
};

export default configureStore;
