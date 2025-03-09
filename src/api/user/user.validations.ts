import { z } from 'zod';

export const createUserValidation = z.object({
    name: z
        .string()
        .min(2, 'User name must be at least 2 characters')
        .max(255, 'User name must be at most 255 characters'),

    email: z
        .string()
        .email('Invalid email format')
        .max(255, 'Email must be at most 255 characters'),

    password: z
        .string()
        .min(4)
});

export type CreateUserType = z.infer<typeof createUserValidation>;


export const loginUserValidation = z.object({
    email: z
        .string()
        .email('Invalid email format')
        .max(255, 'Email must be at most 255 characters'),

    password: z
        .string()
        .min(4)
});

export type LoginUserType = z.infer<typeof loginUserValidation>;
