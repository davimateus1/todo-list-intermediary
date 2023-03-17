import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { getUsers } from '../api';
import { User } from '../types';

export const useGetUsers = (): UseQueryResult<User[], AxiosError> => {
  return useQuery(['users'], () => getUsers());
};
