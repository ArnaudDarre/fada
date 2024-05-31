import React from 'react'
import { Play } from 'react-feather'

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
  icon: <Play />,
  children: 'ListItem'
}

export const Dense = () => (
  <ListItem bold>Bold</ListItem>
)
