import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, description: newDescription }]);
      setNewTask('');
      setNewDescription('');
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Todo List</h1>
      <div className="mb-3">
        <label htmlFor="taskInput" className="form-label">
          Task:
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="taskInput"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">
          Description:
        </label>
        <textarea
          className="form-control"
          id="descriptionInput"
          rows="3"
          placeholder="Enter task description"
          value={newDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      <button className="btn btn-primary btn-lg" onClick={handleAddTask}>
        Add Task
      </button>
      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            <h5>{task.task}</h5>
            <p>{task.description}</p>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleRemoveTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
