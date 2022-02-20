import { DateFormatArticle } from '~/components/date-format-article'
import { ShareArticle } from '~/components/share-article'

interface ArticleBodyProps {
  title: string
  date: string
  content: string
  articleSlug: string
  shareTitle: string
}

export const ArticleBody = (props: ArticleBodyProps) => {
  const { title, date, content, articleSlug, shareTitle } = props

  return (
    <>
      <div className="my-0 mt-0 sm:my-9.5 sm:mt-11.2">
        <div>
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          <div className="mt-2 mb-4">
            <DateFormatArticle dateArticle={date} />
            <span className="mr-1">|</span>
            <ShareArticle articleLink={articleSlug} articleTitle={shareTitle} />
            <span className="mx-1">|</span>
          </div>
        </div>
        <div
          className="text-primary-600 dark:text-inherit mt-5 sm:mt-7"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  )
}
