import { ILike } from 'typeorm';
import { AppDataSource } from '../../config/database.config';
import log from '../../utils/logger';
import Task from './task.model';
import { CreateTaskType } from './task.validations';
import { IRequest } from '../../types/common';

export const taskRepository = AppDataSource.getRepository(Task);

export const createTaskService = async (req: CreateTaskType) => {
    log.info(`Creating task`);
    return await taskRepository.save(req);
};

export const getAllTaskService = async (req: IRequest) => {
    log.info(`Fetching all tasks`);

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string | undefined;
    const skip = (page - 1) * limit;

    const searchFilter = search ? { title: ILike(`%${search}%`) } : {};

    const [tasks, total] = await taskRepository.findAndCount({
        where: searchFilter,
        skip,
        take: limit,
    });

    return {
        totalTasks: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        tasks,
    };
};