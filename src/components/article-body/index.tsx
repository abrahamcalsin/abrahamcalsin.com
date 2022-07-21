import * as React from 'react'
import { Box, Divider, Flex, Heading } from '@chakra-ui/react'

import { DateFormatArticle } from '~/components/date-format-article'
import { EditArticle } from '~/components/edit-article'
import { MdxComponents } from '~/components/mdx-components/mdx-components'
import { ShareArticle } from '~/components/share-article'
import { CoffeeStrokeIcon } from '~/components/svgs/icons'

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
      <Box>
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
          <Box>
            <DateFormatArticle dateArticle={date} />
          </Box>
          <Box display={{ base: 'none', sm: 'flex' }} alignItems="center" gap="8px">
            <CoffeeStrokeIcon className="w-2" />
            <span>{readingTime}</span>
          </Box>
        </Flex>
      </Box>
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
