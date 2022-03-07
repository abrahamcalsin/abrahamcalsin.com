import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { allBlogs, Blog } from 'contentlayer/generated'

import ArticleType from '~/types/article'
import { CMS_NAME } from '~/lib/constants'
import { MainLayout } from '~/layouts'
import { ArticleBody } from '~/components/article-body'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'

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
            <title>
              {article.title} | {CMS_NAME}
            </title>
          </Head>
          <MainLayout>
            <article>
              <ArticleBody
                title={article.title}
                date={article.date}
                readingTime={article.readingTime.text}
                content={article.body.html}
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
    const [, onlySlug] = article.slug.split('/')

    return {
      params: { slug: onlySlug },
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
    const [, onlySlug] = article.slug.split('/')

    return onlySlug === params?.slug
  })

  // console.log(123, { params, hasArticle: !!article })

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
