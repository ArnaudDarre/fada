import React from 'react'

import { List } from '../lib/components/List'
import { ListItem } from '../lib/components/ListItem'

export default {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    children: { control: false },
    className: { control: false }
  }
}

const Template = (args) => <List {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <ListItem>This is a list of items</ListItem>
      <ListItem>Use this component for consisten spacing</ListItem>
      <ListItem>And styling</ListItem>
    </>
  )
}

export const Dense = () => (
  <List dense>
    <ListItem>This is a list</ListItem>
    <ListItem>with dense styling</ListItem>
    <ListItem>the spacing between</ListItem>
    <ListItem>items is smaller</ListItem>
  </List>
)
