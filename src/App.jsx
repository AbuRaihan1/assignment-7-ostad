import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { task: newTask, description: newDescription }]);
      setNewTask("");
      setNewDescription("");
    }
  };

  const handleRemoveTask = (index) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (shouldDelete) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Todo App</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control"
          id="taskInput"
          placeholder="Task Title"
          value={newTask}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="descriptionInput"
          rows="3"
          placeholder="Task description"
          value={newDescription}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <button className="btn btn-primary btn-lg" onClick={handleAddTask}>
        Add Task
      </button>
      <ul className="list-group mt-3">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="list-group-item border rounded"
            style={{ marginBottom: "20px", background: "#e6e0e0" }}
          >
            <h5>{task.task}</h5>
            <p style={{ overflow: "auto" }}>{task.description}</p>
            <button
              className="btn btn-danger btn-md float-end"
              style={{ marginTop: "-52px" }}
              onClick={() => handleRemoveTask(idx)}
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
