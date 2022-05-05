import * as React from 'react'

import { BadgeCheckFillIcon } from '~/components/svgs/icons'

interface PillContactLinkProps {
  href: string
  svgIcon: React.ReactElement
  socialNetworkName: string
  username: string
}

export function PillContactLink(props: PillContactLinkProps) {
  const { svgIcon, socialNetworkName, href, username } = props

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 sm:gap-1.7 bg-primary-100 dark:bg-secondary/10 py-1 px-1.5 sm:py-1.2 sm:px-2 border-px border-primary-300 dark:border-secondary rounded-md hover:opacity-80"
    >
      <div className="w-2.5 min-w-min max-w-none sm:w-3">{svgIcon}</div>
      <div className="flex flex-col gap-px">
        <p className="flex items-center gap-1 mb-0 leading-none">
          <span className="font-bold text-sm sm:text-sm -mb-px">{socialNetworkName}</span>
          <span className="w-1.7 sm:w-2 block text-secondary">
            <BadgeCheckFillIcon />
          </span>
        </p>
        <span className="underline sm:no-underline sm:group-hover:underline text-xs sm:text-sm -mt-px block line-clamp-1">
          {username}
        </span>
      </div>
    </a>
  )
}
