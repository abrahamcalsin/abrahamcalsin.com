import * as React from 'react'
import { CgCoffee } from 'react-icons/cg'
import { Box, Divider, Flex, Heading, Icon } from '@chakra-ui/react'

import { DateFormat } from '~/components/date-format'
import { EditArticle } from '~/components/edit-article'
import { MdxComponents } from '~/components/mdx-components/mdx-components'
import { ShareArticle } from '~/components/share-article'

interface ArticleBodyProps {
  title: string
  date: string
  content: string
  articleSlug: string
  shareTitle: string
  readingTime: string
}

export function ArticleBody(props: ArticleBodyProps) {
  const { title, date, content, articleSlug, shareTitle, readingTime } = props

  return (
    <Box my={{ base: '0', sm: '76px' }}>
      <div>
        <Heading
          as="h1"
          fontWeight="black"
          textColor="primary.800"
          fontSize={{ base: '3xl', sm: '4xl' }}
          _dark={{
            textColor: 'primary.200',
          }}
        >
          {title}
        </Heading>
        <Flex
          justifyContent="space-between"
          textColor="primary.600"
          fontSize={{ base: 'sm', sm: 'md' }}
          mt={{ base: '16px', sm: '28px' }}
          mb="16px"
          _dark={{
            textColor: 'primary.400',
          }}
        >
          <div>
            <DateFormat date={date} locale="es" />
          </div>
          <Box display={{ base: 'none', sm: 'flex' }} alignItems="center" gap="8px">
            <Icon w="4" height="full" as={CgCoffee} />
            <span>{readingTime}</span>
          </Box>
        </Flex>
      </div>
      <Box
        w="full"
        maxWidth="none"
        textColor="primary.600"
        mt={{ base: '20px', sm: '28px' }}
        _dark={{
          textColor: 'primary.400',
        }}
      >
        <MdxComponents rawContent={content} />
      </Box>
      <Divider my="25px" borderColor="primary.400" _dark={{ borderColor: 'primary.600' }} />
      <Flex
        columnGap="1px"
        textColor="primary.600"
        _dark={{
          textColor: 'primary.400',
        }}
      >
        <ShareArticle articleLink={articleSlug} articleTitle={shareTitle} />
        <span className="mx-1">•</span>
        <EditArticle slug={articleSlug} />
      </Flex>
    </Box>
  )
}
