import React, { use, useEffect, useState } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'
import './style.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks]);

  const addTask = (task) => {
    setTasks([...tasks,task]);   // add new task to list
  };

  const updateTask =(updatedTask ,index) => {
         const newtask =[...tasks];
         newtask[index] = updatedTask;
         setTasks(newtask)
  }
  const deleteTask=(index) => {
    setTasks(tasks.filter((_,i)=>i!=index))
  }

  const clearTasks =() =>{
    setTasks([]);
  }
  return (
    <div>
      <header>
        <h1>Taskman</h1>
        <p>your friendly Task manager</p>
      </header>

      <Taskform addTask={addTask} /> 
   <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
<Progresstracker tasks={tasks}/>   {/* Add this */}
{tasks.length > 0 && <button className="clear" onClick={clearTasks}>Clear All Tasks</button>}
 </div>
  );
}
