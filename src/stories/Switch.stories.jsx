import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Switch } from '../lib/components/Switch'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    id: { control: { type: null } },
    startLabel: { defaultValue: '' },
    endLabel: { defaultValue: 'Switch' },
    disabled: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Switch {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'Switch',
  name: 'Switch',
  value: 'Switch',
  label: 'Switch'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={
                <>
                  <Text code component="span">startLabel</Text>
                  {' and '}
                  <Text code component="span">endLabel</Text>
                </>
              }
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="startLabel=''" isDefault dense /></Grid>
                  <Grid item>
                    <Switch startLabel="Start label" id="startLabel"></Switch>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="endLabel=''" dense /></Grid>
                  <Grid item>
                    <Switch endLabel="End label" id="endLabel"></Switch>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="startLabel='' endLabel=''" dense /></Grid>
                  <Grid item>
                    <Switch startLabel="Start and" endLabel="End label" id="bothLabels"></Switch>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">checked</Text>}
              subtitle="Check the box by default."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="checked" dense /></Grid>
                <Grid item>
                  <Switch endLabel="Checked" id="checked" checked></Switch>
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
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="disabled" dense /></Grid>
                  <Grid item>
                    <Switch endLabel="Disabled" id="disabled" disabled></Switch>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="checked disabled" dense /></Grid>
                  <Grid item>
                    <Switch endLabel="Disabled" id="disabled" checked disabled></Switch>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
