import { Button, Center, Flex, Icon, Image, Select, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BiUser, BiUserCircle, BiUserPin } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { usePostUser } from '../hooks';
import { NewUser, newUserSchema } from '../schemas';

import { InputForm } from '@/components';

export const NewUserForm = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewUser>({
    resolver: zodResolver(newUserSchema),
  });

  const { postUserMutation, isLoading } = usePostUser();

  const newUser = (data: NewUser): void => {
    postUserMutation({
      admin: data.role,
      name: data.name,
      username: data.username,
    });

    navigate('/todos');
  };

  return (
    <Flex
      bg='brand.600'
      w='25vw'
      minH='52vh'
      h='auto'
      pos='absolute'
      align='center'
      borderRadius='1rem'
      direction='column'
    >
      <Center bg='brand.900' h='6rem' w='6rem' borderRadius='50%' pos='relative' bottom='3rem'>
        <Image as={BiUserCircle} fontSize='7xl' color='brand.500' />
      </Center>
      <Text color='brand.100' fontSize='2xl' fontWeight='bold'>
        New User
      </Text>
      <Flex w='100%' direction='column' as='form' onSubmit={handleSubmit(newUser)} align='center'>
        <InputForm
          iconLeft={<Icon as={BiUserPin} fontSize='2xl' />}
          placeholder='Username'
          register={register('username')}
          error={errors.username}
          inputContainerStyles={{
            m: '0.8rem',
          }}
        />
        <InputForm
          iconLeft={<Icon as={BiUser} fontSize='2xl' />}
          placeholder='Your Name'
          register={register('name')}
          error={errors.name}
          inputContainerStyles={{
            m: '1rem',
          }}
        />
        <Select
          w='70%'
          m='1rem'
          {...register('role')}
          defaultValue='user'
          bg='brand.500'
          h='3rem'
          border='0.2rem solid'
          borderColor='brand.200'
        >
          <option value='' disabled>
            Select your role
          </option>
          <option value='admin'>Admin</option>
          <option value='user'>User</option>
        </Select>
        <Button
          type='submit'
          bg='brand.500'
          color='brand.100'
          transition='all 0.5s'
          _hover={{ bg: 'brand.900', color: 'brand.500' }}
          _active={{ bg: 'brand.700', color: 'brand.500' }}
          m='1rem'
          w='70%'
          isLoading={isLoading}
        >
          Create
        </Button>
      </Flex>
    </Flex>
  );
};
