import { FindOptionsSelect } from 'typeorm';
import Task from './task.model';

export const taskForUser: FindOptionsSelect<Task> = {
    id: true,
    title: true,
    description: true,
    userId: true,
    status: true,
    active: true,
    createdDate: true,
    updatedDate: true,
    createdBy: true,
    updatedBy: true,

    user: {
        id: true,
        name: true,
        email: true,
        active: true,
        createdDate: true,
        updatedDate: true,
        createdBy: true,
        updatedBy: true,
    },
};
