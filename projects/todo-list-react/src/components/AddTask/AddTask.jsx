/* eslint-disable react/prop-types */
import { useState } from "react";
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
    <div>
      <input
        className="input-task"
        type="text"
        placeholder="Inserisci la tua task"
        onChange={(e) => {
          // aggiorno lo state all'inserimento di ogni carattere
          setInputValue(e.target.value);
        }}
      />
      <button
        className="button-task"
        type="button"
        onClick={() => {
            // aggiorno la to do list con il nuovo valore inserito nel campo input
            setTasks([...tasks, inputValue])
        //   setTasks(prev => [...prev, inputValue]);
        }}
      >
        Insert
      </button>
    </div>
  );
};

export default AddTask;
