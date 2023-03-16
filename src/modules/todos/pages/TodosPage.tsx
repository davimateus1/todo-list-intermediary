import { Flex } from '@chakra-ui/react';

import { CreateTodo, Todo } from '../components';

import { useUser } from '@/hooks';
import { ScrollbarStyle } from '@/themes';

export const TodosPage = (): JSX.Element => {
  const { user } = useUser();
  console.log(user);

  return (
    <Flex bg='brand.800' w='100vw' h='100vh' justify='center' align='center'>
      <Flex bg='white' w='50%' h='60%' p='3rem' borderRadius='1rem' direction='column'>
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
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </Flex>
      </Flex>
    </Flex>
  );
};
