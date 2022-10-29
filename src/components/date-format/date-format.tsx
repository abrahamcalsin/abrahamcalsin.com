import 'dayjs/locale/en'
import 'dayjs/locale/es'

import { Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { DateFormatProps } from '~/typings/components/date-format'
import { dateFormat } from '~/utils'

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
