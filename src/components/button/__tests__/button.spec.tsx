import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '~/components/button'
import type { ButtonProps } from '~/typings/components/button'

const mockOnClick = jest.fn()

const setup = (props?: ButtonProps) => {
  return render(<Button {...props}>Button</Button>)
}

describe('Button', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders a button with text', () => {
    const view = setup()

    const button = screen.queryByRole('button', {
      name: /button/i,
    })

    expect(button).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders a button with leftIcon', () => {
    const view = setup({
      leftIcon: <span data-testid="left-svg-icon" />,
    })

    const leftIcon = screen.getByTestId('left-svg-icon')

    expect(leftIcon).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders a button with rightIcon', () => {
    const view = setup({
      rightIcon: <span data-testid="right-svg-icon" />,
    })

    const rightIcon = screen.getByTestId('right-svg-icon')

    expect(rightIcon).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders a button with left and right icon', () => {
    const view = setup({
      leftIcon: <span data-testid="left-svg-icon" />,
      rightIcon: <span data-testid="right-svg-icon" />,
    })

    const leftIcon = screen.getByTestId('left-svg-icon')

    expect(leftIcon).toBeInTheDocument()

    const rightIcon = screen.getByTestId('right-svg-icon')

    expect(rightIcon).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('clicks a button', async () => {
    const view = setup({
      handleClick: mockOnClick,
    })

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)

    expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object))

    expect(view.baseElement).toMatchSnapshot()
  })
})
