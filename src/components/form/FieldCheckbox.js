import React from 'react';
import {
  GridItem,
  FormControl,
  Checkbox,
  FormErrorMessage
} from '@chakra-ui/react';

function FieldCheckbox({
  name,
  errors,
  register,
  colSpan,
  label,
  defaultChecked
}) {
  return (
    <GridItem colSpan={colSpan}>
      <FormControl isInvalid={errors[name]}>
        <Checkbox
          id={name}
          placeholder={`${label}...`}
          {...register(name, {
            required: 'This is required'
          })}
          defaultChecked={defaultChecked}
        >
          {label}
        </Checkbox>
        <FormErrorMessage>
          {errors[name] && errors[name].message}
        </FormErrorMessage>
      </FormControl>
    </GridItem>
  );
}

export default FieldCheckbox;
