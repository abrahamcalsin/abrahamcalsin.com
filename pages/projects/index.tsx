import React from 'react'

import { Meta } from '~/components/meta'
import { ProjectsScreen } from '~/screens/projects/projects'
import isProduction from '~/utils/isProduction'

export interface ProjectsPageProps<T> {
  projects: T[]
}

function ProjectsPage<T extends Record<string, any>[]>(props: ProjectsPageProps<T>) {
  const { projects } = props

  return (
    <>
      <Meta title="Projects" />
      <ProjectsScreen projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  const apiUrlDevelopment = 'http://localhost:3000/api/projects'
  const apiUrlProduction = 'https://www.abrahamcalsin.com/api/projects'

  const response = await fetch(
    `${isProduction ? apiUrlProduction : apiUrlDevelopment}?X-Api-Public-Key=${process.env.API_ROUTE_SECRET}`,
  )
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
