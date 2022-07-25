import * as React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'

import { BadgeCheckFillIcon } from '~/components/svgs/icons'

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
      alignItems="center"
      gap={{ base: '12px', sm: '14px' }}
      bg="primary.100"
      px={{ base: '12px', sm: '16px' }}
      py={{ base: '8px', sm: '10px' }}
      borderRadius="md"
      borderWidth="1px"
      borderColor="primary.300"
      transitionProperty="opacity"
      _hover={{
        opacity: 0.8,
      }}
      _dark={{
        bg: 'transparent', // dark:bg-secondary/10
        borderColor: 'secondary.400',
      }}
      rel="noopener noreferrer"
      isExternal
    >
      <Text as="span" w={{ base: '20px', sm: '24px' }} minWidth="min-content" maxWidth="none">
        {svgIcon}
      </Text>
      <Flex flexDirection="column" gap="1px">
        <Text display="flex" alignItems="center" gap="8px" mb="0" lineHeight="none">
          <Text as="span" fontSize="sm" fontWeight="bold" mb="-1px">
            {socialNetworkName}
          </Text>
          <Text as="span" w={{ base: '14px', sm: '16px' }} display="block" textColor="secondary.400">
            <BadgeCheckFillIcon />
          </Text>
        </Text>
        <Text
          as="span"
          fontSize={{ base: 'xs', sm: 'sm' }}
          textDecoration={{ base: 'underline', sm: 'none' }}
          display="block"
          overflow="hidden"
          noOfLines={1}
          mt="-1px"
        >
          {username}
        </Text>
      </Flex>
    </Link>
  )
}
