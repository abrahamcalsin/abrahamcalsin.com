import * as React from 'react'

import { ExternalLinkIcon } from '~/components/svgs/icons'

export interface TitleSectionProps {
  title: string
  externalLinkButton: boolean
  href?: string
  linkText?: string
  linkTextBold?: string
}

export function TitleSection(props: TitleSectionProps) {
  const { title, externalLinkButton, href, linkText, linkTextBold } = props

  return (
    <>
      <div className="items-center mb-2 sm:flex gap-x-2">
        <h1 className="mb-1 text-primary-800 dark:text-primary-200 sm:mb-0">{title}</h1>
        {externalLinkButton ? (
          <a
            className="inline-flex gap-x-0.7 px-1 py-0.5 font-medium rounded-md bg-primary-100 dark:bg-secondary/10 border-px border-primary-700 dark:border-secondary text-primary-700 dark:text-secondary text-sm transition-opacity hover:opacity-80"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {linkText}

            {linkTextBold && <span className="font-bold underline">{linkTextBold}</span>}
            <ExternalLinkIcon />
          </a>
        ) : null}
      </div>
    </>
  )
}
