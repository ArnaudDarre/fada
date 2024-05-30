import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { NavBar } from '../lib/components/NavBar'
import { NavGroup } from '../lib/components/NavGroup'
import { NavItem } from '../lib/components/NavItem'

export default {
  title: 'Components/NavBar',
  component: NavBar,
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

const Template = (args) => <NavBar {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <NavGroup transparent direction='landscape'>
        <NavItem label='Home' />
        <NavItem
          label='Services'
          dropdown={
            <>
              <NavItem label='Delivery' />
              <NavItem label='Catering' />
              <NavItem label='Home food' />
            </>
          }
        />
        <NavItem label='Contact' />
      </NavGroup>
      <Buttons>
        <Button size='sm'>Log in</Button>
        <Button size='sm' color='secondary'>Sign up</Button>
      </Buttons>
    </>
  )
}
