import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  
  const addTask = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(), 
      text: inputValue,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInputValue(''); 
  };
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      
      {}
      <form onSubmit={addTask} className="input-group">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {}
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span>{task.text}</span>
              </div>
              <button 
                className="delete-btn" 
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App