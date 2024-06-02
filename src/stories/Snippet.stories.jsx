import React from 'react'

import { Snippet } from '../lib/components/Snippet'

export default {
  title: 'Components/Snippet',
  component: Snippet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    content: { defaultValue: 'Insert code here…' },
    defaultValue: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Snippet {...args} />

export const Playground = Template.bind({})

Playground.args = {}

export const IsDefault = () => (
  <Snippet isDefault content="Is default value" />
)

IsDefault.parameters = {
  docs: {
    description: {
      story: 'Add a default tag on the right side of the snippet.'
    }
  }
}

export const Dense = () => (
  <Snippet dense>Dense</Snippet>
)
