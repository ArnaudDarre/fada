import React from 'react'
import { Sun } from '@phosphor-icons/react'

import { ListItem } from '../lib/components/ListItem'

export default {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    icon: { control: false },
    bold: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <ListItem {...args} />

export const Playground = Template.bind({})

Playground.args = {
  icon: <Sun />,
  children: 'ListItem'
}

export const Dense = () => (
  <ListItem icon={<Sun />} dense>Dense</ListItem>
)

export const Bold = () => (
  <ListItem icon={<Sun />} bold>Bold</ListItem>
)
