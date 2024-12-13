// src/components/TaskForm/TaskForm.js
import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    // Add task via parent-provided function
    addTask({ title, description });

    // Clear form and error
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
            placeholder="Enter task title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
