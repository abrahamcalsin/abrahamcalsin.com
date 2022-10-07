import * as React from 'react'
import { Badge, Box } from '@chakra-ui/react'

interface PreviewBoxProps {
  children: React.ReactNode
  previewVisible?: boolean
}

export function PreviewBox(props: PreviewBoxProps) {
  const { children, previewVisible = true } = props

  return (
    <Box
      position="relative"
      width="full"
      px="7"
      py="4"
      bg="white"
      shadow="0 10px 30px rgba(38, 40, 61, 0.07)"
      rounded="md"
      my="8"
      _dark={{
        bg: 'primary.800',
      }}
    >
      {previewVisible && (
        <Badge
          position="absolute"
          top="-2.5"
          left="4"
          px="1.5"
          py="0.5"
          backgroundColor="secondary.500"
          textColor="white"
          fontSize={{ base: 'x-small', sm: 'xs' }}
        >
          Preview
        </Badge>
      )}
      {children}
    </Box>
  )
}
