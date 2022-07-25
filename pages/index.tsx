import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Meta } from '~/components/meta'
import QuoteAbrahamCalsin from '~/components/quote-abrahamcalsin'
import { SocialNetworkButton } from '~/components/social-network-button'
import { GithubSocialNetwork, LinkedinSocialNetwork } from '~/components/svgs'
import { MainLayout } from '~/layouts/main.layout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Meta />
      <Box textColor="primary.500">
        <Box textAlign="left" pt={{ base: '0px', sm: '90px' }} lineHeight={{ base: '28px', sm: '40px' }}>
          <Text fontWeight="semibold">Hola, mi nombre es</Text>
          <Heading
            as="h1"
            textColor="primary.800"
            fontSize={{ base: '3xl', sm: '36px' }}
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
              href="https://www.linkedin.com/in/abrahamcalsin/"
              svgSocialNetwork={<LinkedinSocialNetwork />}
            />
            <SocialNetworkButton href="https://github.com/abrahamcalsin" svgSocialNetwork={<GithubSocialNetwork />} />
          </Flex>
        </Box>
        <QuoteAbrahamCalsin />
      </Box>
    </MainLayout>
  )
}
export default Home
