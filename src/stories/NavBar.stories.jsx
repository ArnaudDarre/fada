import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Grid } from '../lib/components/Grid'
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
      <NavGroup direction='landscape'>
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
    </>
  )
}

export const Align = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item>
      <NavBar>
        <NavGroup>
          <NavItem label='Align' />
          <NavItem label='Left' />
        </NavGroup>
      </NavBar>
    </Grid>
    <Grid item>
      <NavBar align="right">
        <NavGroup>
          <NavItem label='Align' />
          <NavItem label='Right' />
        </NavGroup>
      </NavBar>
    </Grid>
  </Grid>
)

