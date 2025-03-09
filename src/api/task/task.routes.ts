import express from 'express';
import { createTask, getAllTask, getTaskByUserId, } from './task.controller';

const taskRouter = express.Router();

// Base URL /api/v1/task

taskRouter.post('/', createTask);

taskRouter.get('/', getAllTask);

taskRouter.get('/user/:id', getTaskByUserId);

export default taskRouter;
