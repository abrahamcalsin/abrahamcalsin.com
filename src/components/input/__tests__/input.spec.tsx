import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '~/components/input'
import type { InputProps } from '~/typings/components/input'

const mockHandleChange = jest.fn()

const setup = (props?: InputProps) => {
  return render(<Input {...props} />)
}

describe('Input', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the default input', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders an input with left element', () => {
    const view = setup({
      leftIcon: <span data-testid="left-element" />,
    })

    const leftElement = screen.getByTestId('left-element')

    expect(leftElement).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders an input with right element', () => {
    const view = setup({
      rightIcon: <span data-testid="right-element" />,
    })

    const rightElement = screen.getByTestId('right-element')

    expect(rightElement).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders an input with left and right element', () => {
    const view = setup({
      leftIcon: <span data-testid="left-element" />,
      rightIcon: <span data-testid="right-element" />,
    })

    const leftElement = screen.getByTestId('left-element')

    expect(leftElement).toBeInTheDocument()

    const rightElement = screen.getByTestId('right-element')

    expect(rightElement).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('writes in input', async () => {
    const view = setup({
      handleChange: mockHandleChange,
    })

    const input = screen.getByRole('input')

    await userEvent.type(input, 'typing')

    expect(input).toHaveValue('typing')

    expect(view.baseElement).toMatchSnapshot()
  })
})
