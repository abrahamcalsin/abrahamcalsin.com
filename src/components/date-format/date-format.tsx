import 'dayjs/locale/en'
import 'dayjs/locale/es'

import { Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { dateFormat } from '~/utils'

interface DateFormatProps {
  date: Parameters<typeof dayjs>['0']
  locale: 'en' | 'es'
}

export function DateFormat(props: DateFormatProps) {
  const { date, locale } = props

  const formattedDate = dayjs(date).locale(locale).format(dateFormat.ES)

  return (
    <Text as="span" fontWeight="regular" textColor="inherit" textTransform="capitalize">
      {formattedDate}
    </Text>
  )
}

DateFormat.defaultProps = {
  locale: 'en',
}
