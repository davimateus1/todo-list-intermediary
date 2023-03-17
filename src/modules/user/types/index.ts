import { TodoType } from '@/modules/todos/types';

export type CreateUser = {
  name: string;
  username: string;
  admin: boolean;
};

export type User = {
  id: string;
  name: string;
  username: string;
  admin: boolean;
  todos: TodoType[];
};
