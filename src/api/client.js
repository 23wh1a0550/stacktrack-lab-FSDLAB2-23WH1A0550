// TODO: Set the base URL for your API

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// GET tasks
export const getTasks = () => API.get("/tasks");

// DELETE task
export const deleteTaskById = (id) => API.delete(`/tasks/${id}`);

// CREATE task
export const createTask = (data) => API.post("/tasks", data);