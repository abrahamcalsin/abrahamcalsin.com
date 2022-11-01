import type { Meta, Story } from '@storybook/react'
import { allBlogs } from 'contentlayer/generated'

import { SearchBox } from '~/components/search-box'
import { AllArticles } from '~/screens/blog/components/all-articles'
import { ArticlePreview } from '~/screens/blog/components/article-preview'

export default {
  title: 'Components/Search Box',
  component: SearchBox,
} as Meta

const filterArticles = allBlogs.slice(0, 3)

export const WithDefault: Story = () => (
  <SearchBox
    data={filterArticles}
    variant="filled"
    filter="title"
    placeholder="Escribe aquí para filtrar artículos..."
    renderResultItem={article => (
      <ArticlePreview
        key={article.slug}
        date={article.date}
        title={article.title}
        description={article.description}
        readingTime={article.readingTime}
        slug={article.slug}
      />
    )}
  />
)

export const WidthDefaultResults: Story = () => (
  <SearchBox
    data={filterArticles}
    variant="filled"
    filter="title"
    placeholder="Escribe aquí para filtrar artículos..."
    renderResultItem={article => (
      <ArticlePreview
        key={article.slug}
        date={article.date}
        title={article.title}
        description={article.description}
        readingTime={article.readingTime}
        slug={article.slug}
      />
    )}
    renderDefaultResults={<AllArticles articles={filterArticles} />}
  />
)
