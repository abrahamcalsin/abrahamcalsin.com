import type * as React from 'react'
import dayjs from 'dayjs'

interface DateFormatProps {
  date?: Parameters<typeof dayjs>['0']
  locale: 'en' | 'es'
}

export type { DateFormatProps }
