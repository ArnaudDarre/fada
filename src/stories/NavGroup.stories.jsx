import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { NavGroup } from '../lib/components/NavGroup'
import { NavItem } from '../lib/components/NavItem'

export default {
  title: 'Components/NavGroup',
  component: NavGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

const Template = (args) => <NavGroup {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <NavItem label='Nav group' />
      <NavItem label='Nav group' />
      <NavItem label='Nav group' />
    </>
  )
}

