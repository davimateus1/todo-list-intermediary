import { Icon } from '@chakra-ui/react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { useGetTodos, usePatchTodo } from '../../hooks';
import { TodoType } from '../../types';

export const PatchTodo = ({ todo }: { todo: TodoType }): JSX.Element => {
  const { patchTodoMutation } = usePatchTodo();
  const { refetch } = useGetTodos();

  const handlePatchTodo = async (): Promise<void> => {
    await patchTodoMutation({ todoId: todo.id });
    refetch();
  };

  return (
    <Icon
      fontSize='2xl'
      cursor='pointer'
      color={todo.done ? 'gray.500' : 'pastel.green'}
      as={BsFillCheckCircleFill}
      onClick={handlePatchTodo}
      pointerEvents={todo.done ? 'none' : 'auto'}
    />
  );
};
