import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { IoTrashBin } from 'react-icons/io5';

import { useDeleteTodo, useGetTodos } from '../../hooks';
import { TodoType } from '../../types';

export const DeleteTodo = ({ todo }: { todo: TodoType }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteTodoMutation, isLoading } = useDeleteTodo();
  const { refetch } = useGetTodos();

  const handleDeleteTodo = async (): Promise<void> => {
    await deleteTodoMutation({ todoId: todo.id });
    refetch();
  };

  return (
    <>
      <Icon fontSize='2xl' cursor='pointer' color='pastel.red' as={IoTrashBin} onClick={onOpen} />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete {todo.title}?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This action will delete the todo. Are you sure you want to continue?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' isLoading={isLoading} onClick={handleDeleteTodo}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
