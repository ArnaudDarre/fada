import React from 'react'
import { Home } from 'react-feather'

import { Accordion } from '../lib/components/Accordion'
import { AccordionItem } from '../lib/components/AccordionItem'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/🚧 AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    onClick: { control: { type: null } },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => (
  <Accordion allowMultiple>
    <AccordionItem {...args} />
  </Accordion>
)

export const Playground = Template.bind({})

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">icon</Text>}
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="icon={ /* insert object */ }" dense /></Grid>
                <Grid item>
                  <Accordion allowMultiple>
                    <AccordionItem icon={<Home />}></AccordionItem>
                  </Accordion>
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
                  <Accordion allowMultiple>
                    <AccordionItem disabled></AccordionItem>
                  </Accordion>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
