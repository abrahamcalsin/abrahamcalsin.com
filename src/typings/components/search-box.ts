/* eslint-disable no-use-before-define */
import type * as React from 'react'

interface SearchBoxInputProps {
  placeholder: string
  value: string
  counter: number
  handleChange: (value: string) => void
}

interface SearchBoxContainerProps {
  children: React.ReactNode
}

type SearchBoxProps<T> = Pick<SearchBoxInputProps, 'placeholder'> & {
  data: T[]
  filter: keyof T | ((term: string, item: T) => boolean)
  renderResultItem: SearchBoxResultsProps<T>['renderResultItem']
  renderDefaultResults?: React.ReactElement
}

type SearchBoxResultsProps<T> = Pick<SearchBoxProps<T>, 'data'> & {
  renderResultItem: (item: T, index: number) => React.ReactElement
}

export type { SearchBoxContainerProps, SearchBoxInputProps, SearchBoxProps, SearchBoxResultsProps }
