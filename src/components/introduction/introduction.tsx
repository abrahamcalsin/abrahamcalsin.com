import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export interface IntroductionProps {
  title: string
  children?: React.ReactNode
}

export function Introduction(props: IntroductionProps) {
  const { title, children } = props

  return (
    <Box mb="4">
      <Heading
        as="h1"
        textColor="primary.800"
        fontWeight="black"
        mb={{ base: '2', sm: '0' }}
        _dark={{
          color: 'primary.200',
        }}
      >
        {title}
      </Heading>
      <Box mt="4">{children}</Box>
    </Box>
  )
}
