import React from 'react'

import { TableBody } from '../lib/components/TableBody'
import { TableCell } from '../lib/components/TableCell'
import { TableRow } from '../lib/components/TableRow'
import { Tag } from '../lib/components/Tag'

export default {
  title: 'Components/TableBody',
  component: TableBody,
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

const Template = (args) => <TableBody {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Guitar</TableCell>
        <TableCell align="right">18</TableCell>
        <TableCell>
          <Tag color="success" dense>Added</Tag>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Paul</TableCell>
        <TableCell>Basse</TableCell>
        <TableCell align="right">18</TableCell>
        <TableCell>
          <Tag color="success" dense>Added</Tag>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Georges</TableCell>
        <TableCell>Guitar</TableCell>
        <TableCell align="right">17</TableCell>
        <TableCell>
          <Tag color="warning" dense>In progress</Tag>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ringo</TableCell>
        <TableCell>Battery</TableCell>
        <TableCell align="right">19</TableCell>
        <TableCell>
          <Tag color="error" dense>To add</Tag>
        </TableCell>
      </TableRow>
    </>
  )
}
