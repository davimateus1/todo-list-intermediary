import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  Icon,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BsFillPencilFill } from 'react-icons/bs';

import { todoSchema, TodoType } from '../../schemas';

import { InputForm } from '@/components';

export const EditTodoModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TodoType>({
    defaultValues: {},
    resolver: zodResolver(todoSchema),
  });

  const handleEditTodo = (data: TodoType): void => {
    console.log(data);
  };

  return (
    <>
      <Icon
        fontSize='2xl'
        ml='0.7rem'
        cursor='pointer'
        color='pastel.yellow'
        as={BsFillPencilFill}
        onClick={onOpen}
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(handleEditTodo)}>
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' justify='space-around'>
              <InputForm
                placeholder='Todo'
                register={register('todo')}
                error={errors.todo}
                inputContainerStyles={{
                  w: '90%',
                  m: '0.8rem',
                }}
              />
              <InputForm
                placeholder='Deadline'
                type='date'
                register={register('deadline')}
                error={errors.deadline}
                inputContainerStyles={{
                  w: '90%',
                  m: '0.8rem',
                }}
              />
            </Flex>
          </ModalBody>
          <ModalFooter display='flex' justifyContent='space-evenly'>
            <Button
              onClick={onClose}
              transition='all 0.5s'
              color='white'
              bg='pastel.red'
              _hover={{}}
              _active={{}}
            >
              Close
            </Button>
            <Button
              type='submit'
              bg='pastel.green'
              color='white'
              transition='all 0.5s'
              _hover={{}}
              _active={{}}
            >
              Save Infos
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
