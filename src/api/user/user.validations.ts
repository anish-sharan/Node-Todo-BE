import * as yup from 'yup';

export const CreateUpdateSchema = yup
    .object()
    .shape({
        name: yup.string().max(50),
        email: yup.string().required('Email is required').email('Invalid email format'),

    })
    .partial();

export type UserCreateType = yup.InferType<typeof CreateUpdateSchema>;
