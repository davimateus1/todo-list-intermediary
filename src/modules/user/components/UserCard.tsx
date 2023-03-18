import { Flex, GridItem, Icon, Text } from '@chakra-ui/react';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiUser5Fill } from 'react-icons/ri';

import { User } from '../types';

import { UserInfos } from './UserInfos';

export const UserCard = ({ user }: { user: User }): JSX.Element => {
  return (
    <GridItem
      w='95%'
      bg='gray.200'
      m='1rem 0'
      p='1rem'
      justifyContent='space-between'
      borderRadius='1rem'
      border='2px solid'
      borderColor='gray.300'
    >
      <Flex align='center' justify='space-between'>
        <Flex align='center'>
          <Icon
            as={user.admin ? MdAdminPanelSettings : RiUser5Fill}
            fontSize='6xl'
            mr='0.5rem'
            color='brand.800'
          />
          <Flex direction='column'>
            <Text fontSize='2xl' fontWeight='bold'>
              {user.name}
            </Text>
            <Text fontSize='md' fontWeight='400'>
              {user.username} - {user.admin ? 'Admin' : 'User'}
            </Text>
          </Flex>
        </Flex>
        <UserInfos user={user} />
      </Flex>
    </GridItem>
  );
};
