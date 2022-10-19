import { Box, Flex, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      textColor="primary.600"
      mt="14"
      mb={{ base: '20', sm: '10' }}
      _dark={{
        color: 'primary.400',
      }}
    >
      <Flex
        width="100%"
        display={{ base: 'block', sm: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', sm: 'row' }}
        bg="whiteAlpha.600"
        px={{ base: '5', sm: '6' }}
        py={{ base: '3.5', sm: '4' }}
        textAlign="center"
        borderTop="2px"
        borderColor="primary.400"
        _dark={{
          bg: 'transparent',
        }}
      >
        <Text fontSize="sm" mb="0">
          {'{'}Developed by{' '}
          <Text as="span" fontWeight="bold">
            Abraham Calsin{'}'}
          </Text>
        </Text>
        <Text fontSize="sm" mt={{ base: '-1', sm: '0' }} mb="0">
          With <b>Next.js</b>, ChakraUI and Vercel
        </Text>
      </Flex>
    </Box>
  )
}
