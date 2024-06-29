"use client";

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaPlus, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/todolist.module.scss';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    if (currentTask.trim() !== '') {
      const newTask = {
        id: nanoid(),
        text: currentTask,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={styles.todolistContainer}>
      <h1 className={styles.title}>TODO <span className={styles.highlight}>LIST</span></h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Cose da fare..."
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)} className={styles.removeButton}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <Link href="/counter" className={styles.linkButton}>Vai al Counter</Link>
    </div>
  );
}
