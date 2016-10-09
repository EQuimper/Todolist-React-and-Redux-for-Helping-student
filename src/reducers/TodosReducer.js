import * as types from '../actions/actionTypes';

const initialState = [
  {
    text: 'Todo1',
    completed: false,
    id: Math.floor(Math.random() * 100) + 1
  },
  {
    text: 'Todo2',
    completed: true,
    id: Math.floor(Math.random() * 100) + 1
  },
  {
    text: 'Todo3',
    completed: false,
    id: Math.floor(Math.random() * 100) + 1
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.todo,
          completed: false,
          id: Math.floor(Math.random() * 100) + 1
        }
      ];
    case types.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            completed: !todo.completed
          } :
        todo);
    case types.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );
    case types.DELETE_ALL_COMPLETED:
      return state.filter(todo =>
        !todo.completed
      );
    default:
      return state;
  }
}
