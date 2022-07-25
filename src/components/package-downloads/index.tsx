import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import { Text } from '@chakra-ui/react'

import { DownloadStrokeIcon } from '~/components/svgs/icons'
import { getAllDownloadsRGFB } from '~/services/package-downloads/get-all-downloads-rgfb'

interface PackageDownloadsProps {
  visible?: boolean
}

export function PackageDownloads(props: PackageDownloadsProps) {
  const { visible } = props

  const [data, setData] = React.useState<{
    downloads: string
  } | null>(null)

  React.useEffect(() => {
    getAllDownloadsRGFB().then(data => {
      setData(data)
    })
  }, [])

  if (!data) return null

  return (
    <>
      {visible ? (
        <>
          <Text
            data-for="connect-id"
            data-tip="Descargas del paquete en Npm"
            display={{ base: 'none', sm: 'inline-flex' }}
            alignItems="center"
            columnGap="4px"
            cursor="default"
            textColor="primary.400"
            fontWeight={200}
            mb="0"
            ml="8px"
            _dark={{
              textColor: 'secondary.400',
            }}
          >
            <DownloadStrokeIcon />
            <Text as="span" display="inline-block" fontSize="md" fontWeight="medium">
              {data.downloads}
            </Text>
          </Text>
          <ReactTooltip
            id="connect-id"
            className="font-regular"
            delayHide={500}
            textColor="#e6f1ff"
            backgroundColor="#4c5772"
            effect="solid"
          />
        </>
      ) : null}
    </>
  )
}
