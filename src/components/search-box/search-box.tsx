import * as React from 'react'

import { useSearch } from '~/hooks/useSearch'
import { SearchBoxProps } from '~/typings/components/search-box'

import { SearchBoxContainer } from './search-box-container'
import { SearchBoxInput } from './search-box-input'
import { SearchBoxResults } from './search-box-results'

export function SearchBox<T extends Record<string, any>>(props: SearchBoxProps<T>) {
  const { placeholder, data, filter, renderResultItem, renderDefaultResults } = props

  const { searchTerm, searchSuggestions, handleSearch } = useSearch({
    data,
    filter,
    sortField: 'date',
  })

  return (
    <SearchBoxContainer>
      <SearchBoxInput
        placeholder={placeholder}
        value={searchTerm}
        handleChange={handleSearch}
        counter={searchSuggestions.length}
      />
      {searchSuggestions.length > 0 && (
        <SearchBoxResults data={searchSuggestions} renderResultItem={renderResultItem} />
      )}
      {searchSuggestions.length <= 0 && <>{renderDefaultResults}</>}
    </SearchBoxContainer>
  )
}
