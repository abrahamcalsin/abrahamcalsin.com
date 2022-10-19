import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { Introduction } from '~/components/introduction'
import { AllArticles } from '~/screens/blog/components/all-articles'
import Article from '~/types/article'

export interface ContentProps {
  articles: Article[]
}

export function Content(props: ContentProps) {
  const { articles } = props

  return (
    <Box mt={{ base: '0', sm: '20' }} mb={{ base: '0', sm: '7' }}>
      <Introduction title="Blog">
        <Text fontWeight="medium" lineHeight={{ base: '6', sm: '8' }} mt="1.5" px="0">
          En esta sección puedes ver artículos sobre exploraciones del mundo del desarrollo web, tutoriales, guías
          prácticas. También escribo sobre diseño y experiencia de usuario/dev.
        </Text>
      </Introduction>
      {articles.length >= 0 && <AllArticles articles={articles} />}
    </Box>
  )
}
