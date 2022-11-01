import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { MdMail } from 'react-icons/md'
import { Box, Icon } from '@chakra-ui/react'
import type { Meta, Story } from '@storybook/react'

import { Input } from '~/components/input'
import { InputProps } from '~/typings/components/input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      defaultValue: 'filled',
      control: {
        type: 'select',
        options: ['filled', 'outline', 'flushed'],
      },
    },
  },
} as Meta

function Wrapper(props: React.PropsWithChildren<unknown>) {
  const { children } = props

  return <Box w="80">{children}</Box>
}

export const WithDefault: Story<InputProps> = args => (
  <Wrapper>
    <Input {...args} />
  </Wrapper>
)

export const WithLeftIcon: Story<InputProps> = args => (
  <Wrapper>
    <Input {...args} leftIcon={<Icon as={HiSearch} color="primary.400" />} />
  </Wrapper>
)

export const WithRightIcon: Story<InputProps> = args => (
  <Wrapper>
    <Input {...args} rightIcon={<Icon color="primary.400" as={MdMail} />} />
  </Wrapper>
)

export const WithLeftAndRightIcon: Story<InputProps> = args => (
  <Wrapper>
    <Input
      {...args}
      leftIcon={<Icon as={HiSearch} color="primary.400" />}
      rightIcon={<Icon color="primary.400" as={MdMail} />}
    />
  </Wrapper>
)
