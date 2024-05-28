import './App.css'
import { useState } from 'react';
import AddTask from './components/AddTask/AddTask.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

const App = () => {
  // state delle tasks
  const [tasks, setTasksList] = useState([]);

  console.log(tasks)

  return (
    <div>
      <h1>To Do List</h1>
      {/* Passaggio delle props setTasksList e tasks */}
      {/* per poter aggiornare la nostra todo list */}
      <AddTask setTasks={setTasksList} tasks={tasks}/>
      {/* <AddTask setTasks={setTasksList}/> */}
      <div className="container">
        {/* TodoList component che renderizzerà le nostre task in lista */}
        <TodoList tasks={tasks} color="white" />
      </div>
    </div>
  )
}

export default App;