import * as React from 'react'
import { FiDownload } from 'react-icons/fi'
import { Icon, Text, Tooltip } from '@chakra-ui/react'

import { getAllPackageDownloads } from '~/services/get-all-package-downloads/get-all-package-downloads'
import { numberFormat } from '~/utils/number-format'

interface PackageDownloadsProps {
  visible?: boolean
  packageName: string
}

export function PackageDownloads(props: PackageDownloadsProps) {
  const { visible, packageName } = props

  const [data, setData] = React.useState<{
    downloads: any
  } | null>(null)

  React.useEffect(() => {
    getAllPackageDownloads(packageName).then(data => {
      setData(data)
    })
  }, [])

  if (!data) return null

  const format = numberFormat(data.downloads)

  return (
    <>
      {visible && (
        <Tooltip
          label="Descargas del paquete en Npm"
          placement="top"
          aria-label="Descargas del paquete en Npm"
          py="1"
          px="1.5"
          gutter={10}
          bg="primary.700"
          _dark={{
            backgroundColor: 'primary.100',
          }}
        >
          <Text
            as="span"
            display="inline-flex"
            alignItems="center"
            ml="2"
            gap="1.5"
            fontSize="md"
            fontWeight="medium"
            textColor="primary.400"
            _dark={{
              textColor: 'secondary.400',
            }}
          >
            <Icon w="4" height="full" as={FiDownload} />
            {format}
          </Text>
        </Tooltip>
      )}
    </>
  )
}
