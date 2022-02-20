import { OctocatStrokeIcon } from '~/components/svgs/icons/octocat-stroke-icon'

interface EditArticleProps {
  slug: string
}

export const EditArticle = (props: EditArticleProps) => {
  const { slug } = props

  return (
    <div className="inline-flex items-center gap-x-1">
      <a
        className="flex items-center gap-x-0.7 not-italic text-sm mt-1 sm:mt-0 link-underline"
        href={`https://github.com/abrahamcalsin/abrahamcalsin.com/edit/main/content/blog/${slug}.md`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <span>Editar artículo</span>
        <span className="w-2">
          <OctocatStrokeIcon />
        </span>
      </a>
    </div>
  )
}
