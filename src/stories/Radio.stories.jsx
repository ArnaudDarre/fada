import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Radio } from '../lib/components/Radio'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Radio',
  component: Radio,
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
    name: { control: { type: null } },
    value: { control: { type: null } },
    label: { defaultValue: 'Radio' },
    disabled: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Radio {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'radio',
  name: 'radio',
  value: 'radio',
  label: 'Radio'
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
                  <Radio label="Checked" id="checked" name="checked" value="checked" checked></Radio>
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
                    <Radio label="Disabled" id="disabled" name="disabled" value="disabled" disabled></Radio>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="checked disabled" dense /></Grid>
                  <Grid item>
                    <Radio label="Disabled" id="disabled" name="disabled" value="disabled" checked disabled></Radio>
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
