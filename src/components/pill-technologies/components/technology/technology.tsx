import * as React from 'react'
import { AiFillTool } from 'react-icons/ai'
import { Icon, Link, Text } from '@chakra-ui/react'

interface TechnologyProps {
  href?: string
  label?: string
  icon?: any
  fill?: string
}

export function Technology(props: TechnologyProps) {
  const { href = '#', label = '#stack', icon = AiFillTool, fill = 'primary.700' } = props

  return (
    <Link
      href={href}
      rel="noreferrer"
      display="inline-flex"
      alignItems="center"
      gap="1"
      bg="primary.100"
      textColor="primary.800"
      borderRadius="md"
      borderWidth="1px"
      borderColor="primary.600"
      py="1.5"
      px={{ base: '2', sm: '3' }}
      _hover={{
        opacity: 0.8,
      }}
      _dark={{
        bg: 'transparent',
        textColor: 'primary.200',
        borderColor: 'secondary.400',
      }}
      isExternal
    >
      <Icon width="4" fill={fill} as={icon} />
      <Text as="span" fontSize="sm" fontWeight="bold" textColor="primary.700">
        {label}
      </Text>
    </Link>
  )
}
