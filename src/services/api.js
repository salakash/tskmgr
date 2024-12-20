import axios from "axios";

// Base URL for API Gateway
const API_BASE_URL = "https://g7t5te4brd.execute-api.eu-west-1.amazonaws.com/Prod";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API functions
export const fetchTasks = () => api.get("/tasks");
export const createTask = (task) => api.post("/tasks", task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export default api;
