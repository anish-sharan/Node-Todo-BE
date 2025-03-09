import { z } from "zod";
import { TaskStatusEnum } from "./task.enum";

export const createTaskValidation = z.object({
    title: z
        .string()
        .max(50, 'Task title must be at most 50 characters'),

    description: z
        .string()
        .max(255, 'Description must be at most 255 characters'),

    userId: z
        .string()
        .uuid("Invalid user id"),

    status: z
        .nativeEnum(TaskStatusEnum)

});

export type CreateTaskType = z.infer<typeof createTaskValidation>;