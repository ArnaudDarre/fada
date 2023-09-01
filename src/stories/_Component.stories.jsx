import React from 'react'

import { Component } from '../lib/components/Component'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

// import { Colors } from '../lib/types'

export default {
  title: 'Components/Utils/🚧 Component',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    // prop1: {
    //   defaultValue: 'primary',
    //   options: Colors,
    //   table: { type: { summary: Colors } }
    // },
    // prop2: { defaultValue: 'text' },
    // prop3: { defaultValue: false },
    // prop4: { control: { type: null } },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Component {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Component'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">prop1</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="prop1=''" dense /></Grid>
                  <Grid item>
                    <Component prop1="">
                    </Component>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="prop1=''" dense /></Grid>
                  <Grid item>
                    <Component prop1="">
                    </Component>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">prop2</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="prop2" dense /></Grid>
                <Grid item>
                  <Component prop2>
                  </Component>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
