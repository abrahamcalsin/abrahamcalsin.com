import * as React from 'react'
import ReactTooltip from 'react-tooltip'

import { getAllDownloadsRGFB } from '~/services/package-downloads/get-all-downloads-rgfb'
import { DownloadStrokeIcon } from '~/components/svgs/icons/download-stroke-icon'

interface PackageDownloadsProps {
  visible?: boolean
}

export const PackageDownloads = (props: PackageDownloadsProps) => {
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
          <p
            data-for="connect-id"
            data-tip="Descargas del paquete en Npm"
            className="mb-0 ml-1 cursor-default font-extraLight hidden sm:inline-flex items-center gap-x-0.5 text-primary-400 dark:text-secondary"
          >
            <DownloadStrokeIcon />
            <span className="inline-block font-medium text-base">{data.downloads}</span>
          </p>
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
