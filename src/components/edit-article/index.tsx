import { OctocatStrokeIcon } from '~/components/svgs/icons'

interface EditArticleProps {
  slug: string
}

export function EditArticle(props: EditArticleProps) {
  const { slug } = props

  return (
    <div className="inline-flex items-center gap-x-1 text-inherit">
      <a
        className="flex items-center gap-x-0.7 not-italic text-sm mt-1 sm:mt-0 link-underline"
        target="_blank"
        rel="nofollow noopener noreferrer"
        href={`https://github.com/abrahamcalsin/abrahamcalsin.com/edit/main/data/blog/${slug}.mdx`}
      >
        <span>Editar artículo</span>
        <span className="w-1.7">
          <OctocatStrokeIcon />
        </span>
      </a>
    </div>
  )
}
