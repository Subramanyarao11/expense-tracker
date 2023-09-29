import { z } from 'zod';

const incomeSchema = z.object({
    amount: z.string()
        .refine(value => value.length >= 2, {
            message: 'Amount must have at least 3 digits',
        })
        .refine(value => /^\d+$/.test(value), {
            message: 'Amount must be a valid number',
        })
        .transform(value => parseInt(value, 10)),
    description: z.string()
        .min(5, {
            message: 'Description must have at least 5 characters',
        }),
});

export default incomeSchema;
