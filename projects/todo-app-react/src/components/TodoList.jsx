import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ tasks, removeTask, toggleComplete }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;