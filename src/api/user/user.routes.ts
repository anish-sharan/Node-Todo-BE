import express from 'express';
import { loginUser, signUpUser } from './user.controller';

const userRouter = express.Router();

// Base URL /api/v1/user

userRouter.post('/signUp', signUpUser);
userRouter.get('/login', loginUser);


export default userRouter;
