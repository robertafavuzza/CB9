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
<<<<<<< HEAD
          // aggiorno lo state all'inserimento di ogni carattere
          setInputValue([e.target.value]);
=======
          setInputValue(e.target.value);
>>>>>>> 7885f266fd4e92f286ba48647e868b2439220b2a
        }}
      />
      <button
        className="button-task"
<<<<<<< HEAD
        type="button"
        onClick={() => {
            // aggiorno la to do list con il nuovo valore inserito nel campo input
            setTasks({id: 0, text: e.target.value})
        //   setTasks(prev => [...prev, inputValue]);
=======
        type="submit"
        onClick={(e) => {
          e.preventDefault();
            setTasks([...tasks, { id: nanoid(), text: inputValue }])
>>>>>>> 7885f266fd4e92f286ba48647e868b2439220b2a
        }}
      >
        Insert
      </button>
    </form>
  );
};

export default AddTask;
