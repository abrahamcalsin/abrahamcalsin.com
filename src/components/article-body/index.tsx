import * as React from 'react'

import { DateFormatArticle } from '~/components/date-format-article'
import { EditArticle } from '~/components/edit-article'
import { MdxComponents } from '~/components/mdx-components/mdx-components'
import { ShareArticle } from '~/components/share-article'
import { CoffeeStrokeIcon } from '~/components/svgs/icons'

interface ArticleBodyProps {
  title: string
  date: string
  content: string
  articleSlug: string
  shareTitle: string
  readingTime: string
}

export function ArticleBody(props: ArticleBodyProps) {
  const { title, date, content, articleSlug, shareTitle, readingTime } = props

  return (
    <>
      <div className="my-0 mt-0 sm:my-9.5 sm:mt-11.2">
        <div>
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          <div className="flex justify-between mt-2 sm:mt-3.5 mb-4 text-primary-600 dark:text-primary-400 text-sm sm:text-base">
            <div>
              <DateFormatArticle dateArticle={date} />
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <CoffeeStrokeIcon className="w-2" />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 sm:mt-7 prose dark:prose-dark max-w-none">
          <MdxComponents rawContent={content} />
        </div>
        <hr className="my-4.5 border-primary-800/10" />
        <div className="flex gap-x-px text-primary-600">
          <ShareArticle articleLink={articleSlug} articleTitle={shareTitle} />
          <span className="mx-1">•</span>
          <EditArticle slug={articleSlug} />
        </div>
      </div>
    </>
  )
}
