import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Play } from 'react-feather'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { NavItem } from '../lib/components/NavItem'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

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
    icon: { control: { type: null } },
    dropdown: { control: { type: null } },
    className: { control: { type: null } },
    children: { control: { type: null } }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

const Template = (args) => <NavItem {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Nav item'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">size</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='sm'" dense /></Grid>
                  <Grid item>
                    <NavItem label="Small" size="sm" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='md'" isDefault dense /></Grid>
                  <Grid item>
                    <NavItem label="Medium" size="md" />
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='lg'" dense /></Grid>
                  <Grid item>
                    <NavItem label="Large" size="lg" />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">active</Text>}
            />
            <CardContent>
              <Grid item wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="active" dense /></Grid>
                <Grid item>
                  <NavItem label="Active" active />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">disabled</Text>}
            />
            <CardContent>
              <Grid item wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="disabled" dense /></Grid>
                <Grid item>
                  <NavItem label="Disabled" disabled />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent className='of-visible'>
            <CardHeader
              title={<Text code component="span">dropdown</Text>}
              subtitle="Add a dropdown submenu."
            />
            <CardContent>
              <Grid wrapper col={12} spacing={1} direction="column">
                <Grid item><Snippet content="dropdown={ /* insert object */ }" dense /></Grid>
                <Grid item direction="row">
                  <NavItem
                    label="With dropdown"
                    dropdown={
                      <>
                        <NavItem label='Delivery' />
                        <NavItem label='Catering' />
                        <NavItem label='Home food' />
                      </>
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">icon</Text>}
            />
            <CardContent>
              <Grid item wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="icon={ /* insert object */ }" dense /></Grid>
                <Grid item>
                  <NavItem label="With icon" icon={<Play />} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
