import { Flex, Text, Icon } from '@chakra-ui/react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { TodoType } from '../types';

import { DeleteTodo, EditTodoModal } from './Modals';

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
        <Text fontSize='2xl' maxW='80%'>
          {todo.title}
        </Text>
        <Text>{formattedDate}</Text>
      </Flex>
      <Flex w='15%' justify='space-around' align='center'>
        <Icon fontSize='2xl' cursor='pointer' color='pastel.green' as={BsFillCheckCircleFill} />
        <EditTodoModal todo={todo} />
        <DeleteTodo todoId={todo.id} />
      </Flex>
    </Flex>
  );
};
