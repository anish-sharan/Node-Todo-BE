import { IRequest, IResponse } from '../../types/common';
import { errorResponse, successResponse } from '../../utils/apiResponses';
import UserService from './user.service';


export const createUser = async (req: IRequest, res: IResponse) => {
    try {
        await UserService.createUser(req.body)

        successResponse({ res });
    } catch (error) {
        errorResponse({ req, res, error });
    }
};