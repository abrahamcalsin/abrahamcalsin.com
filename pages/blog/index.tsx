import { allBlogs } from 'contentlayer/generated'

import { Meta } from '~/components/meta'
import { CMS_NAME } from '~/libconstants'
import { MainLayout } from '~/layouts'
import { AllArticles } from '~/components/all-articles'
import Article from '~/types/article'
import { TitleSection } from '~/components/title-section'

interface BlogProps {
  articles: Article[]
}

const Blog = (props: BlogProps) => {
  const { articles } = props

  const allArticles = articles.slice(0)

  return (
    <MainLayout>
      <Meta title={CMS_NAME} />
      <div className="mt-0 sm:mt-11.2 sm:mb-3.7 text-primary-600 dark:text-inherit">
        <TitleSection title={CMS_NAME} externalLinkButton={false} />
        <p className="leading-6 sm:leading-9 font-medium mt-0.7 px-0">
          En esta sección puedes ver artículos sobre exploraciones del mundo del desarrollo web, tutoriales, guías
          prácticas. También escribo sobre diseño y experiencia de usuario/dev.
        </p>
        {allArticles.length >= 0 && <AllArticles articles={allArticles} />}
      </div>
    </MainLayout>
  )
}

export default Blog

export async function getStaticProps() {
  const articles = allBlogs.sort((article1, article2) => (article1.date > article2.date ? -1 : 1))

  return {
    props: {
      articles,
    },
  }
}
