import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';

import { postUser } from '../api';
import { CreateUser } from '../types';

import { useUser } from '@/hooks';

type PostUserType = {
  isLoading: boolean;
  postUserMutation: UseMutateAsyncFunction<CreateUser, unknown, CreateUser, unknown>;
};

export const usePostUser = (): PostUserType => {
  const toast = useToast();
  const { setUser } = useUser();

  const { mutateAsync: postUserMutation, isLoading } = useMutation({
    mutationFn: postUser,
    onError: () => {
      toast({
        title: 'Error creating user',
        description: 'Check the data and try again',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });
    },
    onSuccess: async (data) => {
      localStorage.setItem('@username', data.username);
      setUser(data);
      toast({
        title: 'User created successfully!',
        duration: 3000,
        isClosable: true,
        status: 'success',
      });
    },
  });
  return {
    isLoading,
    postUserMutation,
  };
};
