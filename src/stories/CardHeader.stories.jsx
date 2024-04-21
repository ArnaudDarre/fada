import React from 'react'
import { Check, Eye, X } from 'react-feather'

import { Button } from '../lib/components/Button'
import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Contains the card title. You can add an optional label or subtitle. The font sizes are automatically set by the Card size prop.'
      }
    }
  },
  argTypes: {
    className: { control: { type: null } }
  }
}

const Template = (args) => (
  <Card size="md" noPadding>
    <CardHeader {...args} />
  </Card>
)

export const Playground = Template.bind({})

Playground.args = {
  label: 'label',
  title: 'Card title',
  subtitle: 'This is a card subtitle'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">actions</Text>}
              subtitle="Display actions buttons on the card header"
            />
            <CardContent>
              <Grid wrapper col={6} spacing={1} direction="column">
                <Grid item><Snippet content="actions={ {/* insert object */} }" /></Grid>
                <Grid item>
                  <Card>
                    <CardHeader
                      title="Header with actions"
                      actions={
                        <>
                          <Button kind="icon" color="grey-60"><Eye /></Button>
                          <Button kind="icon" color="success"><Check /></Button>
                          <Button kind="icon" color="error"><X /></Button>
                        </>
                      }
                    />
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
