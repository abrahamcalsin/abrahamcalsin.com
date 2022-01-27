import * as React from 'react'

interface SvgIconProps {
  className?: string
}

export const ProjectsIcon = (props: SvgIconProps) => {
  const { className } = props

  return (
    <svg className={className} viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.04 0h3.38c1.41 0 2.54 1.15 2.54 2.561v3.41c0 1.42-1.13 2.56-2.54 2.56H3.04C1.64 8.53.5 7.39.5 5.97V2.56c0-1.41 1.14-2.56 2.54-2.56Zm0 11.47h3.38c1.41 0 2.54 1.141 2.54 2.561v3.409c0 1.41-1.13 2.56-2.54 2.56H3.04C1.64 20 .5 18.85.5 17.44v-3.409c0-1.42 1.14-2.561 2.54-2.561ZM17.96 0h-3.38c-1.41 0-2.54 1.15-2.54 2.561v3.41c0 1.42 1.13 2.56 2.54 2.56h3.38c1.4 0 2.54-1.14 2.54-2.56V2.56c0-1.41-1.14-2.56-2.54-2.56Zm-3.38 11.47h3.38c1.4 0 2.54 1.141 2.54 2.561v3.409c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.409c0-1.42 1.13-2.561 2.54-2.561Z"
      />
    </svg>
  )
}
