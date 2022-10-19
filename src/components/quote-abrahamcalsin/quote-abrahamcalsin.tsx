import * as React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { QuotationMarkIcon } from '~/components/svgs/icons'

export default function QuoteAbrahamCalsin() {
  return (
    <Flex
      maxW="550px"
      gap="5"
      bg="whiteAlpha.600"
      textColor="primary.600"
      fontSize={{ base: 'sm', sm: 'lg' }}
      p={{ base: '5', sm: '9' }}
      my={{ base: '14', sm: '24' }}
      mx="auto"
      borderWidth="1px"
      borderColor="primary.600"
      borderRadius="md"
      _dark={{
        bg: 'transparent',
        color: 'secondary.400',
        borderColor: 'secondary.400',
      }}
    >
      <Box w="20">
        <QuotationMarkIcon />
      </Box>
      <Text
        as="blockquote"
        fontSize={{ base: 'md', sm: 'lg' }}
        fontWeight="normal"
        fontStyle="italic"
        lineHeight="normal"
      >
        Todo lo que hagas con esfuerzo y sacrificio, lo obtendras con beneficios; ¡No te rindas!.
        <br />
        <Text as="span" fontWeight="bold" display="block" mt="2">
          — Abraham Calsin
        </Text>
      </Text>
    </Flex>
  )
}
