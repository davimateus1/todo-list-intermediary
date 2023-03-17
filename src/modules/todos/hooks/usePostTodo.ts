import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';

import { postTodo } from '../api';
import { NewTodoType } from '../schemas';
import { TodoType } from '../types';

type PostTodoType = {
  isLoading: boolean;
  postTodoMutation: UseMutateAsyncFunction<
    TodoType,
    unknown,
    {
      todo: NewTodoType;
    },
    unknown
  >;
};

export const usePostTodo = (): PostTodoType => {
  const toast = useToast();

  const { mutateAsync: postTodoMutation, isLoading } = useMutation({
    mutationFn: postTodo,
    onError: () => {
      toast({
        title: 'Error creating todo',
        description: 'Check the data and try again',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });
    },
    onSuccess: async () => {
      toast({
        title: 'Todo created successfully!',
        duration: 3000,
        isClosable: true,
        status: 'success',
      });
    },
  });
  return {
    isLoading,
    postTodoMutation,
  };
};
