import * as React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

import { Introduction } from '~/components/introduction'
import { WorkItem } from '~/components/work-item'
import { ProjectsPageProps } from '~/typings/pages/projects'

export function Content(props: ProjectsPageProps) {
  const { projects } = props

  return (
    <Box mt={{ base: '0', sm: '20' }} mb={{ base: '0', sm: '8' }}>
      <Introduction title="Proyectos" additionalInfo={<Text as="span">({projects.length})</Text>}>
        <Text fontWeight="medium" lineHeight={{ base: '6', sm: '8' }}>
          En esta sección puedes ver algunos de mis proyectos más destacados.{' '}
          <Link
            href="https://github.com/abrahamcalsin"
            className="link-underline"
            _hover={{
              textDecor: 'none',
            }}
            isExternal
          >
            Puedes verlos todos en mi GitHub.
          </Link>
        </Text>
      </Introduction>
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
            packageName={project.properties.packageName.rich_text[0]?.plain_text}
            packageDownloads={project.properties.type.select.name === 'package' && true}
          />
        ))}
      </Box>
    </Box>
  )
}
