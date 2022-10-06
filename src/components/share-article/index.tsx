import { TbBrandTwitter } from 'react-icons/tb'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'

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
        <Text as="span" w="4" display="inline-flex">
          <Icon width="full" height="full" as={TbBrandTwitter} />
        </Text>
      </Link>
    </Flex>
  )
}
