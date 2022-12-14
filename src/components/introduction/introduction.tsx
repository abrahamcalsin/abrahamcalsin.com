import * as React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

import { IntroductionProps } from '~/typings/components/introduction'

export function Introduction(props: IntroductionProps) {
  const { title, additionalInfo, children } = props

  return (
    <Box mb="4">
      <Heading
        role="heading"
        as="h1"
        textColor="primary.800"
        fontWeight="black"
        mb={{ base: '2', sm: '0' }}
        _dark={{
          color: 'primary.200',
        }}
      >
        {title} <Box display="inline-block">{additionalInfo}</Box>
      </Heading>
      <Box mt="4">{children}</Box>
    </Box>
  )
}
