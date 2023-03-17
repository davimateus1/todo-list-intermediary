import { Flex, Text, Icon } from '@chakra-ui/react';
import { Fragment } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiAdminLine } from 'react-icons/ri';
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

  const handleNavigateAllUsers = (): void => {
    navigate('/users');
  };

  const { data: todos } = useGetTodos();

  return (
    <Flex bg='brand.800' w='100vw' h='100vh' justify='center' align='center' direction='column'>
      <Text fontSize='5xl' fontWeight='bold' color='brand.500'>
        Todo List
      </Text>
      <Flex bg='white' w='50%' h='60%' p='3rem' borderRadius='1rem' direction='column'>
        <Flex align='flex-end' w='100%' justify='space-between' mb='1rem'>
          <Icon as={IoIosArrowBack} onClick={handleNavigateBack} fontSize='4xl' cursor='pointer' />
          {user.admin && (
            <Icon
              as={RiAdminLine}
              fontSize='4xl'
              cursor='pointer'
              color='brand.900'
              transition='all 0.5s'
              _hover={{
                color: 'brand.700',
              }}
              onClick={handleNavigateAllUsers}
            />
          )}
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
                <Todo key={todo.id} todo={todo} />
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
