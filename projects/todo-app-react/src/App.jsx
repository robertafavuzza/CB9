import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    console.log('Remove Task ID:', id); 
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    console.log('Task ID:', id); 
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete} />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;