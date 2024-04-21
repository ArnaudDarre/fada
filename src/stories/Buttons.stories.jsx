import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import { Size } from '../lib/types'

export default {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sets automated spacing and wrapping behaviour on small devices for Button components. The spacing between buttons automatically increases on smaller devices for touch accuracy.'
      }
    }
  },
  argTypes: {
    direction: { defaultValue: 'landscape' },
    spacing: {
      defaultValue: 'md',
      options: Size,
      table: { type: { summary: Size } }
    },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Buttons {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Button color="secondary">Add</Button>
      <Button color="grey-60">Edit</Button>
      <Button color="error">Cancel</Button>
    </>
  )
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">direction</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='landscape'" isDefault dense /></Grid>
                  <Grid item>
                    <Buttons>
                      <Button color="secondary">Add</Button>
                      <Button color="grey-60">Edit</Button>
                      <Button color="error">Cancel</Button>
                    </Buttons>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="direction='portrait'" dense /></Grid>
                  <Grid item>
                    <Buttons direction="portrait">
                      <Button color="secondary">Add</Button>
                      <Button color="grey-60">Edit</Button>
                      <Button color="error">Cancel</Button>
                    </Buttons>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">spacing</Text>}
              subtitle="The spacing gets automatically overriden on smaller devices to account for touch."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing='sm'" dense /></Grid>
                  <Grid item>
                    <Buttons spacing="sm">
                      <Button color="secondary">Add</Button>
                      <Button color="grey-60">Edit</Button>
                    </Buttons>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="spacing='md'" isDefault dense /></Grid>
                  <Grid item>
                    <Buttons spacing="md">
                      <Button color="secondary">Add</Button>
                      <Button color="grey-60">Edit</Button>
                    </Buttons>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="<Buttons spacing='lg'></Buttons>" dense /></Grid>
                  <Grid item>
                    <Buttons spacing="lg">
                      <Button color="secondary">Add</Button>
                      <Button color="grey-60">Edit</Button>
                    </Buttons>
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
