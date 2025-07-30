import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updatedtask, setUpdatedTasks] = useState([]);
  
  const addTasks = () => {
      const newTasks = {task, description};
      setTasks([newTasks, ...tasks])
      setTask('')
      setDescription('')
  }

  // const handleUpdateTask = (index) => {
      
  // }

  const handleDeleteTask = (i) => {
   const filter  = tasks.filter((_, index) => index !== i)
   setTasks(filter)
  }
  

  return (
    <>
      <div className="task-form">
        <label htmlFor="tasks">Tasks</label>
        <input type="text" id="tasks" value = {task} onChange = {(e) => setTask(e.target.value)}/>

        <label htmlFor="description">Description</label>
        <textarea id="description" value = {description} onChange = {(e) => setDescription(e.target.value)}></textarea>
        <button onClick = {addTasks}>Add Task</button>
      </div>
      <ul>
         {tasks.map((item, index) => (
          <li key = {index}>
             <h3>{item.task}</h3>
             <p>{item.description}</p>
             {/* <button onClick={handleUpdateTask(index)}>Update Task</button> */}
             <button onClick={handleDeleteTask(index)}>Delete Task</button>
          </li>
         ))}
      </ul>
    </>
  );
}

export default App;
