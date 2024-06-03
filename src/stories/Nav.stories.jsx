import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Grid } from '../lib/components/Grid'
import { Nav } from '../lib/components/Nav'
import { NavGroup } from '../lib/components/NavGroup'
import { NavItem } from '../lib/components/NavItem'

export default {
  title: 'Components/Nav',
  component: Nav,
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

const Template = (args) => <Nav {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <NavGroup direction='landscape'>
        <NavItem label='Nav' />
        <NavItem label='Nav' />
        <NavItem label='Nav' />
      </NavGroup>
    </>
  )
}

export const Direction = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item>
      <Nav direction='landscape'>
        <NavGroup>
          <NavItem label='Portrait' />
          <NavItem label='Portrait' />
        </NavGroup>
      </Nav>
    </Grid>
    <Grid item>
      <Nav direction='portrait'>
        <NavGroup>
          <NavItem label='Landscape' />
          <NavItem label='Landscape' />
        </NavGroup>
      </Nav>
    </Grid>
  </Grid>
)

export const Dense = () => (
  <Nav dense>
    <NavGroup>
      <NavItem label='Dense' />
      <NavItem label='Dense' />
    </NavGroup>
  </Nav>
)
