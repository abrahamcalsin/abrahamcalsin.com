import * as React from 'react'
import { Link } from '@chakra-ui/react'

interface SocialNetworkButtonProps {
  href: string
  svgSocialNetwork: React.ReactElement
}

export function SocialNetworkButton(props: SocialNetworkButtonProps) {
  const { href, svgSocialNetwork } = props

  return (
    <Link
      href={href}
      rel="noreferrer"
      w={{ base: '88px', sm: '96px' }}
      py="2"
      px="3"
      bg="primary.100"
      textColor="primary.600"
      borderWidth="2px"
      borderColor="primary.600"
      borderRadius="md"
      _dark={{
        backgroundColor: 'transparent', // dar:bg-secondary/10
        color: 'secondary.400',
        borderColor: 'secondary.400',
      }}
      _hover={{
        opacity: 0.8,
      }}
      isExternal
    >
      {svgSocialNetwork}
    </Link>
  )
}
