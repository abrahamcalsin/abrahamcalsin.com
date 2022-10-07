import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ProjectsPageProps } from 'pages/projects'

import { TitleSection } from '~/components/title-section'
import { WorkItem } from '~/components/work-item'

export function Content<T extends Record<string, any>>(props: ProjectsPageProps<T>) {
  const { projects } = props

  return (
    <Box mt={{ base: '0', sm: '20' }} mb={{ base: '0', sm: '8' }}>
      <TitleSection
        title="Proyectos"
        externalLinkButton={true}
        href="https://github.com/abrahamcalsin"
        linkText="Puedes verlos todos en mi"
        linkTextBold="GitHub"
      />
      <Text mt="1.5" px="0" fontWeight="medium" lineHeight={{ base: '6', sm: '8' }}>
        En esta sección puedes ver algunos de mis proyectos más destacados.
      </Text>
      <Box position="relative" my={{ base: '10', sm: '16' }}>
        {projects.map(project => (
          <WorkItem
            key={project.id}
            type={project.properties.type.select.name}
            startedAt={project.properties.startedAt.date.start}
            title={project.properties.name.title[0].text.content}
            description={project.properties.description.rich_text[0].plain_text}
            tags={project.properties.tags.multi_select.map((tag: { name: string }) => tag.name)}
            webHref={project.properties.webHref.url}
            repositoryHref={project.properties.repositoryHref.url}
            packageHref={project.properties.packageHref.url}
            packageDownloads={project.properties.type.select.name === 'package' && true}
          />
        ))}
      </Box>
    </Box>
  )
}
