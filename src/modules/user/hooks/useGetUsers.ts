import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { getUsers } from '../api';

export const useGetUsers = (): UseQueryResult<unknown, AxiosError> => {
  return useQuery(['users'], () => getUsers());
};
