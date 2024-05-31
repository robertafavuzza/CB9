import './App.css'
import { useState } from 'react';
import AddTask from './components/AddTask/AddTask.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

const App = () => {
  const [tasks, setTasksList] = useState([]);

  return (
    <div>
      <h1>To Do List</h1>
      <AddTask setTasks={setTasksList} tasks={tasks}/>
      <div className="container">
        <TodoList tasks={tasks} color="white" setTasks={setTasksList} />
      </div>
    </div>
  )
}

export default App;