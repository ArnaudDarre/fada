import React from 'react'

import { Accordion } from '../lib/components/Accordion'
import { AccordionItem } from '../lib/components/AccordionItem'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/🚧 Accordion',
  component: Accordion,
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

const Template = (args) => <Accordion {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <AccordionItem label="Introduction">
        <Text>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</Text>
      </AccordionItem>
      <AccordionItem label="Cooking">
        <Text>Mushrooms may be cooked before consumption.</Text>
        <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
      </AccordionItem>
    </>
  )
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {

    const exampleContent = (
      <>
        <AccordionItem label="Introduction">
          <Text>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</Text>
        </AccordionItem>
        <AccordionItem label="Cooking">
          <Text>Mushrooms may be cooked before consumption.</Text>
          <Text>Frying, roasting, baking, and microwaving are all used to prepare mushrooms.</Text>
        </AccordionItem>
      </>
    )

    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">size</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='sm'" dense /></Grid>
                  <Grid item>
                    <Accordion size="sm">{exampleContent}</Accordion>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='md'" isDefault dense /></Grid>
                  <Grid item>
                    <Accordion size="md">{exampleContent}</Accordion>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="size='lg'" dense /></Grid>
                  <Grid item>
                    <Accordion size="lg">{exampleContent}</Accordion>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">allowMultiple</Text>}
              subtitle="Allow multiple children to be opened at once."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="allowMultiple" dense /></Grid>
                <Grid item>
                  <Accordion allowMultiple>{exampleContent}</Accordion>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">transparent</Text>}
              subtitle="Remove background color when children are collapsed or not hovered."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="transparent" dense /></Grid>
                <Grid item>
                  <Accordion transparent>{exampleContent}</Accordion>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">gutter</Text>}
              subtitle="Add a wider top and bottom padding when children are expanded."
            />
            <CardContent>
              <Grid wrapper col={4} spacing={1} direction="column">
                <Grid item><Snippet content="gutter" dense /></Grid>
                <Grid item>
                  <Accordion gutter>{exampleContent}</Accordion>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
