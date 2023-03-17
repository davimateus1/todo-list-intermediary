import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postUser } from '../api';
import { CreateUser } from '../types';

import { useUser } from '@/hooks';

type PostUserType = {
  isLoading: boolean;
  postUserMutation: UseMutateAsyncFunction<CreateUser, unknown, CreateUser, unknown>;
};

export const usePostUser = (): PostUserType => {
  const toast = useToast();
  const navigate = useNavigate();
  const { user, setUser } = useUser();

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
    onSuccess: async (data) => {
      setUser(data);

      toast({
        title: 'Usuário criado com sucesso!',
        duration: 3000,
        isClosable: true,
        status: 'success',
      });

      setTimeout(() => {
        navigate(`${user.id}/todos`);
      }, 1000);
    },
  });
  return {
    isLoading,
    postUserMutation,
  };
};
