import React from 'react'

import { Switch } from '../lib/components/Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    id: { control: false },
    startLabel: { defaultValue: '' },
    endLabel: { defaultValue: 'Switch' },
    disabled: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Switch {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'Switch',
  name: 'Switch',
  value: 'Switch',
  label: 'Switch'
}

export const StartLabel = () => (
  <Switch startLabel="Start label" id="startLabel"></Switch>
)

export const EndLabel = () => (
  <Switch endLabel="End label" id="endLabel"></Switch>
)

export const Checked = () => (
  <Switch endLabel="Checked" id="checked" checked></Switch>
)

export const Disabled = () => (
  <Switch endLabel="Disabled" id="disabled" disabled></Switch>
)
