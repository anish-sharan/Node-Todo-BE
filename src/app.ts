import express from 'express';
import cors from 'cors';
import log from './utils/logger';
import { IRequest, IResponse } from './types/common';
import env from './config/environment.config';
import { logApi } from './middlewares/logApi';
import { taskRouter, userRouter } from './api';
import { setupSwagger } from './config/swagger';

const app = express();

// Middlewares
app.use(
    cors({
        origin: [env.app.feAppUrl, 'http://localhost:4000']
    })
);
app.use(express.json());

// Swagger implementations
setupSwagger(app);

// Routes
app.use('/api/v1/user', logApi(), userRouter);
// Tasks
app.use('/api/v1/task', logApi(), taskRouter);


app.get('/', (_req: IRequest, res: IResponse) => {
    log.info('Welcome Dev');
    res.status(200).send('BE is up!');
});

app.all('*', (_req: IRequest, res: IResponse) => {
    res.status(404).send('Route does not exists');
});

export default app;
