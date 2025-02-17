import { type Request, type Response } from 'express';

export interface IRequest extends Request { }

export type IResponse = Response;

export interface ICommonEntityFields {
    id: string;
    active: boolean;
    createdDate: Date;
    updatedDate: Date;
}
