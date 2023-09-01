import React from 'react'
import { Play } from 'react-feather'

import { Detail } from '../lib/components/Detail'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Data/Detail',
  component: Detail,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    icon: { control: { type: null } },
    bold: { defaultValue: false },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Detail {...args} />

export const Playground = Template.bind({})

Playground.args = {
  icon: <Play />,
  children: 'Detail'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">bold</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="bold" dense /></Grid>
                <Grid item>
                  <Detail icon={<Play />} bold>Bold</Detail>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
