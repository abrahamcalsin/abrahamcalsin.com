import useDarkTheme from "~/hook/use-dark-theme"

const DarkThemeButton = () => {
  const { onToggle } = useDarkTheme()

  return (
    <div
      onClick={onToggle}
      className="relative w-3.7 h-3.7 p-0.7 border-2/1 border-primary dark:border-white cursor-pointer text-primary dark:text-white rounded-rds-0.1 overflow-hidden select-none"
    >
      <svg
        className="absolute w-2 h-2 transition-all duration-300 dark:-ml-0.7 opacity-100 dark:opacity-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <svg
        className="absolute w-2 h-2 transition-all duration-300 -ml-0.7 dark:ml-0 opacity-0 dark:opacity-100"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </div>
  )
}
export default DarkThemeButton
