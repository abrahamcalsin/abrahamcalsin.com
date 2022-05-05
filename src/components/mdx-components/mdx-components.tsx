import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { TruncateText } from '~/components/truncate-text'

interface MdxComponentsProps {
  rawContent: string
}

export function MdxComponents(props: MdxComponentsProps) {
  const { rawContent } = props

  const Component = useMDXComponent(rawContent)

  const components = React.useMemo(() => {
    return {
      TruncateText,
    }
  }, [])

  return <Component components={components} />
}
