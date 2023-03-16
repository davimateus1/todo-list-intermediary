import { Flex, Text, Icon } from '@chakra-ui/react';
import { BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

import { EditTodoModal } from './Modals';

export const Todo = (): JSX.Element => {
  return (
    <Flex w='100%' bg='brand.700' m='1rem 0' p='1rem' justify='space-between' borderRadius='1rem'>
      <Flex direction='column' w='80%'>
        <Text fontSize='2xl' maxW='80%'>
          Descrição
        </Text>
        <Text>12/02/2023</Text>
      </Flex>
      <Flex w='15%' justify='space-around' align='center'>
        <Icon fontSize='2xl' cursor='pointer' color='pastel.green' as={BsFillCheckCircleFill} />
        <EditTodoModal />
        <Icon fontSize='2xl' cursor='pointer' color='pastel.red' as={BsFillTrashFill} />
      </Flex>
    </Flex>
  );
};
