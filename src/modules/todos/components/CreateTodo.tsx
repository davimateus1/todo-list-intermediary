import { Button, Flex } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { todoSchema, TodoType } from '../schemas';

import { InputForm } from '@/components';

export const CreateTodo = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TodoType>({
    resolver: zodResolver(todoSchema),
  });

  const handleAddTodo = (data: TodoType): void => {
    console.log(data);
  };

  return (
    <Flex as='form' onSubmit={handleSubmit(handleAddTodo)} w='100%' justify='center' h='4rem'>
      <InputForm
        placeholder='Todo'
        register={register('todo')}
        error={errors.todo}
        m='0'
        border='3px solid'
        borderColor='gray.300'
        inputContainerStyles={{
          w: '90%',
        }}
      />
      <InputForm
        placeholder='Deadline'
        type='date'
        register={register('deadline')}
        error={errors.deadline}
        border='3px solid'
        borderColor='gray.300'
        inputContainerStyles={{
          w: '90%',
        }}
      />
      <Button
        type='submit'
        bg='brand.700'
        color='brand.500'
        transition='all 0.5s'
        h='3rem'
        _hover={{ bg: 'brand.900', color: 'brand.500' }}
        _active={{ bg: 'brand.900', color: 'brand.500' }}
        w='70%'
      >
        Create
      </Button>
    </Flex>
  );
};
