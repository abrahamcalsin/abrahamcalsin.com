import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts/main.layout'

const custom404 = () => {
  return (
    <MainLayout>
      <Meta title="404" />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textColor="primary.600"
        fontSize="3xl"
        fontWeight="black"
        textAlign="center"
        mx="auto"
        my={{ base: '0', sm: '24' }}
        _dark={{
          textColor: 'primary.400',
        }}
      >
        <Heading as="h1" textColor="inherit">
          404
        </Heading>
        <Text>Página No Encontrada</Text>
        <RouterLink href="/">
          <Link
            maxWidth="full"
            width={{ base: '48', sm: '60' }}
            bg="secondary.400"
            textColor="main"
            fontSize="md"
            mt="4"
            py="3"
            px="4"
            borderRadius="full"
            boxShadow="lg"
            transitionProperty="opacity"
            _hover={{
              opacity: 0.8,
            }}
          >
            Volver a Inicio
          </Link>
        </RouterLink>
      </Flex>
    </MainLayout>
  )
}
export default custom404
