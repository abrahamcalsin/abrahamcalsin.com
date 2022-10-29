import type * as React from 'react'
import { InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps {
  type?: ChakraInputProps['type']
  variant?: ChakraInputProps['variant']
  placeholder?: ChakraInputProps['placeholder']
  value?: ChakraInputProps['value']
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  handleChange?: ChakraInputProps['onChange']
}

export type { InputProps }
