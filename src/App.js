import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { fetchTasks, createTask, updateTask, deleteTask } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Create a new task
  const handleAddTask = (task) => {
    createTask(task)
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => console.error("Error creating task:", error));
  };

  // Update an existing task
  const handleUpdateTask = (id, updatedTask) => {
    updateTask(id, updatedTask)
      .then(() => {
        setTasks(
          tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
        );
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="App">
      <Header />
      <TaskForm addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        updateTask={handleUpdateTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
