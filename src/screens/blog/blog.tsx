import * as React from 'react'

import { MainLayout } from '~/layouts/main'
import Article from '~/types/article'

import { Content } from './components/content'

export interface BlogScreenProps {
  articles: Article[]
}

export function BlogScreen(props: BlogScreenProps) {
  const { articles } = props

  return (
    <MainLayout>
      <Content articles={articles} />
    </MainLayout>
  )
}
