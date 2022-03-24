import * as React from 'react'

import { DateFormatArticle } from '~/components/date-format-article'
import { ShareArticle } from '~/components/share-article'
import { EditArticle } from '~/components/edit-article'
import { CoffeeStrokeIcon } from '~/components/svgs/icons/coffee-stroke-icon'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface TruncateTextProps {
  children: React.ReactNode
  className: string
}

const TruncateText = (props: TruncateTextProps) => {

  const { children, className } = props

  return (
    <div className="w-full px-6 py-2 bg-white dark:bg-primary-800/50 overflow-hidden shadow-lg shadow-primary-800/5 rounded-md mb-3">
      <p className={`mt-0 mb-1 ${className}`}>
      {children}
      </p>
    </div>
  )
}

interface ArticleBodyProps {
  title: string
  date: string
  content: string
  articleSlug: string
  shareTitle: string
  readingTime: string
}

export const ArticleBody = (props: ArticleBodyProps) => {
  const { title, date, content, articleSlug, shareTitle, readingTime } = props

  const Component = useMDXComponent(content)

  return (
    <>
      <div className="my-0 mt-0 sm:my-9.5 sm:mt-11.2">
        <div>
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          <div className="flex justify-between mt-2 sm:mt-3.5 mb-4 text-primary-600 dark:text-primary-400 text-sm sm:text-base">
            <div>
              <DateFormatArticle dateArticle={date} />
              <span className="mx-1">|</span>
              <EditArticle slug={articleSlug} />
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <CoffeeStrokeIcon className="w-2" />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 sm:mt-7 prose dark:prose-dark max-w-none">
          <Component components={{TruncateText}} />
        </div>
        <ShareArticle articleLink={articleSlug} articleTitle={shareTitle} />
      </div>
    </>
  )
}
