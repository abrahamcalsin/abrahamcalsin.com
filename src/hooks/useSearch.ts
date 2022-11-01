import * as React from 'react'

interface UseSearchOptions<T> {
  data: T[]
  filter: keyof T | ((term: string, item: T) => boolean)
  sortField: keyof T
}

export function useSearch<T>(options: UseSearchOptions<T>) {
  const { data, filter, sortField } = options

  const [searchTerm, setSearchTerm] = React.useState<string>('')

  const [searchSuggestions, setSearchSuggestions] = React.useState<T[]>([])

  const handleSearch = (value: string) => {
    const isEmpty = value.length <= 0

    if (isEmpty) {
      setSearchSuggestions([])

      setSearchTerm(value)

      return
    }

    const filteredData = [...data].filter(item => {
      if (typeof filter === 'function') {
        return filter(value, item)
      }

      const valueToFilter = item[filter] as unknown as string

      const replaceSpecialChars = value.replace(/[^\w ]/g, '')

      const regex = new RegExp(replaceSpecialChars, 'gi')

      return valueToFilter.match(regex)
    })

    const sortedData = filteredData.sort((firstItem, secondItem) => {
      const firstValueToSort = firstItem[sortField] as unknown as string

      const secondValueToSort = secondItem[sortField] as unknown as string

      const sortedIndex = new Date(secondValueToSort).getTime() - new Date(firstValueToSort).getTime()

      return sortedIndex
    })

    setSearchSuggestions(sortedData)

    setSearchTerm(value)
  }

  return {
    searchTerm,
    searchSuggestions,
    handleSearch,
  }
}
