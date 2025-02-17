import express from 'express';
import cors from 'cors';
import env from './config/environment.config';
import log from './utils/loggers';
import { IRequest, IResponse } from './types/common';
import { userRouter } from './api';

const app = express();

// Middlewares
app.use(
    cors({
        origin: [env.app.feAppUrl, 'http://localhost:4000']
    })
);
app.use(express.json());

// User
app.use('/api/v1/user', userRouter);

app.get('/', (_req: IRequest, res: IResponse) => {
    log.info('Welcome Dev');
    res.status(200).send('Welcome all Devs');
});

app.all('*', (_req: IRequest, res: IResponse) => {
    res.status(404).send('Route does not exists');
});

export default app;
