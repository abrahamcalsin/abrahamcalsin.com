import * as React from 'react'
import { FaReact } from 'react-icons/fa'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { SiNextdotjs, SiTypescript, SiVercel } from 'react-icons/si'
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
import { Box, Flex, Grid, Heading, Icon, Link, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { Button } from '~/components/button'
import { Introduction } from '~/components/introduction'
import { PillContactLink } from '~/components/pill-contact-link'

export function Content() {
  return (
    <Box mt={{ base: '0', sm: '20' }} mb={{ base: '0', sm: '7' }}>
      <Introduction title="Sobre Mi" />
      <Text>
        Hey, hola! Soy Abraham Calsin una persona autodidacta, me apasiona la programación, actualmente me desempeño
        como desarrollador frontend, creo proyectos de código abierto.
      </Text>
      <Text mt="4">
        A lo largo de mi aventura en el mundo del desarrollo web, me involucre en el desarrollo de varios proyectos,
        proponiéndome retos, los cuales me enseñaron a corregir mis propios errores al desarrollar un Sitio Web. Puedes
        ver mi trabajo en la sección de
        <RouterLink href="/projects">
          <Link
            fontWeight="bold"
            ml="1.5"
            className="link-underline"
            _hover={{
              textDecor: 'none',
            }}
          >
            Proyectos.
          </Link>
        </RouterLink>
      </Text>
      <Heading
        as="h3"
        fontSize="2xl"
        fontWeight="black"
        textColor="primary.800"
        my="5"
        _dark={{
          color: 'primary.200',
        }}
      >
        Habilidades:
      </Heading>
      <p>Estas son algunas de mis tecnologías favoritas.</p>
      <Flex flexWrap="wrap" gap={{ base: '2', sm: '2.5' }} mt="3">
        <Button
          variant="outline"
          colorScheme="cyan"
          as="a"
          href="https://reactjs.org"
          leftIcon={<Icon as={FaReact} mr="-1" />}
        >
          React.js
        </Button>
        <Button
          variant="outline"
          colorScheme="primary"
          as="a"
          href="https://nextjs.org"
          leftIcon={<Icon as={SiNextdotjs} mr="-1" />}
        >
          Next.js
        </Button>
        <Button
          variant="outline"
          colorScheme="blue"
          as="a"
          href="https://www.typescriptlang.org"
          leftIcon={<Icon as={SiTypescript} mr="-1" />}
        >
          TypeScript
        </Button>
        <Button
          variant="outline"
          colorScheme="primary"
          as="a"
          href="https://vercel.com"
          leftIcon={<Icon as={SiVercel} mr="-1" />}
        >
          Vercel
        </Button>
      </Flex>
      <Heading
        as="h3"
        fontSize="2xl"
        fontWeight="black"
        textColor="primary.800"
        my="5"
        _dark={{
          color: 'primary.200',
        }}
      >
        Contacto:
      </Heading>
      <Text>Siempre puedes contactarme por los siguientes medios.</Text>
      <Grid
        mt="3"
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(auto-fill, minmax(12rem, 1fr))' }}
        gap={{ base: '2', sm: '6' }}
      >
        <PillContactLink
          svgIcon={<Icon width="full" height="full" as={MdOutlineMarkEmailRead} />}
          socialNetworkName="Email"
          href="mailto:hello.abrahamcalsin@gmail.com"
          username="@abrahamcalsin"
        />
        <PillContactLink
          svgIcon={<Icon width="full" height="full" as={TbBrandLinkedin} />}
          socialNetworkName="LinkedIn"
          href="https://www.linkedin.com/in/abrahamcalsin"
          username="@abrahamcalsin"
        />
        <PillContactLink
          svgIcon={<Icon width="full" height="full" as={TbBrandTwitter} />}
          socialNetworkName="Twitter"
          href="https://twitter.com/abraham_calsin"
          username="@abraham_calsin"
        />
        <PillContactLink
          svgIcon={<Icon width="full" height="full" as={TbBrandGithub} />}
          socialNetworkName="GitHub"
          href="https://github.com/abrahamcalsin"
          username="@abrahamcalsin"
        />
      </Grid>
    </Box>
  )
}
