import { CgCoffee } from 'react-icons/cg'
import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { DateFormat } from '../date-format'

interface ArticlePreviewProps {
  title: string
  date: string
  slug: string
  readingTime: string
}

export function ArticlePreview(props: ArticlePreviewProps) {
  const { title, date, slug, readingTime } = props

  return (
    <Box
      textColor="primary.600"
      borderBottom="2px"
      borderColor="primary.300"
      transitionProperty="opacity"
      _hover={{
        opacity: 0.8,
      }}
      _dark={{
        color: 'primary.400',
        borderColor: 'primary.800',
      }}
    >
      <RouterLink href={`/blog/${slug}`} passHref>
        <Link
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="16px"
          py="3"
          textDecoration="none"
          textColor="inherit"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Flex
            w="full"
            alignItems={{
              base: 'flex-start',
              sm: 'center',
            }}
            flexDirection={{ base: 'column', sm: 'row' }}
          >
            <Text w={{ base: 'auto', sm: '192px' }} fontSize="sm" mb={{ base: '0', sm: '1px' }}>
              <DateFormat date={date} locale="es" />
            </Text>
            <Heading
              as="h3"
              w="full"
              fontSize="lg"
              textColor="inherit"
              textDecoration={{ base: 'underline', sm: 'none' }}
              fontWeight="bold"
              overflow="hidden"
              noOfLines={1}
              m="0"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              {title}
            </Heading>
          </Flex>
          <Text
            w="128px"
            display={{ base: 'none', sm: 'flex' }}
            alignItems="center"
            gap="8px"
            fontSize="sm"
            fontWeight="regular"
            m="0"
          >
            <Icon w="4" height="full" as={CgCoffee} />
            <Text as="span">{readingTime}</Text>
          </Text>
        </Link>
      </RouterLink>
    </Box>
  )
}
