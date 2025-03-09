import 'dotenv/config';

const env = {
    app: {
        port: Number(process.env.APP_PORT) || 8080,
        environment: process.env.NODE_ENV!,
        apiAccessKey: process.env.API_ACCESS_KEY!,
        feAppUrl: process.env.FE_APP_URL!,
    },
    db: {
        host: process.env.PG_HOST!,
        dbName: process.env.PG_DATABASE_NAME!,
        user: process.env.PG_USER!,
        password: process.env.PG_PASSWORD!
    }
};

export default env;
