import * as React from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'
import { MdWorkOutline } from 'react-icons/md'
import { TbTemplate } from 'react-icons/tb'
import { Icon } from '@chakra-ui/react'

import { ProjectResponsePayload, ProjectTypeResponsePayload } from '~/typings'
import { WorkItemIconProps } from '~/typings/components/work-item'

export function getWorkItemIcon(projectType: ProjectResponsePayload['type']) {
  switch (projectType) {
    case ProjectTypeResponsePayload.PROJECT: {
      return MdWorkOutline
    }

    case ProjectTypeResponsePayload.PACKAGE: {
      return GoPackage
    }

    case ProjectTypeResponsePayload.CONTRIBUTION: {
      return FaHandsHelping
    }

    case ProjectTypeResponsePayload.TEMPLATE: {
      return TbTemplate
    }

    default: {
      return undefined
    }
  }
}

export function getWorkItemColors(projectType: ProjectResponsePayload['type']) {
  switch (projectType) {
    case ProjectTypeResponsePayload.PROJECT: {
      return {
        fill: 'success.900',
        backgroundColor: 'success.100',
      }
    }

    case ProjectTypeResponsePayload.PACKAGE: {
      return {
        fill: 'yellow.800',
        backgroundColor: 'yellow.100',
      }
    }

    case ProjectTypeResponsePayload.CONTRIBUTION: {
      return {
        fill: 'cyan.800',
        backgroundColor: 'cyan.100',
      }
    }

    case ProjectTypeResponsePayload.TEMPLATE: {
      return {
        fill: 'pink.800',
        backgroundColor: 'pink.100',
      }
    }

    default: {
      return {
        fill: 'primary.900',
        backgroundColor: 'primary.100',
      }
    }
  }
}

export function WorkItemIcon(props: WorkItemIconProps) {
  const { projectType } = props

  const icon = React.useMemo(() => {
    return getWorkItemIcon(projectType)
  }, [projectType])

  const colors = React.useMemo(() => {
    return getWorkItemColors(projectType)
  }, [projectType])

  return <Icon title={projectType} fill={colors.fill} w="full" h="full" as={icon} />
}
