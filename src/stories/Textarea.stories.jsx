import React from 'react'

import { Textarea } from '../lib/components/Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    onChange: { control: false },
    icon:{ control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <Textarea {...args} />

export const Playground = Template.bind({})

export const IsFocused = () => (
  <Textarea id="isFocused" label="IsFocused" focus />
)

export const Error = () => (
  <Textarea id="error" label="Error" error />
)

export const Disabled = () => (
  <Textarea id="disabled" label="Disabled" disabled />
)

export const Required = () => (
  <Textarea id="required" label="Required" required />
)
