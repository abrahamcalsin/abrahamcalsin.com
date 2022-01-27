import dayjs from 'dayjs'
import { dateFormat } from '~/utils'

import { Tag } from '~/components/tag'
import { ExternalLinkIcon } from '~/components/svgs/icons/external-link-icon'
import { PackageFillIcon } from '~/components/svgs/icons/package-fill-icon'
import { OctocatFillIcon } from '~/components/svgs/icons/octocat-fill-icon'
import { ClockFillIcon } from '~/components/svgs/icons/clock-fill-icon'

export interface WorkItemProps {
  title?: string
  description?: string
  tags?: string
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  date?: Date
}

export const WorkItem = (props: WorkItemProps) => {
  const { title, description, tags, webHref, repositoryHref, packageHref, date = new Date() } = props

  return (
    <div className="flex gap-2.2 sm:gap-3.7 mb-6.5">
      <div>
        <div className="relative sm:text-xs text-primary-100 italic bg-primary-700 dark:bg-primary-600 h-3.7 w-3.7 sm:h-3 sm:w-12 px-0 py-0.7 sm:py-2 flex items-center justify-center rounded-full sm:rounded arrow-left">
          <span className="hidden sm:inline">{dayjs(date).format(dateFormat.project)}</span>

          <div className="w-3.7 inline sm:hidden">
            <ClockFillIcon />
          </div>
        </div>
      </div>

      <div className="mt-0.2 text-sm">
        <h3 className="mb-1 text-primary-700 dark:text-inherit">{title}</h3>

        <Tag label={tags} />

        <p className="font-medium ">{description}</p>

        <div className="flex flex-wrap gap-1 text-xs font-bold sm:text-sm dark:text-secondary">
          {webHref && (
            <a
              href={webHref}
              target="__blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity px-1.5 py-0.7 rounded-md underline border-2 border-primary-600 dark:border-secondary bg-primary-100 dark:bg-secondary/10 hover:opacity-80"
            >
              DEMO
              <span className="inline-block w-1.7 ml-0.5">
                <ExternalLinkIcon />
              </span>
            </a>
          )}

          {repositoryHref && (
            <a
              href={repositoryHref}
              target="__blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity px-1.5 py-0.7 rounded-md underline border-2 border-primary-600 dark:border-secondary bg-primary-100 dark:bg-secondary/10 hover:opacity-80"
            >
              REPOSITORIO
              <span className="inline-block w-1.7 ml-0.5">
                <OctocatFillIcon />
              </span>
            </a>
          )}

          {packageHref && (
            <a
              href={packageHref}
              target="__blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity px-1.5 py-0.7 rounded-md underline border-2 border-primary-600 dark:border-secondary bg-primary-100 dark:bg-secondary/10 hover:opacity-80"
            >
              PAQUETE
              <span className="inline-block w-1.7 ml-0.5">
                <PackageFillIcon />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
