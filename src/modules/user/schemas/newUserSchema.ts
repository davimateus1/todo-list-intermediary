import { z } from 'zod';

export const newUserSchema = z.object({
  username: z.string().nonempty({
    message: 'Username is required',
  }),
  name: z.string().nonempty({
    message: 'Name is required',
  }),
  role: z.string().nonempty(),
});
