import * as React from 'react'
import { Box } from '@chakra-ui/react'

import { SearchBoxContainerProps } from '~/typings/components/search-box'

export function SearchBoxContainer(props: SearchBoxContainerProps) {
  const { children } = props

  return (
    <Box position="relative" maxW="full" mx="auto" zIndex="2">
      {children}
    </Box>
  )
}
