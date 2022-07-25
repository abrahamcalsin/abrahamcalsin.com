import * as React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { QuotationMarkIcon } from '~/components/svgs/icons'

export default function QuoteAbrahamCalsin() {
  return (
    <Flex
      maxW="550px"
      gap="5"
      bg="whiteAlpha.600" // bg-white/50
      textColor="primary.600"
      fontSize={{ base: 'sm', sm: 'lg' }}
      p={{ base: '20px', sm: '36px' }}
      my={{ base: '52px', sm: '90px' }}
      mx="auto"
      borderWidth="1px"
      borderColor="primary.600"
      borderRadius="md"
      _dark={{
        bg: 'transparent', // dark:bg-secondary/10
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
        <b className="block mt-1">— Abraham Calsin</b>
      </Text>
    </Flex>
  )
}
