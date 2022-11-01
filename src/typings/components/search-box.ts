/* eslint-disable no-use-before-define */
import type * as React from 'react'

import { InputProps } from './input'

interface SearchBoxContainerProps {
  children?: React.ReactNode
}

type SearchBoxInputProps = Pick<InputProps, 'variant' | 'type' | 'placeholder' | 'value' | 'handleChange'> & {
  counter?: number
}

type SearchBoxProps<T> = Pick<InputProps, 'variant' | 'placeholder' | 'value' | 'handleChange'> & {
  data: T[]
  filter: keyof T | ((term: string, item: T) => boolean)
  renderResultItem: SearchBoxResultsProps<T>['renderResultItem']
  renderDefaultResults?: React.ReactElement
}

type SearchBoxResultsProps<T> = Pick<SearchBoxProps<T>, 'data'> & {
  renderResultItem: (item: T, index: number) => React.ReactElement
}

export type { SearchBoxContainerProps, SearchBoxInputProps, SearchBoxProps, SearchBoxResultsProps }
