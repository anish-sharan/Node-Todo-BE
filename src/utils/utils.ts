import { QueryFailedError } from 'typeorm';
import { ValidationError } from 'yup';

export const getMessageFromErrorObj = (error: unknown) => {
    if (!error) {
        return 'Something went wrong';
    }

    if (typeof error === 'string') {
        return error;
    }

    // Handle TypeORM QueryFailedError for unique constraint violations
    if (error instanceof QueryFailedError && error.driverError.code === '23505') {
        const errorMessage: string = error.driverError?.detail || '';

        if (!errorMessage) return 'Duplicate data found';

        return errorMessage.replace(
            /Key \((.*?)\)=\((.*?)\) already exists\./,
            (_match: string, key: string, value: string) => {
                return `${key} '${value}' already exists`;
            }
        );
    }

    // Transform Yup validation errors into a readable format
    if (error instanceof ValidationError) {
        return error.inner.map(err => ({
            field: err.path,
            message: err.message
        }));
    }

    if (error instanceof Error) {
        return error.message;
    }

    return 'Something went wrong';
};