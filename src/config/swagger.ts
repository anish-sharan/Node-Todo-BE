import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo apis',
            version: '1.0.0',
            description: 'API documentation for todo BE project',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
    },
    apis: [
        './src/api/task/task.routes.ts',
        './src/api/user/user.routes.ts'
    ],
};

// Generate Swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Function to setup Swagger in Express
export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
