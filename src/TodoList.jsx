import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onEdit, onDelete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No TODO items yet.</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TodoList;
