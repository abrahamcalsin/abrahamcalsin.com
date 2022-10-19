import * as React from 'react'

import { MainLayout } from '~/layouts/main'

import { Content } from './components/content'

interface ProjectsScreenProps<T> {
  projects: T[]
}

export function ProjectsScreen<T extends Record<string, any>[]>(props: ProjectsScreenProps<T>) {
  const { projects } = props

  return (
    <MainLayout>
      <Content projects={projects} />
    </MainLayout>
  )
}
