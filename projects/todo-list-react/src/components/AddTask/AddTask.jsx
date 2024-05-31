/* eslint-disable react/prop-types */
import { useState } from "react";
import { nanoid } from 'nanoid'
import "./AddTask.css";

/**
 * 
 * @function AddTask Componente che aggiungerà le task alla todo-list
 * @param {Function} setTasks funzione setState che muterà lo stato della todo list (tasks)
 * @param {Array} tasks la nostra todo list, necessaria per leggere il valore precedente
 *  
 */
const AddTask = ({ setTasks = () => {}, tasks = [] }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form type="submit">
      <input
        className="input-task"
        type="text"
        placeholder="Inserisci la tua task"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="button-task"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
            setTasks([...tasks, { id: nanoid(), text: inputValue }])
        }}
      >
        Insert
      </button>
    </form>
  );
};

export default AddTask;
