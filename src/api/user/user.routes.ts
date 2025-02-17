import express from 'express';
import { createUser } from './user.controller';

const userRouter = express.Router();

// Base URL /api/v1/user

userRouter.post('', createUser);

export default userRouter;
