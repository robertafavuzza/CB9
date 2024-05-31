/* eslint-disable react/prop-types */
import { useEffect} from "react";
import "./Task.css";

// Componente Atomico Task
// accetta una prop textProp di tipo stringa dal valore di default 'placeholder'
const Task = ({ text, handleClick }) => {

    useEffect(() => {
        console.log('Task Mounted')

        return () => {
            console.log('Task Unmounted')
        }
    }, [])

  return (
    <li className="task">
      <span onClick={handleClick} className="close-button">
        x
      </span>{" "}
      {text}
    </li>
  );
};

export default Task;