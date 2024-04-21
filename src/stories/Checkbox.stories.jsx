import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Checkbox } from '../lib/components/Checkbox'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    value: { control: { type: null } },
    label: { defaultValue: 'Checkbox' },
    checked: { defaultValue: false },
    partial: { defaultValue: false },
    disabled: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Checkbox {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'checkbox',
  value: 'checkbox',
  label: 'Checkbox'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
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
                  <Checkbox label="Checked" id="checked" value="checked" checked></Checkbox>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">partial</Text>}
              subtitle="For selectable list items, use to show users that part of the list is selected."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="partial" dense /></Grid>
                <Grid item>
                  <Checkbox label="Partial" id="partial" value="partial" partial checked></Checkbox>
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
                    <Checkbox label="Disabled" id="disabled" value="disabled" disabled></Checkbox>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="checked disabled" dense /></Grid>
                  <Grid item>
                    <Checkbox label="Disabled" id="disabled" value="disabled" checked disabled></Checkbox>
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
