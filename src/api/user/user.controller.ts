import { IRequest, IResponse } from '../../types/common';
import { errorResponse, successResponse } from '../../utils/apiResponses';
import { createUserValidation, loginUserValidation } from './user.validations';
import { loginUserService, signUpUserService } from './user.service';

export const signUpUser = async (req: IRequest, res: IResponse) => {
    try {
        const validatedRequest = createUserValidation.parse(req.body);

        const data = await signUpUserService(validatedRequest);

        successResponse({ res, data });
    } catch (error) {
        errorResponse({ req, res, error });
    }
};

export const loginUser = async (req: IRequest, res: IResponse) => {
    try {
        const validatedRequest = loginUserValidation.parse(req.body);

        const data = await loginUserService(validatedRequest);

        successResponse({ res, data });
    } catch (error) {
        errorResponse({ req, res, error });
    }
};
