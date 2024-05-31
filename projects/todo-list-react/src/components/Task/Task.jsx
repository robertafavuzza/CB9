/* eslint-disable react/prop-types */
import { useEffect} from "react";
import "./Task.css";

// Componente Atomico Task
// accetta una prop textProp di tipo stringa dal valore di default 'placeholder'
<<<<<<< HEAD
const Task = ({ textProp = 'placeholder' }) => {
    return (
 <li className="task">
<span onClick={() => console.log('click')} className="close-button">X</span>{ textProp }</li>
    )
}
=======
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
>>>>>>> 7885f266fd4e92f286ba48647e868b2439220b2a

export default Task;