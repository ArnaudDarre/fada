import React from 'react'
import { Bag, CalendarBlank, Clock } from '@phosphor-icons/react'

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
      <ListItem icon={<Bag />}>This is a list of items</ListItem>
      <ListItem icon={<CalendarBlank />}>Use this component for consistent</ListItem>
      <ListItem icon={<Clock />}>Spacing and styling</ListItem>
    </>
  )
}

export const Dense = () => (
  <List dense>
    <ListItem icon={<Bag />}>This is a dense list</ListItem>
    <ListItem icon={<CalendarBlank />}>The space between items</ListItem>
    <ListItem icon={<Clock />}>And font size are smaller</ListItem>
  </List>
)
