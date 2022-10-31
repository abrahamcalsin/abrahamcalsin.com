import * as React from 'react'
import { HiSearch } from 'react-icons/hi'
import { Badge, Icon } from '@chakra-ui/react'

import { Input } from '~/components/input'
import { SearchBoxInputProps } from '~/typings/components/search-box'

export function SearchBoxInput(props: SearchBoxInputProps) {
  const { variant, type, placeholder, value, handleChange, counter } = props

  return (
    <Input
      type={type}
      variant={variant}
      placeholder={placeholder}
      value={value}
      leftIcon={<Icon as={HiSearch} color="primary.400" />}
      rightIcon={
        <Badge variant="solid" colorScheme="primary" fontSize="sm">
          {counter}
        </Badge>
      }
      handleChange={handleChange}
    />
  )
}

SearchBoxInput.defaultProps = {
  type: 'text',
}
