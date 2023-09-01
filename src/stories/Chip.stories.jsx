import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Chip } from '../lib/components/Chip'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Interactions/Chip',
  component: Chip,
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

const Template = (args) => <Chip {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Chip',
  onClose: null
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
                  <Grid item><Snippet content="color='paper'" isDefault dense /></Grid>
                  <Grid item>
                    <Chip color="paper">Paper</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" dense /></Grid>
                  <Grid item>
                    <Chip color="primary">Primary</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item>
                    <Chip color="secondary">Secondary</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='highlight'" dense /></Grid>
                  <Grid item>
                    <Chip color="highlight">Highlight</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='success'" dense /></Grid>
                  <Grid item>
                    <Chip color="success">Success</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='info'" dense /></Grid>
                  <Grid item>
                    <Chip color="info">Info</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='warning'" dense /></Grid>
                  <Grid item>
                    <Chip color="warning">Warning</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={3} spacing={1} direction="column">
                  <Grid item><Snippet content="color='error'" dense /></Grid>
                  <Grid item>
                    <Chip color="error">Error</Chip>
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
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="dense" dense /></Grid>
                <Grid item>
                  <Chip dense>Dense</Chip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">onClose</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="avatar={ /* insert object */ }" dense /></Grid>
                  <Grid item>
                    <Chip avatar="avatar.svg">Chip with avatar</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="avatar={ /* insert function */ } dense" dense /></Grid>
                  <Grid item>
                    <Chip dense avatar="avatar.svg">Dense chip avatar</Chip>
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
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="disabled" dense /></Grid>
                <Grid item>
                  <Chip disabled>Disabled</Chip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">onClose</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="onClose={ /* insert function */ }" dense /></Grid>
                  <Grid item>
                    <Chip onClose>Chip with onClose function</Chip>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="onClose={ /* insert function */ } dense" dense /></Grid>
                  <Grid item>
                    <Chip dense onClose>Dense chip with onClose</Chip>
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
