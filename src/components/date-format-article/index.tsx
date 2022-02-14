import dayjs from 'dayjs'
import { dateFormat } from '~/utils'

interface DateFormatArticleProps {
  dateArticle: string
}

export const DateFormatArticle = (props: DateFormatArticleProps) => {
  const { dateArticle = new Date() } = props

  return <span>{dayjs(dateArticle).format(dateFormat.article)}</span>
}
