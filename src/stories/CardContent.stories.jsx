import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Paragraph } from '../lib/components/Paragraph'
import { Text } from '../lib/components/Text'
import { Snippet } from '../lib/components/Snippet'

export default {
  title: 'Components/Layout/CardContent',
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

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">fullWidth</Text>}
              subtitle="Use this prop to expand the content to the edges of the card, for exemple when displaying a table inside the component. This is only useful for portrait cards."
            />
            <CardContent>
            </CardContent>
            <CardContent>
              <Grid wrapper col={6} spacing={1} direction="column">
                <Grid item><Snippet content="<CardContent fullWidth></CardContent>" /></Grid>
                <Grid item>
                  <Card>
                    <CardHeader
                      title="Edible mushrooms"
                    />
                    <CardContent fullWidth>Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
