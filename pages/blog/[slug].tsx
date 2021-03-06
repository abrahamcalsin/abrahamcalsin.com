import { allBlogs, Blog } from 'contentlayer/generated'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ArticleBody } from '~/components/article-body'
import { MainLayout } from '~/layouts'

interface ArticleProps {
  article: Blog
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
        <>
          <Head>
            <title>{article.title} | Blog</title>
          </Head>
          <MainLayout>
            <article>
              <ArticleBody
                title={article.title}
                date={article.date}
                readingTime={article.readingTime.text}
                content={article.body.code}
                articleSlug={article.slug}
                shareTitle={article.title}
              />
            </article>
          </MainLayout>
        </>
      )}
    </>
  )
}

export default Article

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allBlogs.map(article => {
    return {
      params: { slug: article.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

type ParamsProps = {
  slug: string
}

export async function getStaticProps(
  context: GetStaticPropsContext<ParamsProps>,
): Promise<GetStaticPropsResult<ArticleProps>> {
  const { params } = context

  const article = allBlogs.find(article => {
    return article.slug === params?.slug
  })

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
    },
  }
}
