import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    const newTask = { title, description };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
