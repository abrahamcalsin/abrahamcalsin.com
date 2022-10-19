import * as React from 'react'

import { ButtonWrapperProps } from '~/typings/components/button'

import { ButtonWrapper } from './button-wrapper'

export function Button(props: ButtonWrapperProps) {
  const { as, type, variant, colorScheme, size, color, children, href, leftIcon, rightIcon, onClick } = props

  return (
    <ButtonWrapper
      as={as}
      type={type}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      href={href}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  )
}
