import { TwitterStrokeIcon } from '~/components/svgs/icons'

interface ShareArticleProps {
  articleLink: string
  articleTitle: string
}

export function ShareArticle(props: ShareArticleProps) {
  const { articleLink, articleTitle } = props

  return (
    <div className="inline-flex items-center gap-x-1 text-inherit">
      <a
        className="flex items-center gap-x-0.7 not-italic text-sm mt-1 sm:mt-0 link-underline"
        target="_blank"
        rel="nofollow noopener noreferrer"
        href={`https://twitter.com/share?url=https://abrahamcalsin.com/blog/${articleLink}&text=" ${articleTitle} " por @abraham_calsin`}
      >
        <span>Compartir artículo</span>
        <span className="w-1.7">
          <TwitterStrokeIcon />
        </span>
      </a>
    </div>
  )
}
