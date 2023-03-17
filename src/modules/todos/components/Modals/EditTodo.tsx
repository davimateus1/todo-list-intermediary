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

import { todoSchema, NewTodoType } from '../../schemas';
import { TodoType } from '../../types';

import { InputForm } from '@/components';

type EditTodoModalType = {
  todo: TodoType;
};

export const EditTodoModal = ({ todo }: EditTodoModalType): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formattedDate = new Date(todo.deadline).toLocaleDateString('pt-BR');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewTodoType>({
    defaultValues: {
      title: todo.title,
      deadline: formattedDate,
    },
    resolver: zodResolver(todoSchema),
  });

  const handleEditTodo = (data: NewTodoType): void => {
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
                register={register('title')}
                error={errors.title}
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
