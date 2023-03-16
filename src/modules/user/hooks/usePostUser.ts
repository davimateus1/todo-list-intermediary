import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';

import { postUser } from '../api';
import { CreateUser } from '../types';

type PostUserType = {
  isLoading: boolean;
  postUserMutation: UseMutateAsyncFunction<unknown, unknown, CreateUser, unknown>;
};

export const usePostUser = (): PostUserType => {
  const toast = useToast();
  const { mutateAsync: postUserMutation, isLoading } = useMutation({
    mutationFn: postUser,
    onError: () => {
      toast({
        title: 'Erro ao criar usuário',
        description: 'Verifique os dados e tente novamente',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });
    },
    onSuccess: async () => {
      toast({
        title: 'Usuário criado com sucesso!',
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
