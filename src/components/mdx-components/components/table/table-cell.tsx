import * as React from 'react'
import { chakra } from '@chakra-ui/react'

export function TableCell(props: React.ReactElement) {
  return (
    <chakra.td
      fontSize="md"
      fontWeight="normal"
      borderColor="primary.500"
      borderWidth="1px"
      padding="2.5"
      whiteSpace="normal"
      _dark={{
        borderColor: 'primary.700',
      }}
      {...props}
    />
  )
}
