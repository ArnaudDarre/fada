import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Step } from '../lib/components/Step'
import { Stepper } from '../lib/components/Stepper'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/🚧 Stepper',
  component: Stepper,
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

const Template = (args) => <Stepper {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Step label="Species">
        Step 1 content
      </Step>
      <Step label="Cooking">
        Step 2 content
      </Step>
      <Step label="Seasoning">
        Step 3 content
      </Step>
    </>
  )
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {

    const exampleContent = (
      <>
        <Step label="Species">
          Step 1 content
        </Step>
        <Step label="Cooking">
          Step 2 content
        </Step>
        <Step label="Seasoning">
          Step 3 content
        </Step>
      </>
    )

    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">showLabel</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="showLabel" dense /></Grid>
                <Grid item>
                  <Stepper showLabel prop1="">{exampleContent}</Stepper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
