import { Flex, Text, Icon } from '@chakra-ui/react';
import { Fragment } from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { CreateTodo, Todo } from '../components';
import { useGetTodos } from '../hooks';

import { useUser } from '@/hooks';
import { ScrollbarStyle } from '@/themes';

export const TodosPage = (): JSX.Element => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate('/');
  };

  console.log(user);

  const { data: todos } = useGetTodos();

  return (
    <Flex bg='brand.800' w='100vw' h='100vh' justify='center' align='center' direction='column'>
      <Text fontSize='5xl' fontWeight='bold'>
        Todo List
      </Text>
      <Flex bg='white' w='50%' h='60%' p='3rem' borderRadius='1rem' direction='column'>
        <Flex align='flex-end' w='100%' justify='space-between' mb='1rem'>
          <Icon as={IoIosArrowBack} onClick={handleNavigateBack} fontSize='4xl' cursor='pointer' />
          {user.admin && <Icon as={GrUserAdmin} fontSize='4xl' cursor='pointer' />}
        </Flex>
        <CreateTodo />
        <Flex
          bg='transparent'
          w='100%'
          h='100%'
          p='1rem'
          borderRadius='1rem'
          mt='1rem'
          direction='column'
          overflowY='auto'
          sx={{ ...ScrollbarStyle }}
        >
          {todos?.length ? (
            <Fragment>
              {todos?.map((todo) => (
                <Todo key={todo} todo={todo} />
              ))}
            </Fragment>
          ) : (
            <Text fontSize='xl' fontWeight='bold' color='brand.600' align='center'>
              No todos yet
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
