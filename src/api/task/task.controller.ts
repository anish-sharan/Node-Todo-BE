import { IRequest, IResponse } from "../../types/common";
import { errorResponse, successResponse } from "../../utils/apiResponses";
import { createTaskService, getAllTaskService, getTaskByUserIdService, } from "./task.service";
import { createTaskValidation } from "./task.validations";

export const createTask = async (req: IRequest, res: IResponse) => {
    try {
        const validatedRequest = createTaskValidation.parse(req.body);

        const data = await createTaskService(validatedRequest);

        successResponse({ res, data });
    } catch (error) {
        errorResponse({ req, res, error });
    }
};

export const getAllTask = async (req: IRequest, res: IResponse) => {
    try {
        const data = await getAllTaskService(req);

        return successResponse({ res, data });
    } catch (error) {
        return errorResponse({ req, res, error });
    }
};

export const getTaskByUserId = async (req: IRequest, res: IResponse) => {
    try {
        const { id } = req.params;

        const data = await getTaskByUserIdService(id);

        return successResponse({ res, data });
    } catch (error) {
        return errorResponse({ req, res, error });
    }
};
