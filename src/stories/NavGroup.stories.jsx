import React from 'react'
import classnames from 'classnames'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { NavItem } from '../lib/components/NavItem'
import { NavGroup } from '../lib/components/NavGroup'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Navigation/🚧 NavGroup',
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
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <NavGroup {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <NavItem label='Delivery' />
      <NavItem label='Catering' />
      <NavItem label='Home food' />
    </>
  )
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {

    const exampleContent = (
      <>
        <NavItem label='Delivery' />
        <NavItem label='Catering' />
        <NavItem label='Home food' />
      </>
    )

    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent className={classnames('of-visible')}>
            <CardHeader
              title={<Text code component="span">direction</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={6} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='landscape'" dense /></Grid>
                  <Grid item>
                    <NavGroup direction="landscape">{exampleContent}</NavGroup>
                  </Grid>
                </Grid>
                <Grid item wrapper col={6} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='portrait'" isDefault dense /></Grid>
                  <Grid item>
                    <NavGroup direction="portrait">{exampleContent}</NavGroup>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent className={classnames('of-visible')}>
            <CardHeader
              title={<Text code component="span">size</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='sm'" isDefault dense /></Grid>
                  <Grid item>
                    <NavGroup size="sm">{exampleContent}</NavGroup>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='md'" dense /></Grid>
                  <Grid item>
                    <NavGroup size="md">{exampleContent}</NavGroup>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='lg'" dense /></Grid>
                  <Grid item>
                    <NavGroup size="lg">{exampleContent}</NavGroup>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">transparent</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="transparent" dense /></Grid>
                <Grid item>
                  <NavGroup transparent>{exampleContent}</NavGroup>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
