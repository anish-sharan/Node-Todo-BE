import express from 'express';
import { loginUser, signUpUser } from './user.controller';

const userRouter = express.Router();

// Base URL /api/v1/user

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: signup a user
 *     description: Api to signup a task
 *     responses:
 *       200:
 *         description: signup a user
 */
userRouter.post('/signUp', signUpUser);

/**
 * @swagger
 * /users/login:
 *   get:
 *     summary: login a user
 *     description: Api to login a user
 *     responses:
 *       200:
 *         description: login a user
 */
userRouter.get('/login', loginUser);


export default userRouter;
