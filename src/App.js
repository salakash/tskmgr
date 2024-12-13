// src/App.js
import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    const newTask = {
      id: Date.now(), // Unique ID for each task
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task by ID
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to update a task by ID
  const updateTask = (id, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: updatedTitle, description: updatedDescription }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Task Form Component */}
      <TaskForm addTask={addTask} />

      {/* Task List Component */}
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
