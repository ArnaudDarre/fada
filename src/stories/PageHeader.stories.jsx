import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { PageHeader } from '../lib/components/PageHeader'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

import { Align } from '../lib/types'

export default {
  title: 'Components/Layout/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    align: {
      defaultValue: 'center',
      options: Align,
      table: { type: { summary: Align } }
    },
    className: { control: { type: null } }
  }
}

const Template = (args) => <PageHeader {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Food',
  title: 'Edible mushrooms',
  subtitle: 'Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi.'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">align</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="align='left'" isDefault dense /></Grid>
                  <Grid item>
                    <PageHeader
                      align="left"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi"
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="align='center'" dense /></Grid>
                  <Grid item>
                    <PageHeader
                      align="center"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi"
                    />
                  </Grid>
                </Grid>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="align='right'" dense /></Grid>
                  <Grid item>
                    <PageHeader
                      align="right"
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">isLanding</Text>}
              subtitle="Large version for homepage."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper spacing={1} direction="column">
                  <Grid item><Snippet content="isLanding" isDefault dense /></Grid>
                  <Grid item>
                    <PageHeader
                      isLanding
                      label="Food"
                      title="Edible mushrooms"
                      subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi"
                    />
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
