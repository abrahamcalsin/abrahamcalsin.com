import * as React from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
import { Box, Grid, Heading, Icon, Link, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { PillContactLink } from '~/components/pill-contact-link'
import { PillTechnologies } from '~/components/pill-technologies'
import { TitleSection } from '~/components/title-section'

export function Content() {
  return (
    <Box mt={{ base: '0', sm: '90px' }} mb={{ base: '0', sm: '30px' }}>
      <TitleSection
        title="Sobre Mi"
        externalLinkButton={true}
        href="https://resume.abrahamcalsin.com"
        linkText="Para más detalles, consulta mi"
        linkTextBold="CV"
      />
      <Text>
        Hey, hola! Soy Abraham Calsin una persona autodidacta, me apasiona la programación, actualmente me desempeño
        como desarrollador frontend, creo proyectos de código abierto.
      </Text>
      <Text mt="4">
        A lo largo de mi aventura en el mundo del desarrollo web, me involucre en el desarrollo de varios proyectos,
        proponiéndome retos, los cuales me enseñaron a corregir mis propios errores al desarrollar un Sitio Web. Puedes
        ver mi trabajo en la sección de
        <RouterLink href="/projects">
          <Link className="font-bold link-underline ml-0.7">Proyectos.</Link>
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
      <PillTechnologies />
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
        gap={{ base: '8px', sm: '24px' }}
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
