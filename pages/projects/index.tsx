import React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'
import { Works } from '~/components/works'
import { MainLayout } from '~/layouts/main.layout'

const Projects = () => {
  return (
    <MainLayout>
      <Meta title="Proyectos" />
      <Box mt={{ base: '0', sm: '90px' }} mb={{ base: '0', sm: '30px' }}>
        <TitleSection
          title="Proyectos"
          externalLinkButton={true}
          href="https://github.com/abrahamcalsin"
          linkText="Puedes verlos todos en mi"
          linkTextBold="GitHub"
        />
        <Text mt="6px" px="0" fontWeight="medium" lineHeight={{ base: '24px', sm: '36px' }}>
          En esta sección puedes ver algunos de mis proyectos más destacados.
        </Text>
        <Works />
      </Box>
    </MainLayout>
  )
}
export default Projects
