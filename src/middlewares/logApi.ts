import { NextFunction } from 'express';
import log from '../utils/logger';
import { IRequest, IResponse } from '../types/common';

export function logApi() {
	return (req: IRequest, res: IResponse, next: NextFunction) => {
		log.info(`${req.method} ${req.originalUrl}`);

		next();
	};
}
