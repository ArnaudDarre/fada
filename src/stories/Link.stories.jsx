import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Link } from '../lib/components/Link'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Interactions/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    disabled: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Link {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Link'
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
              subtitle="Overrides the color (default is inherit)."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" dense /></Grid>
                  <Grid item>
                    <Link color="primary">Primary</Link>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item>
                    <Link color="secondary">Secondary</Link>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='highlight'" dense /></Grid>
                  <Grid item>
                    <Link color="highlight">Highlight</Link>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='success'" dense /></Grid>
                  <Grid item>
                    <Link color="success">Success</Link>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='info'" dense /></Grid>
                  <Grid item>
                    <Link color="info">Info</Link>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='warning'" dense /></Grid>
                  <Grid item>
                    <Link color="warning">Warning</Link>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='error'" dense /></Grid>
                  <Grid item>
                    <Link color="error">Error</Link>
                  </Grid>
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
              <Grid wrapper col={3} spacing={1} direction="column">
                <Grid item><Snippet content="disabled" dense /></Grid>
                <Grid item>
                  <Link disabled>Disabled</Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
