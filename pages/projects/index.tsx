import React from 'react'

import { MainLayout } from '~/layouts/main.layout'
import { Works } from '~/components/works'
import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'

const Projects = () => {
  return (
    <MainLayout>
      <Meta title="Proyectos" />

      <div className="mt-0 mb-3.7 sm:pt-11.2 text-primary-600 dark:text-inherit">
        <TitleSection
          title="Proyectos"
          externalLinkButton={true}
          href="https://github.com/abrahamcalsin"
          linkText="Puedes verlos todos en mi"
          linkTextBold="GitHub"
        />

        <p className="leading-6 sm:leading-9 font-medium mt-0.7 px-0">
          En esta sección puedes ver algunos de mis proyectos más destacados.
        </p>

        <Works />
      </div>
    </MainLayout>
  )
}
export default Projects
