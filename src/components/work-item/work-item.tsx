import * as React from 'react'
import { GoMarkGithub, GoPackage } from 'react-icons/go'
import { TbExternalLink } from 'react-icons/tb'
import { Badge, Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'

import { ButtonLink } from '~/components/button-link'
import { PackageDownloads } from '~/components/package-downloads'
import { ProjectResponsePayload } from '~/typings'
import { getRandomBadgeColors } from '~/utils'

import { DateFormat } from '../date-format'

import { getWorkItemColors, WorkItemIcon } from './components'

export interface WorkItemProps {
  title: string
  type: ProjectResponsePayload['type']
  description: string
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  tags?: string[]
  packageDownloads?: boolean
  startedAt: string
}

export function WorkItem(props: WorkItemProps) {
  const {
    type,
    title,
    description,
    webHref,
    repositoryHref,
    packageHref,
    tags = [],
    packageDownloads,
    startedAt = new Date(),
  } = props

  const colors = React.useMemo(() => {
    return getWorkItemColors(type)
  }, [type])

  return (
    <Flex gap={{ base: '18px', sm: '30px' }} mb="52px">
      <div>
        <Flex
          justifyContent="center"
          w={{ base: '9', sm: '12' }}
          h={{ base: '9', sm: '12' }}
          bg={colors.backgroundColor}
          textColor="primary.100"
          fontStyle="italic"
          fontSize={{ base: 'initial', sm: 'xs' }}
          borderRadius="full"
          boxShadow="lg"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            height: 'full',
            width: '1',
            left: {
              base: 'calc((var(--abraham-space-9) / 2) - (var(--abraham-space-1) / 2))',
              lg: 'calc((var(--abraham-space-12) / 2) - (var(--abraham-space-1) / 2))',
            },
            background: 'white',
            zIndex: '-1',
          }}
          _dark={{
            _before: {
              background: 'primary.400',
            },
          }}
        >
          <Box w={{ base: '4', sm: '6' }}>
            <WorkItemIcon projectType={type} />
          </Box>
        </Flex>
      </div>
      <Box mt="2px" fontSize="sm">
        <Heading
          as="h3"
          fontSize={{ base: 'xl', sm: '2xl' }}
          textColor="primary.700"
          fontWeight="black"
          mb="8px"
          _dark={{
            color: 'primary.300',
          }}
        >
          <Text
            as="span"
            display="block"
            textColor="primary.600"
            fontSize="sm"
            fontWeight="bold"
            mb="1"
            _dark={{ textColor: 'primary.400' }}
          >
            <DateFormat date={startedAt} locale="es" />
          </Text>
          {title}{' '}
          {packageDownloads && <PackageDownloads packageName="react-github-fork-banner" visible={packageDownloads} />}
        </Heading>
        <Text fontWeight="medium">{description}</Text>
        <Box className="font-robotoMono" my="2.5" display="flex" flexWrap="wrap" gap="2">
          {tags.map(item => (
            <Badge key={item} fontSize="sm" variant="subtle" colorScheme={getRandomBadgeColors()} opacity="0.8">
              {item}
            </Badge>
          ))}
        </Box>
        <Flex gap="8px" flexWrap="wrap" fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="bold">
          {webHref && (
            <ButtonLink href={webHref} label="DEMO" icon={<Icon width="4" height="full" as={TbExternalLink} />} />
          )}
          {repositoryHref && (
            <ButtonLink
              href={repositoryHref}
              label="REPOSITORIO"
              icon={<Icon width="4" height="full" as={GoMarkGithub} />}
            />
          )}
          {packageHref && (
            <ButtonLink href={packageHref} label="PAQUETE" icon={<Icon width="4" height="full" as={GoPackage} />} />
          )}
        </Flex>
      </Box>
    </Flex>
  )
}
