import React from 'react';

export const TodosView = ({
  todos,
  addTodo,
  toggleCompleted,
  deleteTodo,
  deleteCompleted
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const todo = form.querySelector('[name="todo"]').value;
    addTodo(todo);
    e.target.querySelector('[name="todo"]').value = '';
  }
  return (
    <div>
      <h1>{todos.filter(todo => todo.completed ).length} completed / {todos.length} todos</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="todo" placeholder="Add new todo" />
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <h3 style={todo.completed ? { color: 'red'} : null}>{todo.text}</h3>
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
      {todos.filter(todo => todo.completed).length < 1 ? null : (
        <button
          onClick={() => {
            if(confirm(`Are you sure you want to delete all the completed todo?`)) {
              deleteCompleted()
            }
          }}>
          DELETE ALL COMPLETED
        </button>
      )}
    </div>
  )
}
