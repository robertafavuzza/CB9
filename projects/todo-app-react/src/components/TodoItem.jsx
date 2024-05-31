import React from 'react';
import './TodoItem.css';

function TodoItem({ task, removeTask, toggleComplete }) {
  if (!task) return null;
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>x</button>
    </div>
  );
}

export default TodoItem;