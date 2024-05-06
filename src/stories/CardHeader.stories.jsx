import React from 'react'

import { Card } from '../lib/components/Card'
import { CardHeader } from '../lib/components/CardHeader'

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
  label: 'Card label',
  title: 'Card title',
  subtitle: 'This is a card subtitle'
}
