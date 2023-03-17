import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';

import { patchTodo } from '../api';
import { TodoType } from '../types';

type PatchTodoType = {
  isLoading: boolean;
  patchTodoMutation: UseMutateAsyncFunction<
    TodoType,
    unknown,
    {
      todoId: string;
    },
    unknown
  >;
};

export const usePatchTodo = (): PatchTodoType => {
  const toast = useToast();

  const { mutateAsync: patchTodoMutation, isLoading } = useMutation({
    mutationFn: patchTodo,
    onError: () => {
      toast({
        title: 'Error patching todo',
        description: 'Check the data and try again',
        duration: 3000,
        isClosable: true,
        status: 'error',
        variant: 'left-accent',
      });
    },
    onSuccess: () => {
      toast({
        title: 'Todo patched successfully',
        duration: 3000,
        isClosable: true,
        status: 'success',
        variant: 'left-accent',
      });
    },
  });
  return {
    isLoading,
    patchTodoMutation,
  };
};
