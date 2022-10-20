import * as React from 'react'
import { HiSearch } from 'react-icons/hi'
import { Badge, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'

import { SearchBoxInputProps } from '~/typings/components/search-box'

export function SearchBoxInput(props: SearchBoxInputProps) {
  const { placeholder, value, handleChange, counter } = props

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={HiSearch} color="primary.400" />
      </InputLeftElement>
      <Input
        type="text"
        variant="filled"
        bg="primary.100"
        placeholder={placeholder}
        value={value}
        textColor="primary.600"
        _placeholder={{
          color: 'primary.400',
        }}
        _hover={{
          bg: 'primary.200',
        }}
        _dark={{
          bg: 'primary.800',
          textColor: 'primary.300',

          _placeholder: {
            color: 'primary.500',
          },
          _hover: {
            bg: 'primary.700',
          },
          _focus: {
            bg: 'transparent',
          },
        }}
        onChange={e => handleChange(e.target.value)}
      />
      <InputRightElement pointerEvents="none">
        <Badge variant="solid" colorScheme="primary" fontSize="sm">
          {counter}
        </Badge>
      </InputRightElement>
    </InputGroup>
  )
}
