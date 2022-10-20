import * as React from 'react'
import { Box } from '@chakra-ui/react'

import { SearchBoxResultsProps } from '~/typings/components/search-box'

export function SearchBoxResults<T extends Record<string, any>>(props: SearchBoxResultsProps<T>) {
  const { renderResultItem, data } = props

  if (data.length <= 0) {
    return null
  }

  return <Box mt="5">{data.map((item, index) => renderResultItem(item, index))}</Box>
}
