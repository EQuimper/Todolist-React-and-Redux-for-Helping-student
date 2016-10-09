import React from 'react';
import { connect } from 'react-redux';
import { TodosView } from './TodosView';
import * as actions from '../../actions/TodosActions';

const mapState = state => ({
  todos: state.todos
});

export default connect(mapState, actions)(TodosView);
