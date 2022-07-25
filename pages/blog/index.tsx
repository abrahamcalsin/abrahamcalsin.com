import { Box, Text } from '@chakra-ui/react'
import { allBlogs } from 'contentlayer/generated'

import { AllArticles } from '~/components/all-articles'
import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'
import { MainLayout } from '~/layouts'
import Article from '~/types/article'

interface BlogProps {
  articles: Article[]
}

const Blog = (props: BlogProps) => {
  const { articles } = props

  const allArticles = articles.slice(0)

  return (
    <MainLayout>
      <Meta title="Blog" />
      <Box mt={{ base: '0', sm: '90px' }} mb={{ base: '0', sm: '30px' }}>
        <TitleSection title="Blog" externalLinkButton={false} />
        <Text fontWeight="medium" lineHeight={{ base: '24px', sm: '36px' }} mt="6px" px="0">
          En esta sección puedes ver artículos sobre exploraciones del mundo del desarrollo web, tutoriales, guías
          prácticas. También escribo sobre diseño y experiencia de usuario/dev.
        </Text>
        {allArticles.length >= 0 && <AllArticles articles={allArticles} />}
      </Box>
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
