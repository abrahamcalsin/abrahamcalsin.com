import Article from '~/types/article'

import { ArticlePreview } from '~/components/article-preview'

interface AllArticlesProps {
  articles: Article[]
}

export const AllArticles = (props: AllArticlesProps) => {
  const { articles } = props

  return (
    <>
      <div className="mt-10">
        {articles.map(article => (
          <ArticlePreview
            key={article.slug}
            title={article.title}
            date={article.date}
            slug={article.slug}
            description={article.description}
          />
        ))}
      </div>
    </>
  )
}
