// repositories/taskRepo.js

import prisma from '../config/db.js';

// Fetch all tasks
export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

// New function to fetch a task by ID
export async function findById(id) {
  return prisma.task.findUnique({
    where: {
      id: id,
    },
  });
}
