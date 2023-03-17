import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Icon,
  Portal,
} from '@chakra-ui/react';
import { IoTrashBin } from 'react-icons/io5';

import { useDeleteTodo } from '../../hooks';

export const DeleteTodo = ({ todoId }: { todoId: string }): JSX.Element => {
  const { deleteTodoMutation, isLoading } = useDeleteTodo();

  const handleDeleteTodo = (): void => {
    deleteTodoMutation({ todoId });
  };

  return (
    <Popover placement='right' closeOnBlur>
      <PopoverTrigger>
        <Button variant='unstyled'>
          <Icon fontSize='2xl' cursor='pointer' color='pastel.red' as={IoTrashBin} mt='0.45rem' />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Are you sure you want to continue with your action?</PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end'>
            <Button colorScheme='red' isLoading={isLoading} onClick={handleDeleteTodo}>
              Apply
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
