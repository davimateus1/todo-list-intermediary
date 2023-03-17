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

export const putTodo = async ({
  todoId,
  todo,
}: {
  todoId: string;
  todo: NewTodoType;
}): Promise<TodoType> => {
  const response = await api.put(`/todos/${todoId}`, todo);
  return response.data;
};

export const patchTodo = async ({ todoId }: { todoId: string }): Promise<TodoType> => {
  const response = await api.patch(`/todos/${todoId}/done`);
  return response.data;
};

export const deleteTodo = async ({ todoId }: { todoId: string }): Promise<TodoType> => {
  const response = await api.delete(`/todos/${todoId}`);
  return response.data;
};
