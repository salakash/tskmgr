// src/components/TaskList/TaskList.js
import React, { useState } from "react";
import "./TaskList.css";

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // Start editing mode for a task
  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
  };

  // Save updated task and exit editing mode
  const saveTask = (e) => {
    e.preventDefault();
    updateTask(editingTaskId, updatedTitle, updatedDescription);
    setEditingTaskId(null);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks available. Add a new task to get started!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editingTaskId === task.id ? (
                <form className="edit-form" onSubmit={saveTask}>
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    required
                  />
                  <textarea
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                  <button type="submit" className="btn-save">Save</button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setEditingTaskId(null)}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="task-content">
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-description">{task.description || "No description provided"}</p>
                </div>
              )}
              {editingTaskId !== task.id && (
                <div className="task-actions">
                  <button
                    className="btn-edit"
                    onClick={() => startEditing(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
