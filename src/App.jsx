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

  const handleAddTask = (e) => {
    e.preventDefault();
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
      <form onSubmit={handleAddTask}>
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
        <button className="btn btn-primary btn-lg">Add Task</button>
      </form>
      <ul className="list-group mt-3">
        {tasks.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            No task added.
          </p>
        ) : (
          <div>
            <p
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              You have {tasks.length} {tasks.length === 1 ? "task" : "tasks"}.
            </p>
            {tasks.map((task, idx) => (
              <li
                key={idx}
                className="list-group-item"
                style={{
                  marginBottom: "20px",
                  background: "#ffffff",
                  boxShadow: "2px 2px 14px rgba(0, 0, 0, 0.2)",
                  border: "0px",
                  borderRadius: "8px",
                }}
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
          </div>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
