import { CreateUser, User } from '../types';

import { api } from '@/services';

export const postUser = async (user: CreateUser): Promise<User> => {
  const response = await api.post('/users', user);
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};
