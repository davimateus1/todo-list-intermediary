import { z } from 'zod';

export const todoSchema = z.object({
  todo: z.string().nonempty({
    message: 'Todo is required',
  }),
  deadline: z.string().nonempty({
    message: 'Deadline is required',
  }),
});

export type TodoType = z.infer<typeof todoSchema>;
