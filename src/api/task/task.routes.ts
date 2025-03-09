import express from 'express';
import { createTask, getAllTask } from './task.controller';

const taskRouter = express.Router();

// Base URL /api/v1/task

taskRouter.post('/', createTask);

taskRouter.get('/', getAllTask);

export default taskRouter;
