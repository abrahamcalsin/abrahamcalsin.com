import { TbBrandGithub } from 'react-icons/tb'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'

interface EditArticleProps {
  slug: string
}

export function EditArticle(props: EditArticleProps) {
  const { slug } = props

  return (
    <Flex alignItems="center" columnGap="2" textColor="inherit">
      <Link
        href={`https://github.com/abrahamcalsin/abrahamcalsin.com/edit/main/data/blog/${slug}.mdx`}
        rel="nofollow noopener noreferrer"
        display="flex"
        alignItems="center"
        columnGap="1.5"
        fontSize="sm"
        fontStyle="normal"
        mt={{ base: '2', sm: '0' }}
        _hover={{
          textDecoration: 'none',
        }}
        className="link-underline"
        isExternal
      >
        <Text as="span">Editar artículo</Text>
        <Text as="span" w="4" display="inline-flex">
          <Icon width="full" height="full" as={TbBrandGithub} />
        </Text>
      </Link>
    </Flex>
  )
}
