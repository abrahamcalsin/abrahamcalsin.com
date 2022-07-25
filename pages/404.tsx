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
        my={{ base: '0px', sm: '104px' }}
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
            w={{ base: '204px', sm: '250px' }}
            bg="secondary.400"
            textColor="main"
            fontSize="md"
            mt="18px"
            py="12px"
            px="18px"
            borderRadius="full"
            transitionProperty="opacity"
            _hover={{
              opacity: 0.8,
            }}
            className="shadow-lg shadow-primary/5"
          >
            Volver a Inicio
          </Link>
        </RouterLink>
      </Flex>
    </MainLayout>
  )
}
export default custom404
