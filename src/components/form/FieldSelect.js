import React from 'react';
import {
  GridItem,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage
} from '@chakra-ui/react';

function FieldSelect({ name, errors, register, colSpan, label, options }) {
  return (
    <GridItem colSpan={colSpan}>
      <FormControl isInvalid={errors[name]}>
        <FormLabel>{label}</FormLabel>
        <Select
          
          id={name}
          placeholder={`${label}...`}
          {...register(name, {
            required: 'This is required'
          })}
        >
          {options.map((o, i) => {
            return (
              <option key={i} value={o.value}>
                {o.name}
              </option>
            );
          })}
        </Select>
        <FormErrorMessage>
          {errors[name] && errors[name].message}
        </FormErrorMessage>
      </FormControl>
    </GridItem>
  );
}

export default FieldSelect;
