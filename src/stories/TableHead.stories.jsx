import React from 'react'

import { TableCell } from '../lib/components/TableCell'
import { TableHead } from '../lib/components/TableHead'
import { TableRow } from '../lib/components/TableRow'

export default {
  title: 'Components/TableHead',
  component: TableHead,
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

const Template = (args) => <TableHead {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Instrument</TableCell>
      <TableCell>Age</TableCell>
      <TableCell>Status</TableCell>
    </TableRow>
  )
}
