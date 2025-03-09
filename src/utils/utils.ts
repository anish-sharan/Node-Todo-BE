import { QueryFailedError } from "typeorm";
import { ZodError } from "zod";

export const isObjectEmpty = (obj: unknown): boolean => {
	return !obj || (typeof obj === 'object' && Object.keys(obj || {}).length === 0);
};

export const isArrayEmpty = (arr: unknown): boolean => {
	return !arr || (Array.isArray(arr) && arr.length === 0);
};

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

	// Handle Zod validation errors
	if (error instanceof ZodError) {
		return error.errors.map(err => ({
			field: err.path.join('.'), // Join path array to get a readable field name
			message: err.message
		}));
	}

	if (error instanceof Error) {
		return error.message;
	}

	return 'Something went wrong';
};
