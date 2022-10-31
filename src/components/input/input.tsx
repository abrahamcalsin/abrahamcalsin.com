import * as React from 'react'
import { Input as ChakraInput, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'

import { InputProps } from '~/typings/components/input'

export function Input(props: InputProps) {
  const { type, variant, placeholder, value, leftIcon, rightIcon, handleChange } = props

  return (
    <InputGroup>
      {leftIcon ? <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement> : null}
      <ChakraInput
        type={type}
        role="input"
        variant={variant}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {rightIcon ? <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement> : null}
    </InputGroup>
  )
}
