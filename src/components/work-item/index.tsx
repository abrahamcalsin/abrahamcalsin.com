import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { ButtonLink } from '~/components/button-link'
import { PackageDownloads } from '~/components/package-downloads'
import { ClockFillIcon, ExternalLinkIcon, OctocatFillIcon, PackageFillIcon } from '~/components/svgs/icons'
import { Tag } from '~/components/tag'
import { dateFormat } from '~/utils'

export interface WorkItemProps {
  title?: string
  packageDownloads?: boolean
  description?: string
  tags?: string
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  date?: Date
}

export function WorkItem(props: WorkItemProps) {
  const { title, packageDownloads, description, tags, webHref, repositoryHref, packageHref, date = new Date() } = props

  return (
    <Flex gap={{ base: '18px', sm: '30px' }} mb="52px">
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={{ base: '30px', sm: '96px' }}
          h={{ base: '30px', sm: '24px' }}
          bg="primary.700"
          position="relative"
          px="0"
          py={{ base: '6px', sm: '16px' }}
          textColor="primary.100"
          fontStyle="italic"
          fontSize={{ base: 'initial', sm: 'xs' }}
          borderRadius={{ base: 'full', sm: '4px' }}
          _dark={{
            bg: 'primary.600',
          }}
          className="arrow-left"
        >
          <Text as="span" display={{ base: 'none', sm: 'inline' }}>
            {dayjs(date).format(dateFormat.project)}
          </Text>
          <Box w="30px" display={{ base: 'inline', sm: 'none' }}>
            <ClockFillIcon />
          </Box>
        </Flex>
      </Box>
      <Box mt="2px" fontSize="sm">
        <Heading
          as="h3"
          fontSize={{ base: 'xl', sm: '2xl' }}
          textColor="primary.700"
          fontWeight="black"
          mb="8px"
          _dark={{
            color: 'inherit',
          }}
        >
          {title} <PackageDownloads visible={packageDownloads} />
        </Heading>
        <Tag label={tags} />
        <Text fontWeight="medium">{description}</Text>
        <Flex gap="8px" flexWrap="wrap" fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="bold">
          {webHref && <ButtonLink href={webHref} label="DEMO" icon={<ExternalLinkIcon />} />}
          {repositoryHref && <ButtonLink href={repositoryHref} label="REPOSITORIO" icon={<OctocatFillIcon />} />}
          {packageHref && <ButtonLink href={packageHref} label="PAQUETE" icon={<PackageFillIcon />} />}
        </Flex>
      </Box>
    </Flex>
  )
}
