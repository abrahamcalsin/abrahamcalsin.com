import { Box, Text } from '@chakra-ui/react'

export function Tag(props: any) {
  const { label } = props

  return (
    <Box className="font-robotoMono">
      <Text
        mb="1.5"
        fontSize={{ base: 'sm', sm: 'md' }}
        textColor="primary.400"
        _dark={{
          color: 'secondary.400',
        }}
      >
        {label}
      </Text>
    </Box>
  )
}
