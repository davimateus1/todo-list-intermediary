import { useToast } from '@chakra-ui/react';
import { useMutation, UseMutateAsyncFunction } from 'react-query';

import { deleteTodo } from '../api';
import { TodoType } from '../types';

type DeleteTodoType = {
  isLoading: boolean;
  deleteTodoMutation: UseMutateAsyncFunction<TodoType, unknown, { todoId: string }, unknown>;
};

export const useDeleteTodo = (): DeleteTodoType => {
  const toast = useToast();

  const { mutateAsync: deleteTodoMutation, isLoading } = useMutation({
    mutationFn: deleteTodo,
    onError: () => {
      toast({
        title: 'Error deleting todo',
        description: 'Try again later',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });
    },
    onSuccess: async () => {
      toast({
        title: 'Todo deleted successfully',
        duration: 3000,
        isClosable: true,
        status: 'success',
      });
    },
  });
  return {
    isLoading,
    deleteTodoMutation,
  };
};
