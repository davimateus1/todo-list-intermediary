import { Flex } from '@chakra-ui/react';

import { NewUserForm } from '../components';

export const NewUserPage = (): JSX.Element => {
  return (
    <Flex bg='brand.800' w='100vw' h='100vh' justify='center' align='center'>
      <NewUserForm />
    </Flex>
  );
};
