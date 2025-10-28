// routes/taskRoutes.js

import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);  // Existing route
router.post('/', validateTask, taskController.createTask);  // Existing route

// New route to get task by ID
router.get('/:id', taskController.getTaskById);

export default router;
