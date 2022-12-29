import { CgCoffee } from 'react-icons/cg'
import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { DateFormat } from '~/components/date-format'

interface ArticlePreviewProps {
  title: string
  description: string
  date: string
  slug: string
  readingTime: { text: string }
}

export function ArticlePreview(props: ArticlePreviewProps) {
  const { title, description, date, slug, readingTime } = props

  return (
    <RouterLink href={`/blog/${slug}`} passHref>
      <Link
        display="block"
        textColor="primary.600"
        transitionDuration=".4s"
        transitionProperty="opacity transform"
        rounded="md"
        mb={{ base: '0.5', sm: '2' }}
        _dark={{
          color: 'primary.400',
          _hover: {
            bg: 'primary.800',
          },
        }}
        py="3.5"
        px={{ base: 'none', sm: '3.5' }}
        textDecoration="none"
        _hover={{
          transform: 'scale(1.02)',
          bg: 'primary.100',
          textDecoration: 'none',
        }}
      >
        <Heading
          fontSize="xl"
          textColor="primary.800"
          _dark={{
            textColor: 'primary.200',
          }}
          noOfLines={2}
        >
          {title}
        </Heading>
        <Box
          fontSize="sm"
          display="flex"
          alignItems="center"
          gap="2"
          lineHeight="none"
          my={{ base: '2.5', sm: '3.5' }}
          textColor="primary.500"
        >
          <Text as="span">
            <DateFormat date={date} locale="es" />
          </Text>
          <Text as="span" fontWeight="black">
            •
          </Text>
          <Text as="span" display="flex" alignItems="center" gap="0.5" fontSize="sm">
            <Icon w="4" as={CgCoffee} />
            <Text as="span">{readingTime.text}</Text>
          </Text>
        </Box>
        <Text fontSize="md" lineHeight="normal" textColor="primary.500" noOfLines={3}>
          {description}
        </Text>
      </Link>
    </RouterLink>
  )
}
