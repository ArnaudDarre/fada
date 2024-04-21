import React from 'react'

import { Card } from '../lib/components/Card'
import { ModalHeader } from '../lib/components/ModalHeader'

export default {
  title: 'Components/ModalHeader',
  component: ModalHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Contains the card title. It is based on the ModalCoHeader component and accepts the same props.'
      }
    }
  },
  argTypes: {
    className: { control: { type: null } }
  }
}

const Template = (args) => (
  <Card size="md" noPadding>
    <ModalHeader {...args} />
  </Card>
)

export const Playground = Template.bind({})

Playground.args = {
  label: 'label',
  title: 'Modal title',
  subtitle: 'This is a card subtitle'
}
