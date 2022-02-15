import { DateFormatArticle } from '~/components/date-format-article'

interface ArticleBodyProps {
  title: string
  date: string
  content: string
}

export const ArticleBody = (props: ArticleBodyProps) => {
  const { title, date, content } = props

  return (
    <div className="my-0 mt-0 sm:my-9.5 sm:mt-11.2">
      <div>
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        <p className="font-regular mt-2 text-primary-600 dark:text-inherit italic">
          <DateFormatArticle dateArticle={date} />
        </p>
      </div>
      <div
        className="text-primary-600 dark:text-inherit mt-5 sm:mt-7"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
