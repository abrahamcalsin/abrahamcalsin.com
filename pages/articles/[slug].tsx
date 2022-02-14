import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import ArticleType from '~/types/article'
import { CMS_NAME } from '~/lib/constants'
import { MainLayout } from '~/layouts'
import { ArticleBody } from '~/components/article-body'
import { getArticleBySlug, getAllArticles } from '~/lib/api'
import markdownToHtml from '~/libmarkdownToHtml'

interface ArticleProps {
  article: ArticleType
}

const Article = (props: ArticleProps) => {
  const { article } = props

  const router = useRouter()
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <MainLayout>
          <article>
            <Head>
              <title>
                {article.title} | {CMS_NAME}
              </title>
            </Head>
            <ArticleBody title={article.title} date={article.date} content={article.content} />
          </article>
        </MainLayout>
      )}
    </>
  )
}

export default Article

type ParamsProps = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: ParamsProps) {
  const article = getArticleBySlug(params.slug, ['title', 'date', 'slug', 'content'])

  const content = await markdownToHtml(article.content || '')

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const articles = getAllArticles(['slug'])

  return {
    paths: articles.map(article => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: false,
  }
}
