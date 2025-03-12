import express from 'express';
import { createTask, getAllTask, getTaskByUserId, } from './task.controller';

const taskRouter = express.Router();

// Base URL /api/v1/task

/**
 * @swagger
 * /task:
 *   post:
 *     summary: create a task
 *     description: Api to create a task
 *     responses:
 *       200:
 *         description: Create a task
 */
taskRouter.post('/', createTask);


/**
 * @swagger
 * /task:
 *   get:
 *     summary: get a task
 *     description: Api to get all task
 *     responses:
 *       200:
 *         description: Create a task
 */
taskRouter.get('/', getAllTask);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: get task by id
 *     description: Api to get task by id
 *     responses:
 *       200:
 *         description: Create a task
 */
taskRouter.get('/user/:id', getTaskByUserId);

export default taskRouter;
