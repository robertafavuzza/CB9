import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './TodoForm.css';

function TodoForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newTask = { id: nanoid(), text: inputValue.slice(0, 60), completed: false };
    console.log('New Task ID:', newTask.id); 
    addTask(newTask);
    setInputValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={inputValue}
        maxLength={60}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;