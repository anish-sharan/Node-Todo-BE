import { IRequest, IResponse } from '../types/common';
import log from './loggers';
import { getMessageFromErrorObj } from './utils';

interface ISuccessResponse {
    success: true;
    data?: object | Array<object>;
    message?: string;
    totalPages?: number;
    count?: number;
    hasMore?: boolean;
    page?: number;
    limit?: number;
}

interface ISuccessResponseParameters {
    res: IResponse;
    data?: object | Array<object>;
    message?: string;
    statusCode?: number;
    totalPages?: number;
    count?: number;
    hasMore?: boolean;
    page?: number;
}

export function successResponse({
    res,
    data,
    message = '',
    statusCode = 200,
    totalPages,
    count,
    hasMore,
    page,
}: ISuccessResponseParameters) {
    const response: ISuccessResponse = {
        success: true
    };

    if (data) {
        response.data = data;
    }

    if (message && message.length > 0) {
        response.message = message;
    }

    if (totalPages != undefined) {
        response.totalPages = totalPages;
    }

    if (count != undefined) {
        response.count = count;
    }

    if (hasMore != undefined) {
        response.hasMore = hasMore;
    }

    if (page != undefined) {
        response.page = page;
    }

    res.status(statusCode).json(response);
}

interface IErrorResponse {
    success: false;
    error?: any;
}

interface IErrorResponseParameters {
    req: IRequest;
    res: IResponse;
    error?: any;
    statusCode?: number;
}

export function errorResponse({ req, res, error, statusCode = 400 }: IErrorResponseParameters) {
    const response: IErrorResponse = {
        success: false
    };

    if (!error || error instanceof Error) {
        statusCode = 500;
    }

    response.error = getMessageFromErrorObj(error);

    log.error(
        `Error in ${req.method} ${req.originalUrl}: ${Array.isArray(response?.error) ? `${response.error.length} validation errors found` : response.error}`
    );

    res.status(statusCode).json(response);
}
