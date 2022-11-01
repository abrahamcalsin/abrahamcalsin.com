import { render } from '@testing-library/react'

import { DateFormat } from '~/components/date-format'
import { DateFormatProps } from '~/typings/components/date-format'

const setup = (props?: DateFormatProps) => {
  return render(<DateFormat {...props} />)
}

const dateString = '2022-04-20T21:30:00.000Z'

describe('DateFormat', () => {
  it('formats date with locale en', () => {
    const view = setup({
      date: dateString,
      locale: 'en',
    })

    expect(view.baseElement).toMatchSnapshot()
  })

  it('formats date with locale es', () => {
    const view = setup({
      date: dateString,
      locale: 'es',
    })

    expect(view.baseElement).toMatchSnapshot()
  })
})
