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
import { BsFillTrashFill } from 'react-icons/bs';

export const DeleteTodo = (): JSX.Element => {
  return (
    <Popover placement='right' closeOnBlur>
      <PopoverTrigger>
        <Button variant='unstyled'>
          <Icon
            fontSize='2xl'
            cursor='pointer'
            color='pastel.red'
            as={BsFillTrashFill}
            mt='0.45rem'
          />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Are you sure you want to continue with your action?</PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end'>
            <Button colorScheme='red'>Apply</Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
