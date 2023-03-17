import { z } from 'zod';

export const todoSchema = z.object({
  title: z.string().nonempty({
    message: 'Todo is required',
  }),
  deadline: z.string().nonempty({
    message: 'Deadline is required',
  }),
});

export type NewTodoType = z.infer<typeof todoSchema>;
