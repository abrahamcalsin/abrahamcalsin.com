import dayjs from 'dayjs'
import en from 'dayjs/locale/en'

import { dateFormat } from '~/utils'

interface DateFormatArticleProps {
  dateArticle: string
}

export function DateFormatArticle(props: DateFormatArticleProps) {
  const { dateArticle = new Date() } = props

  const date = dayjs(dateArticle).locale(en).format(dateFormat.article)

  return <span className="font-regular text-inherit dark:text-inherit capitalize">{date}</span>
}
