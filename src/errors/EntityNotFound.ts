import AppError from "./AppError";

class EntityNotFoundError extends AppError {
    constructor(entityName: string, id: string) {
        super(`Could not find ${entityName} with id: ${id}`, 404);
    }
}

export default EntityNotFoundError;