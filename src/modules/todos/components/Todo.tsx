import { Flex, Text } from '@chakra-ui/react';

import { TodoType } from '../types';

import { DeleteTodo, EditTodoModal, PatchTodo } from './Modals';

type TodoProps = {
  todo: TodoType;
};

export const Todo = ({ todo }: TodoProps): JSX.Element => {
  const formattedDate = new Date(todo.deadline).toUTCString().split(' ').slice(0, 4).join(' ');

  return (
    <Flex
      w='100%'
      bg='gray.200'
      m='1rem 0'
      p='1rem'
      justify='space-between'
      borderRadius='1rem'
      border='2px solid'
      borderColor='gray.300'
    >
      <Flex direction='column' w='80%' color='brand.900'>
        <Text fontSize='2xl' maxW='80%' textDecor={todo.done ? 'line-through' : 'none'}>
          {todo.title}
        </Text>
        <Text textDecor={todo.done ? 'line-through' : 'none'}>{formattedDate}</Text>
      </Flex>
      <Flex w='15%' justify='space-around' align='center'>
        <PatchTodo todo={todo} />
        <EditTodoModal todo={todo} />
        <DeleteTodo todo={todo} />
      </Flex>
    </Flex>
  );
};
