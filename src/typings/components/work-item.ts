import type * as React from 'react'

import { ProjectResponsePayload } from '~/typings/services/projects/projects'

interface WorkItemIconProps {
  projectType: ProjectResponsePayload['type']
}

interface WorkItemProps {
  title: string
  type: ProjectResponsePayload['type']
  description: string
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  tags?: string[]
  packageDownloads?: boolean
  startedAt: string
}

export type { WorkItemIconProps, WorkItemProps }
