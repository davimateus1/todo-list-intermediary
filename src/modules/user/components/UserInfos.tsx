import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillAlert } from 'react-icons/ai';
import { CgNametag } from 'react-icons/cg';
import { MdFormatListNumbered, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';

import { User } from '../types';

export const UserInfos = ({ user }: { user: User }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon as={MdKeyboardDoubleArrowRight} onClick={onOpen} fontSize='4xl' cursor='pointer' />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize='2xl'>All infos - {user.name}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' fontSize='lg'>
              <Flex align='center'>
                <Icon as={CgNametag} fontSize='3xl' color='brand.700' mr='0.5rem' />
                <Text>
                  <b>Username:</b> {user.username}
                </Text>
              </Flex>
              <Divider m='0.8rem 0' borderColor='brand.800' />
              <Flex align='center'>
                <Icon as={RiAdminLine} fontSize='3xl' color='brand.700' mr='0.5rem' />
                <Text>
                  <b>Role:</b> {user.admin ? 'Admin' : 'User'}
                </Text>
              </Flex>
              <Divider m='0.8rem 0' borderColor='brand.800' />
              <Flex align='center'>
                <Icon as={MdFormatListNumbered} fontSize='3xl' color='brand.700' mr='0.5rem' />
                <Text>
                  <b>Todos quantity:</b> {user.todos.length}
                </Text>
              </Flex>
              <Divider m='0.8rem 0' borderColor='brand.800' />
              <Flex align='center'>
                <Icon as={AiFillCheckCircle} fontSize='3xl' mr='0.5rem' color='pastel.green' />
                <Text>
                  <b>Completed todos:</b> {user.todos.filter((todo) => todo.done).length}
                </Text>
              </Flex>
              <Divider m='0.8rem 0' borderColor='brand.800' />
              <Flex align='center' mb='2rem'>
                <Icon as={AiFillAlert} fontSize='3xl' color='pastel.yellow' mr='0.5rem' />
                <Text>
                  <b>Pending todos:</b> {user.todos.filter((todo) => !todo.done).length}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
