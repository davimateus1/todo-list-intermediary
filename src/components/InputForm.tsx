import {
  Collapse,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  StyleProps,
  Text,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type InputFormProps = {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  disabled?: boolean;
  inputContainerStyles?: StyleProps;
} & InputProps;

export const InputForm = ({
  iconLeft,
  iconRight,
  register,
  error,
  disabled = false,
  inputContainerStyles = {},
  ...rest
}: InputFormProps): JSX.Element => {
  return (
    <FormControl>
      <FormLabel
        display='flex'
        m='0'
        justifyContent='space-between'
        flexDirection='column'
        alignItems='center'
      >
        <InputGroup
          bg='brand.500'
          alignItems='center'
          borderRadius='2rem'
          position='relative'
          w='70%'
          {...inputContainerStyles}
        >
          {iconLeft && (
            <InputLeftElement h='100%' m='0 0.8rem'>
              {iconLeft}
            </InputLeftElement>
          )}
          {iconRight && (
            <InputRightElement h='100%' m='0 0.8rem'>
              {iconRight}
            </InputRightElement>
          )}
          <Input
            type='text'
            h='3rem'
            fontSize='1rem'
            p={iconLeft ? '0 0 0 3rem' : '1rem 1.5rem'}
            letterSpacing={0.16}
            border='0.2rem solid'
            borderColor='brand.200'
            disabled={disabled}
            _focusVisible={{}}
            _hover={{}}
            _active={{}}
            _placeholder={{
              color: 'gray.700',
              opacity: '0.75',
            }}
            _disabled={{
              cursor: 'not-allowed',
              fontWeight: '700',
              opacity: '0.5',
              background: 'gray.200',
            }}
            {...register}
            {...rest}
          />
        </InputGroup>
        <Collapse in={error as unknown as boolean} animateOpacity>
          <Text fontSize='1rem !important' color='red !important'>
            *{error?.message}
          </Text>
        </Collapse>
      </FormLabel>
    </FormControl>
  );
};
