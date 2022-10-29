import * as React from 'react'
import * as Chakra from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { TruncateText } from '~/components/truncate-text'
import { MdxComponentsProps } from '~/typings/components/mdx-components'

import { Anchor } from './components/anchor'
import { LinkedHeading } from './components/linked-heading'
import { Table, TableCell, TableHead } from './components/table'

const { chakra } = Chakra

export function MdxComponents(props: MdxComponentsProps) {
  const { rawContent } = props

  const Component = useMDXComponent(rawContent)

  const components = React.useMemo(() => {
    return {
      TruncateText,

      ...Chakra,

      // Heading
      h1: (props: any) => <chakra.h1 apply="mdx.h1" {...props} />,
      h2: (props: any) => <LinkedHeading apply="mdx.h2" {...props} />,
      h3: (props: any) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
      h4: (props: any) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
      h5: (props: any) => <LinkedHeading as="h5" apply="mdx.h5" {...props} />,
      h6: (props: any) => <LinkedHeading as="h6" apply="mdx.h6" {...props} />,

      // Other
      hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
      pre: (props: any) => <chakra.pre apply="mdx.pre" {...props} />,
      code: (props: any) => <chakra.code apply="mdx.code" {...props} />,

      // Link
      a: Anchor,

      // Typography
      p: (props: any) => <chakra.p apply="mdx.p" {...props} />,
      ul: (props: any) => <chakra.ul apply="mdx.ul" {...props} />,
      ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
      li: (props: any) => <chakra.li pb="1" {...props} />,
      blockquote: (props: any) => <chakra.blockquote apply="mdx.blockquote" boxShadow="lg" {...props} />,

      // Table
      table: Table,
      th: TableHead,
      td: TableCell,

      // Image
      img: (props: any) => <chakra.img apply="mdx.img" rounded="lg" {...props} />,
    }
  }, [])

  return <Component components={components} />
}
