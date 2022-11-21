import * as React from 'react'
import { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { ProjectsScreen } from '~/screens/projects/projects'
import { DEFAULT_HEADERS } from '~/services'
import { ProjectsPageProps } from '~/typings/pages/projects'

function ProjectsPage(props: ProjectsPageProps) {
  const { projects } = props

  return (
    <>
      <Meta title="Projects" />
      <ProjectsScreen projects={projects} />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProjectsPageProps>> {
  const response = await fetch(`${process.env.API_ROUTE_URL}/projects`, {
    headers: DEFAULT_HEADERS,
  })

  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      projects: data.results,
    },
    revalidate: 10,
  }
}

export default ProjectsPage
