import * as React from 'react'

import { useTheme } from 'next-themes'

import { MoonFillIcon } from './components/moon-fill-icon'
import { SunFillIcon } from './components/sun-fill-icon'

export function DarkThemeButton() {
  const [mounted, setMounted] = React.useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
        className="relative flex items-center justify-center w-3.7 h-3.7"
      >
        {currentTheme === 'dark' ? <SunFillIcon /> : <MoonFillIcon />}
      </button>
    </>
  )
}
