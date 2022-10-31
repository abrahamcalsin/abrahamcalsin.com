import * as React from 'react'

import { PreviewBox } from '~/components/preview-box'

interface TruncateTextProps {
  children: React.ReactElement
  truncateLines: string
  previewVisible?: boolean
}

export function TruncateText(props: TruncateTextProps) {
  const { children, truncateLines, previewVisible = true } = props

  return (
    <PreviewBox previewVisible={previewVisible}>
      {React.cloneElement(children, {
        overflow: 'hidden',
        noOfLines: truncateLines,
        mb: '0',
      })}
    </PreviewBox>
  )
}
