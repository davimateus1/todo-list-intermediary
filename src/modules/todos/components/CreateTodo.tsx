import { Button, Flex } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { createTodoSchema, NewTodo } from '../schemas';

import { InputForm } from '@/components';

export const CreateTodo = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewTodo>({
    resolver: zodResolver(createTodoSchema),
  });

  const handleAddTodo = (data: NewTodo): void => {
    console.log(data);
  };

  return (
    <Flex as='form' onSubmit={handleSubmit(handleAddTodo)} w='100%' justify='center' h='4rem'>
      <InputForm
        placeholder='Todo'
        register={register('todo')}
        error={errors.todo}
        m='0'
        inputContainerStyles={{
          w: '90%',
        }}
      />
      <InputForm
        placeholder='Deadline'
        type='date'
        register={register('deadline')}
        error={errors.deadline}
        inputContainerStyles={{
          w: '90%',
        }}
      />
      <Button
        type='submit'
        bg='brand.500'
        color='brand.100'
        transition='all 1s'
        h='3rem'
        _hover={{ bg: 'brand.900', color: 'brand.500' }}
        _active={{ bg: 'brand.700', color: 'brand.500' }}
        w='70%'
      >
        Create
      </Button>
    </Flex>
  );
};
