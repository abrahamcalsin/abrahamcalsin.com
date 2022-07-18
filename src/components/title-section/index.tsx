import * as React from 'react'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'

import { ExternalLinkIcon } from '~/components/svgs/icons'

export interface TitleSectionProps {
  title: string
  externalLinkButton: boolean
  href?: string
  linkText?: string
  linkTextBold?: string
}

export function TitleSection(props: TitleSectionProps) {
  const { title, externalLinkButton, href, linkText, linkTextBold } = props

  return (
    <Flex flexDirection={{ base: 'column', sm: 'row' }} alignItems="flex-start" columnGap="16px" mb="16px">
      <Heading
        as="h1"
        textColor="primary.800"
        fontWeight="black"
        mb={{ base: '8px', sm: '0' }}
        _dark={{
          color: 'primary.200',
        }}
      >
        {title}
      </Heading>
      {externalLinkButton ? (
        <Link
          href={href}
          rel="noreferrer"
          bg="primary.100"
          textColor="primary.700"
          display="inline-flex"
          alignItems="center"
          columnGap="6px"
          px="8px"
          py="4px"
          fontSize="sm"
          fontWeight="medium"
          borderWidth="1px"
          borderColor="primary.700"
          borderRadius="md"
          transitionProperty="opacity"
          _hover={{ textDecoration: 'none', opacity: 0.8 }}
          _dark={{
            bg: 'transparent', // dark:bg-secondary/10
            textColor: 'secondary.400',
            borderColor: 'secondary.400',
          }}
          isExternal
        >
          {linkText}
          {linkTextBold && (
            <Text as="span" fontWeight="bold" textDecoration="underline">
              {linkTextBold}
            </Text>
          )}
          <ExternalLinkIcon />
        </Link>
      ) : null}
    </Flex>
  )
}
