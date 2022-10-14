import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { mainTheme } from '../src/themes/main'

import '~/styles/nprogress.css'
import '~/styles/coding.css'

export const decorators = [story => <ChakraProvider theme={mainTheme}>{story()}</ChakraProvider>]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
}
