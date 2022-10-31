import * as React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import { MoonFillIcon } from './components/moon-fill-icon'
import { SunFillIcon } from './components/sun-fill-icon'

export function DarkThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      role="button"
      as="button"
      p="0"
      _dark={{
        color: 'secondary.400',
      }}
      onClick={() => toggleColorMode()}
    >
      {colorMode === 'dark' ? <SunFillIcon /> : <MoonFillIcon />}
    </Box>
  )
}
