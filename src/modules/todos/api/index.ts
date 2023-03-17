import { NewTodoType } from '../schemas';
import { TodoType } from '../types';

import { api } from '@/services';

export const postTodo = async ({ todo }: { todo: NewTodoType }): Promise<TodoType> => {
  const response = await api.post('/todos', todo);
  return response.data;
};

export const getTodos = async (): Promise<TodoType> => {
  const response = await api.get('/todos');
  return response.data;
};
