import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // 👈 for tracking update

  const addOrUpdateTask = () => {
    const newTask = { task, description };

    if (editIndex !== null) {
      // Update existing
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null); // Reset edit mode
    } else {
      // Add new
      setTasks([newTask, ...tasks]);
    }

    setTask('');
    setDescription('');
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.task);
    setDescription(taskToEdit.description);
    setEditIndex(index);
  };

  const handleDeleteTask = (indexToDelete) => {
    const filtered = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(filtered);
    if (editIndex === indexToDelete) {
      setEditIndex(null); // Clear edit if that task was being edited
      setTask('');
      setDescription('');
    }
  };

  return (
    <>
      <div className="task-form">
        <label htmlFor="tasks">Tasks</label>
        <input
          type="text"
          id="tasks"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={addOrUpdateTask}>
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3>{item.task}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
