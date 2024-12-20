import React, { useState } from "react";
import "./TaskList.css";

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // Safeguard: Ensure tasks is always an array
  const validTasks = Array.isArray(tasks) ? tasks : [];

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
  };

  const saveTask = (e) => {
    e.preventDefault();
    updateTask(editingTaskId, { title: updatedTitle, description: updatedDescription });
    setEditingTaskId(null);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {validTasks.length === 0 ? (
        <p className="empty-message">No tasks available. Add a new task to get started!</p>
      ) : (
        <ul>
          {validTasks.map((task) => (
            <li key={task.id} className="task-item">
              {editingTaskId === task.id ? (
                <form className="edit-form" onSubmit={saveTask}>
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                  />
                  <textarea
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  ></textarea>
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
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
              )}
              {editingTaskId !== task.id && (
                <div className="task-actions">
                  <button onClick={() => startEditing(task)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
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
