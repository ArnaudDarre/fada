import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { House } from '@phosphor-icons/react'

import { NavGroup } from '../lib/components/NavGroup'
import { NavItem } from '../lib/components/NavItem'

export default {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    dropdown: { control: false },
    icon: { control: false },
    to: { control: false },
    end: { control: false },
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

const Template = (args) => (
  <NavGroup>
    <NavItem {...args} />
  </NavGroup>
)

export const Playground = Template.bind({})

export const Active = () => (
  <NavGroup>
    <NavItem label='Fill' active />
  </NavGroup>
)

export const Dropdown = () => (
  <NavGroup>
    <NavItem
      label='With dropdown'
      dropdown={
        <>
          <NavItem label='Nav item' />
          <NavItem label='Nav item' />
          <NavItem label='Nav item' />
        </>
      }
    >
    </NavItem>
  </NavGroup>
)

export const Icon = () => (
  <NavGroup>
    <NavItem label='Fill' icon={<House />} />
  </NavGroup>
)
