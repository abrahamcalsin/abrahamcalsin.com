import { cookieNames } from '~/utils'

const useDarkTheme = () => {
  function onToggle() {
    const isDark = document.documentElement.classList.contains('dark')

    localStorage.setItem(cookieNames.THEME_MODE, isDark ? 'light' : 'dark')

    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return { onToggle }
}

export default useDarkTheme
