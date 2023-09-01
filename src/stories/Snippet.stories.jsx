import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Data/Snippet',
  component: Snippet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    content: { defaultValue: 'Insert code here…' },
    defaultValue: { defaultValue: false },
    isTransparent: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Snippet {...args} />

export const Playground = Template.bind({})

Playground.args = {
  content: 'Code'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">isDefault</Text>}
              subtitle="Add a default tag on the right side of the snippet."
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="isDefault" dense /></Grid>
                <Grid item>
                  <Snippet content="isDefault" isDefault />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">dense</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="dense" dense /></Grid>
                <Grid item>
                  <Snippet content="dense" dense />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">isTransparent</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="isTransparent" dense /></Grid>
                <Grid item>
                  <Snippet content="isTransparent" isTransparent />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
