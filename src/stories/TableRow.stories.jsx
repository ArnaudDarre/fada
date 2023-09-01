import React from 'react'

import { TableCell } from '../lib/components/TableCell'
import { TableRow } from '../lib/components/TableRow'
import { Tag } from '../lib/components/Tag'

export default {
  title: 'Components/Data/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    children: { control: { type: null } },
    className: { control: { type: null } }
  }
}

const Template = (args) => <TableRow {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <TableCell>John</TableCell>
      <TableCell>Guitar</TableCell>
      <TableCell align="right">18</TableCell>
      <TableCell>
        <Tag color="success" dense>Added</Tag>
      </TableCell>
    </>
  )
}
