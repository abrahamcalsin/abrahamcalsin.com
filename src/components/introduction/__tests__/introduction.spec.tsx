import { render, screen } from '@testing-library/react'

import { Introduction } from '~/components/introduction'
import { IntroductionProps } from '~/typings/components/introduction'

const setup = (props?: IntroductionProps) => {
  return render(<Introduction {...props} />)
}

describe('Introduction', () => {
  it('renders introduction with title', () => {
    const view = setup({
      title: 'Home',
    })

    const title = screen.getByRole('heading')

    expect(title).toHaveTextContent(/home/i)

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders introduction with children', () => {
    const view = setup({
      children: <span data-testid="children-element" />,
    })

    const children = screen.getByTestId('children-element')

    expect(children).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders introduction with title and children', () => {
    const view = setup({
      title: 'Home',
      children: <span data-testid="children-element" />,
    })

    const title = screen.queryByRole('heading')

    expect(title).toHaveTextContent(/home/i)

    expect(title).toBeInTheDocument()

    const children = screen.getByTestId('children-element')

    expect(children).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
