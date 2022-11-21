import * as React from 'react'

import { MainLayout } from '~/layouts/main'

import { Content } from './components/content'

interface ProjectsScreenProps {
  projects: any[]
}

export function ProjectsScreen(props: ProjectsScreenProps) {
  const { projects } = props

  return (
    <MainLayout>
      <Content projects={projects} />
    </MainLayout>
  )
}
