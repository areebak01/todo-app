import React, { useState, useEffect } from 'react';

function TodoForm({ todo, onSave, onCancel }) {
  const [title, setTitle] = useState(todo.title || '');
  const [details, setDetails] = useState(todo.details || '');
  const [dueDate, setDueDate] = useState(todo.dueDate || '');

  useEffect(() => {
    setTitle(todo.title || '');
    setDetails(todo.details || '');
    setDueDate(todo.dueDate || '');
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate) {
      onSave({ ...todo, title, details, dueDate });
    } else {
      alert('Please enter a title and due date.');
    }
  };

  return (
    <div className="todo-form">
      <h2>{todo.id ? 'Edit TODO' : 'Add TODO'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Details:
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <button type="submit">{todo.id ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default TodoForm;
