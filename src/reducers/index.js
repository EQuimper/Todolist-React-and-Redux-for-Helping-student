import { combineReducers } from 'redux';
import TodosReducer from './TodosReducer';

export default combineReducers({
  todos: TodosReducer,
  user: () => ({ name: 'Henry', country: 'USA' })
});
