import * as React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import QuoteAbrahamCalsin from '~/components/quote-abrahamcalsin'
import { SocialNetworkButton } from '~/components/social-network-button'

export function Content() {
  return (
    <Box textColor="primary.500">
      <Box textAlign="left" pt={{ base: '0', sm: '20' }} lineHeight={{ base: '7', sm: '10' }}>
        <Text fontWeight="semibold">Hola, mi nombre es</Text>
        <Heading
          as="h1"
          textColor="primary.800"
          fontSize={{ base: '3xl', sm: '4xl' }}
          fontWeight="extrabold"
          my="1"
          _dark={{ color: 'primary.200' }}
        >
          Abraham Calsin.
          <Text as="span" textColor="primary.600" _dark={{ color: 'primary.400' }} mt="0.5" display="block">
            Front-end Developer
          </Text>
        </Heading>
        <Text fontWeight="semibold" mb="5">
          Me apasiona la programación, creo proyectos de código abierto.
        </Text>
        <Flex justifyContent="start" gap="3">
          <SocialNetworkButton
            socialNetworkName="Linkedin"
            href="https://www.linkedin.com/in/abrahamcalsin/"
            socialNetworkIcon={SiLinkedin}
          />
          <SocialNetworkButton
            socialNetworkName="GitHub"
            href="https://github.com/abrahamcalsin"
            socialNetworkIcon={FaGithub}
          />
        </Flex>
      </Box>
      <QuoteAbrahamCalsin />
    </Box>
  )
}
