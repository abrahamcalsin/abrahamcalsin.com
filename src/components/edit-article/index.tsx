import { Flex, Link, Text } from '@chakra-ui/react'

import { OctocatStrokeIcon } from '~/components/svgs/icons'

interface EditArticleProps {
  slug: string
}

export function EditArticle(props: EditArticleProps) {
  const { slug } = props

  return (
    <Flex alignItems="center" columnGap="8px" textColor="inherit">
      <Link
        href={`https://github.com/abrahamcalsin/abrahamcalsin.com/edit/main/data/blog/${slug}.mdx`}
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
        <Text as="span">Editar artículo</Text>
        <Text as="span" w="14px">
          <OctocatStrokeIcon />
        </Text>
      </Link>
    </Flex>
  )
}
