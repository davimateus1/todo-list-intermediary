import { Flex, Grid, Text, Icon } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { UserCard } from '../components/UserCard';
import { useGetUsers } from '../hooks';

import { ScrollbarStyle } from '@/themes';

export const AllUsersPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate('/todos');
  };

  const { data: users, isLoading } = useGetUsers();

  return (
    <Flex bg='brand.800' w='100vw' h='100vh' justify='center' align='center' direction='column'>
      <Text fontSize='5xl' fontWeight='bold' color='brand.500'>
        All Users
      </Text>
      <Flex bg='white' w='50%' h='60%' p='3rem' borderRadius='1rem' direction='column'>
        <Icon as={IoIosArrowBack} onClick={handleNavigateBack} fontSize='4xl' cursor='pointer' />
        <Grid templateColumns='repeat(2, 1fr)' overflowY='auto' sx={{ ...ScrollbarStyle }}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            users?.map((user) => <UserCard key={user.id} user={user} />)
          )}
        </Grid>
      </Flex>
    </Flex>
  );
};
