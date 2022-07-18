import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { Meta } from '~/components/meta'
import { PillContactLink } from '~/components/pill-contact-link'
import { PillTechnologies } from '~/components/pill-technologies'
import { EmailStrokeIcon, LinkedinStrokeIcon, OctocatStrokeIcon, TwitterStrokeIcon } from '~/components/svgs/icons'
import { TitleSection } from '~/components/title-section'
import { MainLayout } from '~/layouts/main.layout'

const AboutMe = () => {
  return (
    <MainLayout>
      <Meta title="Sobre Mi" />
      <Box mt={{ base: '0', sm: '90px' }} mb={{ base: '0', sn: '30px' }}>
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
          proponiéndome retos, los cuales me enseñaron a corregir mis propios errores al desarrollar un Sitio Web.
          Puedes ver mi trabajo en la sección de
          <Link href="/projects">
            <a className="font-bold link-underline ml-0.7">Proyectos.</a>
          </Link>
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
            svgIcon={<EmailStrokeIcon />}
            socialNetworkName="Email"
            href="mailto:hello.abrahamcalsin@gmail.com"
            username="@abrahamcalsin"
          />
          <PillContactLink
            svgIcon={<LinkedinStrokeIcon />}
            socialNetworkName="LinkedIn"
            href="https://www.linkedin.com/in/abrahamcalsin"
            username="@abrahamcalsin"
          />
          <PillContactLink
            svgIcon={<TwitterStrokeIcon />}
            socialNetworkName="Twitter"
            href="https://twitter.com/abraham_calsin"
            username="@abraham_calsin"
          />
          <PillContactLink
            svgIcon={<OctocatStrokeIcon />}
            socialNetworkName="GitHub"
            href="https://github.com/abrahamcalsin"
            username="@abrahamcalsin"
          />
        </Grid>
      </Box>
    </MainLayout>
  )
}
export default AboutMe
