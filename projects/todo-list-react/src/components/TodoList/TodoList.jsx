/* eslint-disable react/prop-types */
import "./TodoList.css";
import Task from "../Task/Task";

/**
 * 
 * @param {Array} tasks Lista di task da renderizzare
 * @param {String} color Colore per cambiare lo sfondo della lista
 * 
 */
const TodoList = ({ tasks = [], color = "azure", setTasks }) => {

  const handleDeleteClick = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <ul className="todo-list" style={{ backgroundColor: color }}>
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} handleClick={() => handleDeleteClick(task.id)} />
      ))}
    </ul>
  );
};

export default TodoList;
