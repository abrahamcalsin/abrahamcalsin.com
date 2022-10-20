import { Box } from '@chakra-ui/react'

import { ArticlePreview } from '~/screens/blog/components/article-preview'
import Article from '~/types/article'

interface AllArticlesProps {
  articles: Article[]
}

export function AllArticles(props: AllArticlesProps) {
  const { articles } = props

  return (
    <Box mt="5">
      {articles.map(article => (
        <ArticlePreview
          key={article.slug}
          title={article.title}
          description={article.description}
          date={article.date}
          slug={article.slug}
          readingTime={article.readingTime}
        />
      ))}
    </Box>
  )
}
