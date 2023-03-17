import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { getTodos } from '../api';
import { TodoType } from '../schemas';

export const useGetTodos = (): UseQueryResult<TodoType[], AxiosError> => {
  return useQuery(['todos'], () => getTodos());
};
