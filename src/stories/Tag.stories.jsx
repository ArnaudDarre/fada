import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Tag } from '../lib/components/Tag'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    dense: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Tag {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Tag'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">color</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" isDefault dense /></Grid>
                  <Grid item>
                    <Tag color="primary">Primary</Tag>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item>
                    <Tag color="secondary">Secondary</Tag>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='highlight'" dense /></Grid>
                  <Grid item>
                    <Tag color="highlight">Highlight</Tag>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='success'" dense /></Grid>
                  <Grid item>
                    <Tag color="success">Success</Tag>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='info'" dense /></Grid>
                  <Grid item>
                    <Tag color="info">Info</Tag>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='warning'" dense /></Grid>
                  <Grid item>
                    <Tag color="warning">Warning</Tag>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='error'" dense /></Grid>
                  <Grid item>
                    <Tag color="error">Error</Tag>
                  </Grid>
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
              <Grid wrapper col={3} spacing={1} direction="column">
                <Grid item><Snippet content="dense" dense /></Grid>
                <Grid item>
                  <Tag dense>Dense</Tag>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
