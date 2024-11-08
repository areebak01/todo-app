import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    setEditingTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <button onClick={() => setEditingTodo({})}>Add TODO</button>
      {editingTodo && (
        <TodoForm
          todo={editingTodo}
          onSave={editingTodo.id ? updateTodo : addTodo}
          onCancel={() => setEditingTodo(null)}
        />
      )}
      <TodoList todos={todos} onEdit={startEditing} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
