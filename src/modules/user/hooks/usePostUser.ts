import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postUser } from '../api';
import { CreateUser, User } from '../types';

import { useUser } from '@/hooks';

type PostUserType = {
  isLoading: boolean;
  postUserMutation: UseMutateAsyncFunction<User, unknown, CreateUser, unknown>;
};

export const usePostUser = (): PostUserType => {
  const toast = useToast();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const { mutateAsync: postUserMutation, isLoading } = useMutation({
    mutationFn: postUser,
    onError: () => {
      toast({
        title: 'Error creating user',
        description: 'Probably the username is already in use',
        duration: 3000,
        isClosable: true,
        status: 'error',
        variant: 'left-accent',
      });
    },
    onSuccess: async (data) => {
      setUser(data);
      localStorage.setItem('@user', JSON.stringify(data));

      toast({
        title: 'User created successfully!',
        duration: 3000,
        isClosable: true,
        status: 'success',
        variant: 'left-accent',
      });

      navigate('/todos');
    },
  });
  return {
    isLoading,
    postUserMutation,
  };
};
