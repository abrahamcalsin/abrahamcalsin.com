import * as React from 'react'
import { Button } from '@chakra-ui/react'

import { ButtonWrapperProps } from '~/typings/components/button'

export function ButtonWrapper(props: ButtonWrapperProps) {
  const { as, type, variant, size, colorScheme, color, href, leftIcon, rightIcon, children } = props

  return (
    <Button
      as={as}
      type={type}
      href={as === 'a' ? href : undefined}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      target={as === 'a' ? '_blank' : undefined}
      rel={as === 'a' ? 'noreferrer' : undefined}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      textColor={color}
      px="3"
      borderWidth={variant === 'outline' ? '1px' : undefined}
      borderRadius="md"
    >
      {children}
    </Button>
  )
}
