// services/taskService.js

import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

// New service function to fetch a task by ID
export async function getTaskById(id) {
  return taskRepository.findById(id);
}
