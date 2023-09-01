import React from 'react'

import { Loader } from '../lib/components/Loader'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Utils/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: { type: null } }
  }
}

const Template = (args) => <Loader {...args} />

export const Playground = Template.bind({})

Playground.args = {
  variant: 'dots'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">variant</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='dots'" isDefault dense /></Grid>
                  <Grid item>
                    <Loader variant="dots">
                    </Loader>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="variant='circle'" dense /></Grid>
                  <Grid item>
                    <Loader variant="circle">
                    </Loader>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">color</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='primary'" isDefault dense /></Grid>
                  <Grid item>
                    <Loader color="primary">
                    </Loader>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='secondary'" dense /></Grid>
                  <Grid item>
                    <Loader color="secondary">
                    </Loader>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='black'" dense /></Grid>
                  <Grid item>
                    <Loader color="black">
                    </Loader>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="color='white'" dense /></Grid>
                  <Grid item>
                    <Loader color="white">
                    </Loader>
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
