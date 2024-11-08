import React from 'react';

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.details}</p>
      <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
