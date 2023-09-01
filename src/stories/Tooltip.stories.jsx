import React from 'react'
import classnames from 'classnames'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'
import { Tooltip } from '../lib/components/Tooltip'

export default {
  title: 'Components/Interactions/Tooltip',
  component: Tooltip,
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

const Template = (args) => (
  <Text>Hover the word <Tooltip {...args} /> to see a tooltip appear.</Text>
)

export const Playground = Template.bind({})

Playground.args = {
  children: 'mushroom',
  content: 'This is an important word'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent className={classnames('of-visible')}>
            <CardHeader
              title={<Text code component="span">infoIcon</Text>}
              subtitle="The tooltip is triggered by and info icon added automatically."
            />
            <CardContent>
              <Grid wrapper col={12} spacing={1} direction="column">
                <Grid item><Snippet content="infoIcon" dense /></Grid>
                <Grid item>
                  <Text>Hover the icon<Tooltip content="This is an important word" infoIcon /> to see a tooltip appear.</Text>
                  <Text variant="h6">Hover the icon<Tooltip content="This is an important word" infoIcon /> to see a tooltip appear.</Text>
                  <Text variant="h4">Hover the icon<Tooltip content="This is an important word" infoIcon /> to see a tooltip appear.</Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent className={classnames('of-visible')}>
            <CardHeader
              title={<Text code component="span">bold</Text>}
              subtitle="Make the trigger text bold."
            />
            <CardContent>
              <Grid wrapper col={12} spacing={1} direction="column">
                <Grid item><Snippet content="bold" dense /></Grid>
                <Grid item>
                  <Text>Hover the word <Tooltip bold content="This is an important word">mushroom</Tooltip> to see a tooltip appear.</Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent className={classnames('of-visible')}>
            <CardHeader
              title={<Text code component="span">dense</Text>}
              subtitle="Add a denser styling to the tooltip content (smaller font size and padding)."
            />
            <CardContent>
              <Grid wrapper col={12} spacing={1} direction="column">
                <Grid item><Snippet content="dense" dense /></Grid>
                <Grid item>
                  <Text>Hover the word <Tooltip dense content="This is an important word">mushroom</Tooltip> to see a tooltip appear.</Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
