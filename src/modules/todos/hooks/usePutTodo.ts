import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';

import { putTodo } from '../api';
import { NewTodoType } from '../schemas';
import { TodoType } from '../types';

type PutTodoType = {
  isLoading: boolean;
  putTodoMutation: UseMutateAsyncFunction<
    TodoType,
    unknown,
    {
      todoId: string;
      todo: NewTodoType;
    },
    unknown
  >;
};

export const usePutTodo = (): PutTodoType => {
  const toast = useToast();

  const { mutateAsync: putTodoMutation, isLoading } = useMutation({
    mutationFn: putTodo,
    onError: () => {
      toast({
        title: 'Error putting todo',
        description: 'Check the data and try again',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });
    },
    onSuccess: () => {
      toast({
        title: 'Todo put successfully!',
        duration: 3000,
        isClosable: true,
        status: 'success',
      });
    },
  });
  return {
    isLoading,
    putTodoMutation,
  };
};
