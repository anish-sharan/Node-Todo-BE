import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { errorResponse } from "../utils/apiResponses";

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    if (err instanceof AppError) {
        return errorResponse({ req, res, error: err.message, statusCode });
    }

    return errorResponse({ req, res, error: "Something went wrong!", statusCode });
};

export default errorHandler;