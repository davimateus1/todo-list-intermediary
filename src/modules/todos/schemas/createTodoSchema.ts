import { z } from 'zod';

export const createTodoSchema = z.object({
  todo: z.string().nonempty({
    message: 'Todo is required',
  }),
  deadline: z.string().nonempty({
    message: 'Deadline is required',
  }),
});

export type NewTodo = z.infer<typeof createTodoSchema>;
