import Link from 'next/link'

import { DateFormatArticle } from '~/components/date-format-article'
import { CoffeeStrokeIcon } from '~/components/svgs/icons'

interface ArticlePreviewProps {
  title: string
  date: string
  slug: string
  readingTime: string
}

export function ArticlePreview(props: ArticlePreviewProps) {
  const { title, date, slug, readingTime } = props

  return (
    <div className="border-y-px border-primary-500/20 hover:opacity-80">
      <Link href={`/blog/${slug}`} passHref>
        <a className="flex items-center justify-between gap-x-2 py-2">
          <div className="flex sm:items-center w-full flex-col sm:flex-row">
            <p className="mb-px text-sm sm:w-[12rem] sm:mb-0">
              <DateFormatArticle dateArticle={date} />
            </p>
            <h3 className="w-full text-lg text-primary-700 dark:text-primary-400 line-clamp-1 font-bold m-0 underline sm:no-underline hover:underline">
              {title}
            </h3>
          </div>
          <p className="w-[8rem] hidden sm:flex text-sm font-regular items-center gap-1 m-0">
            <CoffeeStrokeIcon className="w-2" />
            <span>{readingTime}</span>
          </p>
        </a>
      </Link>
    </div>
  )
}
