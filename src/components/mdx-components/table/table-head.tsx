import * as React from 'react'
import { chakra } from '@chakra-ui/react'

export function TableHead(props: any) {
  return (
    <chakra.th
      bg="primary.800"
      fontSize="md"
      textColor="primary.400"
      fontWeight="bold"
      padding="10px"
      borderColor="primary.600"
      borderWidth="1px"
      _dark={{
        borderColor: 'primary.700',
        textColor: 'inherit',
      }}
      {...props}
    />
  )
}
