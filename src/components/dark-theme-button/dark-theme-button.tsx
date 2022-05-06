import * as React from 'react'

import useDarkTheme from '~/hook/use-dark-theme'

import { MoonFillIcon } from './components/moon-fill-icon'
import { SunStrokeIcon } from './components/sun-stroke-icon'

export function DarkThemeButton() {
  const { onToggle } = useDarkTheme()

  const styles: React.CSSProperties = {
    position: 'absolute',
    transition: 'transform 300ms ease-in-out',
  }

  return (
    <button
      onClick={onToggle}
      className="relative flex flex-wrap wrap items-center w-3.7 h-3.7 p-0.7 dark:bg-secondary/10 border-px border-primary dark:border-secondary text-primary dark:text-secondary rounded overflow-hidden select-none transition-all"
    >
      <div className="translate-y-0 dark:translate-y-6" style={styles}>
        <SunStrokeIcon />
      </div>
      <div className="translate-y-6 dark:translate-y-0" style={styles}>
        <MoonFillIcon />
      </div>
    </button>
  )
}
