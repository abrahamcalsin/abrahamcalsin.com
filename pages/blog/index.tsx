import { allBlogs } from 'contentlayer/generated'

import { Meta } from '~/components/meta'
import { BlogScreen } from '~/screens/blog'
import { Article } from '~/types/article'

interface BlogPageProps {
  articles: Article[]
}

function BlogPage(props: BlogPageProps) {
  const { articles } = props

  const allArticles = articles.slice(0)

  return (
    <>
      <Meta title="Blog" />
      <BlogScreen articles={allArticles} />
    </>
  )
}

export default BlogPage

export async function getStaticProps() {
  const articles = allBlogs.sort((article1, article2) => (article1.date > article2.date ? -1 : 1))

  return {
    props: {
      articles,
    },
  }
}
