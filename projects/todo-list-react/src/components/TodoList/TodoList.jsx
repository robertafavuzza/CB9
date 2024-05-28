/* eslint-disable react/prop-types */
import "./TodoList.css";
import Task from "../Task/Task";

// Component TodoList
// accetta due props:
/**
 * 
 * @param {Array} tasks Lista di task da renderizzare
 * @param {String} color Colore per cambiare lo sfondo della lista
 * 
 */
const TodoList = ({ tasks = [], color = "azure" }) => {
  return (
    <ul className="todo-list" style={{ backgroundColor: color }}>
      {tasks.map((task, index) => (
        <Task key={index} textProp={task} />
      ))}
    </ul>
  );
};

export default TodoList;
