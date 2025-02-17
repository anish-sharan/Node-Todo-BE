import 'reflect-metadata';
import { AppDataSource } from './config/database.config';
import app from './app';
import log from './utils/loggers';
import env from './config/environment.config';

AppDataSource.initialize()
    .then(() => {
        log.info('Data Base has been initialized!');

        app.listen(env.app.port, () => {
            log.info(`Server is running on port: ${env.app.port}`);
        });
    })
    .catch(err => {
        log.error(err);
        log.error('Error during Data Source initialization:', (err as Error)?.message);
        process.exit(1);
    });
