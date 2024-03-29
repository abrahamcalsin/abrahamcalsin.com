import { ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: ThemeComponentProps) => ({
    'html, body': {
      fontSize: {
        base: 'md',
        lg: 'lg',
      },
    },
    '::selection': {
      backgroundColor: mode('secondary.100', 'secondary.800')(props),
      color: mode('inherit', 'primary.200')(props),
    },
  }),
}

export default styles
