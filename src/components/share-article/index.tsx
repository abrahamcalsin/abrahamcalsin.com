import { Flex, Link, Text } from '@chakra-ui/react'

import { TwitterStrokeIcon } from '~/components/svgs/icons'

interface ShareArticleProps {
  articleLink: string
  articleTitle: string
}

export function ShareArticle(props: ShareArticleProps) {
  const { articleLink, articleTitle } = props

  return (
    <Flex alignItems="center" columnGap="8px" textColor="inherit">
      <Link
        href={`https://twitter.com/share?url=https://abrahamcalsin.com/blog/${articleLink}&text=" ${articleTitle} " por @abraham_calsin`}
        rel="nofollow noopener noreferrer"
        display="flex"
        alignItems="center"
        columnGap="6px"
        fontSize="sm"
        fontStyle="normal"
        mt={{ base: '8px', sm: '0' }}
        _hover={{
          textDecoration: 'none',
        }}
        className="link-underline"
        isExternal
      >
        <Text as="span">Compartir artículo</Text>
        <Text as="span" w="14px">
          <TwitterStrokeIcon />
        </Text>
      </Link>
    </Flex>
  )
}
