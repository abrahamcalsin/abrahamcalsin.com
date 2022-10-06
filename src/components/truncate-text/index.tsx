import * as React from 'react'

interface TruncateTextProps {
  children: React.ReactElement
  className: string
}

export function TruncateText(props: TruncateTextProps) {
  const { children, className } = props

  return (
    <div className="w-full px-6 py-2 bg-white dark:bg-primary-800/50 overflow-hidden shadow-lg shadow-primary-800/5 rounded-md mb-3">
      {React.cloneElement(children, { className: `my-0 ${className}` })}
    </div>
  )
}
