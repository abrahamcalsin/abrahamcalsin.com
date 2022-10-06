import * as React from 'react'
import { Icon, Link, Text } from '@chakra-ui/react'

interface SocialNetworkButtonProps {
  socialNetworkName: string
  href: string
  socialNetworkIcon: any
}

export function SocialNetworkButton(props: SocialNetworkButtonProps) {
  const { socialNetworkName, href, socialNetworkIcon } = props

  return (
    <Link
      href={href}
      rel="noreferrer"
      display="flex"
      alignItems="center"
      gap="1"
      px="3"
      bg="primary.100"
      textColor="primary.600"
      borderWidth="2px"
      borderColor="primary.600"
      borderRadius="md"
      _dark={{
        backgroundColor: 'transparent',
        color: 'secondary.400',
        borderColor: 'secondary.400',
      }}
      _hover={{
        opacity: 0.8,
      }}
      isExternal
    >
      <Icon width="3.5" as={socialNetworkIcon} />
      <Text as="span" fontWeight="extrabold" fontSize="17" letterSpacing="tight" lineHeight="2.1">
        {socialNetworkName}
      </Text>
    </Link>
  )
}
