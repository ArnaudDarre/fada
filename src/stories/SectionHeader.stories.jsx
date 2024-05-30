import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { SectionHeader } from '../lib/components/SectionHeader'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <SectionHeader {...args} />

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
              title={<Text code component="span">subheader</Text>}
              subtitle="Apply this prop for smaller section headers."
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="subheader" dense /></Grid>
                <Grid item>
                  <SectionHeader
                    subheader
                    label="Food"
                    title="Edible mushrooms"
                    subtitle="Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi."
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
