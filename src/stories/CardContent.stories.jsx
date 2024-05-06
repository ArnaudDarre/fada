import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Paragraph } from '../lib/components/Paragraph'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    fullWidth: { defaultValue: false },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <CardContent {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Paragraph>
        <Text>Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).</Text>
        <Text>They can appear either below ground (hypogeous) or above ground (epigeous) where they may be picked by hand. Edibility may be defined by criteria that include absence of poisonous effects on humans and desirable taste and aroma. Edible mushrooms are consumed for their nutritional and culinary value. Mushrooms, especially dried shiitake, are sources of umami flavor.</Text>
      </Paragraph>
    </>
  )
}

export const FullWidth = () => (
  <Grid wrapper spacing={2}>
    <Grid item md={4} sm={12}>
      <Card>
        <CardHeader
          title="Full width content (remove left and right padding)"
        />
        <CardContent fullWidth>Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).
        </CardContent>
      </Card>
    </Grid>
  </Grid>
)
