import {combineReducers} from 'redux';
import TodosReducer from './Reducers/Todos.Reducer';

const rootReducer = combineReducers({
  todos: TodosReducer,
});

export default rootReducer;
