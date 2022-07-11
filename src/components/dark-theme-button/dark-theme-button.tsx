import * as React from 'react'
import { useColorMode } from '@chakra-ui/react'

import { MoonFillIcon } from './components/moon-fill-icon'
import { SunFillIcon } from './components/sun-fill-icon'

export function DarkThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <button onClick={() => toggleColorMode()} className="relative flex items-center justify-center w-3.7 h-3.7">
        {colorMode === 'dark' ? <SunFillIcon /> : <MoonFillIcon />}
      </button>
    </>
  )
}
