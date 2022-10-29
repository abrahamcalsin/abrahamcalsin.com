import type * as React from 'react'
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

interface ButtonProps {
  as?: ChakraButtonProps['as']
  type?: ChakraButtonProps['type']
  variant?: ChakraButtonProps['variant']
  colorScheme?: ChakraButtonProps['colorScheme']
  size?: ChakraButtonProps['size']
  color?: string
  href?: string
  leftIcon?: ChakraButtonProps['leftIcon']
  rightIcon?: ChakraButtonProps['rightIcon']
  children?: ChakraButtonProps['children']
  handleClick?: () => void
}

type ButtonWrapperProps = Pick<
  ButtonProps,
  'as' | 'type' | 'variant' | 'colorScheme' | 'size' | 'color' | 'href' | 'leftIcon' | 'rightIcon' | 'handleClick'
> & {
  children: React.ReactNode
}

export type { ButtonProps, ButtonWrapperProps }
