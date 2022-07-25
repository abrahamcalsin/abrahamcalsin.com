import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      textColor="primary.600"
      mt="14"
      _dark={{
        color: 'primary.400',
      }}
      className="mb-11 sm:mb-10"
    >
      <Flex
        width="100%"
        display={{ base: 'block', sm: 'flex' }}
        justifyContent="space-between"
        direction={{ base: 'column', sm: 'row' }}
        alignItems="center"
        bg="whiteAlpha.600" // bg-white/80
        px={{ base: '20px', sm: '25px' }}
        py={{ base: '14px', sm: '20px' }}
        textAlign="center"
        borderTop="2px"
        borderColor="primary.400"
        _dark={{
          bg: 'transparent',
        }}
      >
        <Text fontSize="sm" mb="0px">
          {'{'}Developed by{' '}
          <Text as="span" fontWeight="bold">
            Abraham Calsin{'}'}
          </Text>
        </Text>
        <Text fontSize="sm" mt={{ base: '-4px', sm: '0' }} mb="0">
          With Next.js, Tailwind and Vercel
        </Text>
      </Flex>
    </Box>
  )
}
export default Footer
