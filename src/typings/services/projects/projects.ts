export enum ProjectTypeResponsePayload {
  PROJECT = 'project',
  PACKAGE = 'package',
  CONTRIBUTION = 'contribution',
  TEMPLATE = 'template',
}

enum ProjectStatusResponsePayload {
  PUBLISHED = 'published',
  DRAFT = 'draft',
}

enum ProjectMaintenanceStatusResponsePayload {
  ACTIVE = 'active',
  DEPRECATED = 'deprecated',
  INACTIVE = 'inactive',
}

interface ProjectTechStackResponsePayload {
  name: string
  color: string
}

export interface ProjectResponsePayload {
  id: number
  name: string
  type: ProjectTypeResponsePayload
  status: ProjectStatusResponsePayload
  maintenanceStatus: ProjectMaintenanceStatusResponsePayload
  isPinned: boolean
  description: string
  webHref: string | null
  repositoryHref: string | null
  packageHref: string | null
  tags: ProjectTechStackResponsePayload[]
  startedAt: string
}
