import * as types from './actionTypes';

export const addTodo = todo => ({
  type: types.ADD_TODO,
  todo
});

export const toggleCompleted = id => ({
  type: types.TOGGLE_COMPLETED,
  id
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

export const deleteCompleted = () => ({ type: types.DELETE_ALL_COMPLETED });
