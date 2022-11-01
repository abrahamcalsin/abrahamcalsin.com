import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
})

const variantFilled = definePartsStyle(() => {
  return {
    field: {
      bg: 'primary.100',
      textColor: 'primary.600',
      _placeholder: {
        color: 'primary.400',
      },
      _hover: {
        bg: 'primary.200',
      },
      _dark: {
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
      },
    },
  }
})

const variants = {
  filled: variantFilled,
}

export const input = defineMultiStyleConfig({
  baseStyle,
  variants,
})
