import { FiExternalLink } from 'react-icons/fi'
import { MdMail } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react'

import { Button } from '~/components/button'
import { ButtonProps } from '~/typings/components/button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

export const WithDefault: Story<ButtonProps> = args => <Button {...args}>Button</Button>

export const WithLeftIcon: Story<ButtonProps> = args => (
  <Button {...args} leftIcon={<Icon width="4" height="full" as={MdMail} />}>
    Button
  </Button>
)

export const WithRightIcon: Story<ButtonProps> = args => (
  <Button {...args} rightIcon={<Icon width="4" height="full" as={MdMail} />}>
    Button
  </Button>
)

export const WithLeftAndRightIcon: Story<ButtonProps> = args => (
  <Button
    {...args}
    leftIcon={<Icon width="4" height="full" as={MdMail} />}
    rightIcon={<Icon width="4" height="full" as={MdMail} />}
  >
    Button
  </Button>
)

export const WithLinkDefault: Story<ButtonProps> = args => (
  <Button {...args} as="a" href="https://www.abrahamcalsin.com">
    Website
  </Button>
)

export const WithLinkAndLeftIcon: Story<ButtonProps> = args => (
  <Button
    {...args}
    as="a"
    href="https://www.abrahamcalsin.com"
    leftIcon={<Icon width="4" height="full" as={FiExternalLink} />}
  >
    Website
  </Button>
)

export const WithLinkAndRightIcon: Story<ButtonProps> = args => (
  <Button
    {...args}
    as="a"
    href="https://www.abrahamcalsin.com"
    rightIcon={<Icon width="4" height="full" as={FiExternalLink} />}
  >
    Website
  </Button>
)
