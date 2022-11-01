import { render, screen } from '@testing-library/react'

import { EditArticle } from '~/components/edit-article'
import { EditArticleProps } from '~/typings/components/edit-article'

const setup = (props?: EditArticleProps) => {
  return render(<EditArticle {...props} />)
}

describe('EditArticle', () => {
  it('renders link with valid slug', () => {
    const view = setup({
      slug: 'truncar-texto-con-tailwindcss',
    })

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/abrahamcalsin/abrahamcalsin.com/edit/main/data/blog/truncar-texto-con-tailwindcss.mdx',
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
