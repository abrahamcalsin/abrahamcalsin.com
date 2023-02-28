import * as React from 'react'
import { GoMarkGithub, GoPackage } from 'react-icons/go'
import { TbExternalLink } from 'react-icons/tb'
import { Badge, Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'

import { Button } from '~/components/button'
import { DateFormat } from '~/components/date-format'
import { PackageDownloads } from '~/components/package-downloads'
import { WorkItemProps } from '~/typings/components/work-item'
import { getRandomBadgeColors } from '~/utils'

import { getWorkItemColors, WorkItemIcon } from './components'

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
    packageName,
    startedAt = new Date(),
  } = props

  const [mounted, setMounted] = React.useState(false)

  const colors = React.useMemo(() => {
    return getWorkItemColors(type)
  }, [type])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Flex gap={{ base: '5', sm: '7' }} mb="14">
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
      <Box mt="0.5" fontSize="sm">
        <Heading
          as="h3"
          fontSize={{ base: 'xl', sm: '2xl' }}
          textColor="primary.700"
          fontWeight="black"
          mb="3"
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
          {title} {packageDownloads && <PackageDownloads packageName={packageName} visible={packageDownloads} />}
        </Heading>
        <Box fontFamily="robotoMono" mb="2.5" display="flex" flexWrap="wrap" gap="2">
          {tags.map(item => (
            <Badge key={item} fontSize="sm" variant="subtle" colorScheme={getRandomBadgeColors()} opacity="0.8">
              {item}
            </Badge>
          ))}
        </Box>
        <Text fontWeight="medium" mb="3">
          {description}
        </Text>
        <Flex gap="2" flexWrap="wrap" fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="bold">
          {webHref && (
            <Button
              variant="ghost"
              colorScheme="secondary"
              as="a"
              href={webHref}
              rightIcon={<Icon width="4" height="full" ml="-1" as={TbExternalLink} />}
            >
              <Text as="span" textDecor="underline">
                DEMO
              </Text>
            </Button>
          )}
          {repositoryHref && (
            <Button
              variant="ghost"
              colorScheme="secondary"
              as="a"
              href={repositoryHref}
              rightIcon={<Icon width="4" height="full" ml="-1" as={GoMarkGithub} />}
            >
              <Text as="span" textDecor="underline">
                REPOSITORIO
              </Text>
            </Button>
          )}
          {packageHref && (
            <Button
              variant="ghost"
              colorScheme="secondary"
              as="a"
              href={packageHref}
              rightIcon={<Icon width="4" height="full" as={GoPackage} />}
            >
              <Text as="span" textDecor="underline">
                PAQUETE
              </Text>
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  )
}
