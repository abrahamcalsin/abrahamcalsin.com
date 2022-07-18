import * as React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

interface ButtonLinkProps {
  label?: string
  icon?: React.ReactElement
  href?: string
}

export function ButtonLink({ label, icon, href }: ButtonLinkProps) {
  return (
    <Box as="button" mt="3.5" transition="opacity 0.3s" _hover={{ opacity: '0.8' }}>
      <Link
        href={href}
        rel="noreferrer"
        display="flex"
        alignItems="center"
        px="3"
        py="1.5"
        bg="primary.100"
        borderWidth="2px"
        borderColor="primary.600"
        borderRadius="md"
        fontWeight="bold"
        textDecoration="underline"
        _dark={{
          bg: 'transparent', // dark:bg-secondary/10
          color: 'secondary.400',
          borderColor: 'secondary.400',
        }}
        isExternal
      >
        {label}
        <Text as="span" w="4" ml="1.5" display="inline-block">
          {icon}
        </Text>
      </Link>
    </Box>
  )
}
