import * as React from 'react'

interface SocialNetworkButtonProps {
  href: string
  svgSocialNetwork: React.ReactElement
}

export function SocialNetworkButton(props: SocialNetworkButtonProps) {
  const { href, svgSocialNetwork } = props

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-primary-600 dark:text-secondary bg-primary-100 dark:bg-secondary/10 w-11 sm:w-12 border-2 border-primary-600 dark:border-secondary rounded-md py-1 px-1.5 transition-opacity duration-200 hover:opacity-80"
    >
      {svgSocialNetwork}
    </a>
  )
}
