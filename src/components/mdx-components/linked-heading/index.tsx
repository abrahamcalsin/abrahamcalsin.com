import * as React from 'react'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export function LinkedHeading(props: HTMLChakraProps<'h2'>) {
  return (
    <chakra.h2 data-group="" css={{ scrollMarginBlock: '64px' }} {...props}>
      <span className="content">{props.children}</span>
      {props.id && (
        <chakra.a
          aria-label="anchor"
          color="secondary.400"
          fontWeight="normal"
          textDecoration="underline"
          outline="none"
          _focus={{ opacity: 1, boxShadow: 'outline' }}
          opacity={0}
          _groupHover={{ opacity: 1 }}
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </chakra.a>
      )}
    </chakra.h2>
  )
}
