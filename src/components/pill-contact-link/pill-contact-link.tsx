import * as React from 'react'
import { MdVerified } from 'react-icons/md'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'

interface PillContactLinkProps {
  href: string
  svgIcon: React.ReactElement
  socialNetworkName: string
  username: string
}

export function PillContactLink(props: PillContactLinkProps) {
  const { svgIcon, socialNetworkName, href, username } = props

  return (
    <Link
      href={href}
      display="flex"
      gap={{ base: '3', sm: '3.5' }}
      bg="primary.100"
      px={{ base: '3', sm: '4' }}
      py={{ base: '2', sm: '2.5' }}
      borderRadius="md"
      borderWidth="1px"
      borderColor="primary.300"
      transitionProperty="opacity"
      _hover={{
        opacity: 0.8,
      }}
      _dark={{
        bg: 'transparent',
        borderColor: 'secondary.400',
      }}
      rel="noopener noreferrer"
      isExternal
    >
      <Text as="span" w={{ base: '5', sm: '6' }} minWidth="min-content" maxWidth="none">
        {svgIcon}
      </Text>
      <Flex flexDirection="column">
        <Text display="flex" alignItems="center" gap="1" mb="0" lineHeight="none">
          <Text as="span" fontSize="sm" fontWeight="bold" mb="-0.5">
            {socialNetworkName}
          </Text>
          <Text as="span" w={{ base: '3.5', sm: '4' }} display="inline-flex" textColor="secondary.400">
            <Icon w="4" height="full" as={MdVerified} />
          </Text>
        </Text>
        <Text
          as="span"
          fontSize={{ base: 'xs', sm: 'sm' }}
          textDecoration={{ base: 'underline', sm: 'none' }}
          display="block"
          overflow="hidden"
          noOfLines={1}
        >
          {username}
        </Text>
      </Flex>
    </Link>
  )
}
