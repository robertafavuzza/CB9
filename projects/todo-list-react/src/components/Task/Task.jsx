/* eslint-disable react/prop-types */
import './Task.css';

// Componente Atomico Task
// accetta una prop textProp di tipo stringa dal valore di default 'placeholder'
const Task = ({ textProp = 'placeholder' }) => {
    return (
 <li className="task">
<span onClick={() => console.log('click')} className="close-button">X</span>{ textProp }</li>
    )
}

export default Task;