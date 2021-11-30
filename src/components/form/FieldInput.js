import React from 'react';
import {
  GridItem,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react';

function FieldInput({ name, errors, register, colSpan, label, isPassword }) {
  return (
    <GridItem colSpan={colSpan}>
      <FormControl isInvalid={errors[name]}>
        <FormLabel>{label}</FormLabel>
        <Input
          type={isPassword ? 'password' : 'text'}
          id={name}
          placeholder={`${label}...`}
          {...register(name, {
            required: 'This is required'
          })}
        />
        <FormErrorMessage>
          {errors[name] && errors[name].message}
        </FormErrorMessage>
      </FormControl>
    </GridItem>
  );
}

export default FieldInput;
