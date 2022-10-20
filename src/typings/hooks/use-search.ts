import type * as React from 'react'

interface UseSearchOptions<T> {
  data: T[]
  filter: keyof T | ((term: string, item: T) => boolean)
  sortField: keyof T
}

export type { UseSearchOptions }
