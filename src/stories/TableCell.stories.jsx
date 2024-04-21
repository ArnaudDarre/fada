import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Snippet } from '../lib/components/Snippet'
import { Table } from '../lib/components/Table'
import { TableBody } from '../lib/components/TableBody'
import { TableCell } from '../lib/components/TableCell'
import { TableRow } from '../lib/components/TableRow'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    align: { defaultValue: 'left' },
    className: { control: { type: null } }
  }
}

const Template = (args) => (
  <Table noBorder>
    <TableBody>
      <TableRow>
        <TableCell {...args} />
      </TableRow>
    </TableBody>
  </Table>
)

export const Playground = Template.bind({})

Playground.args = {
  children: 'TableCell'
}

export const Guide = Template.bind({})

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">align</Text>}
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='left'" isDefault dense /></Grid>
                  <Grid item>
                    <Table noBorder>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">left</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='center'" dense /></Grid>
                  <Grid item>
                    <Table noBorder>
                      <TableBody>
                        <TableRow>
                          <TableCell align="center">center</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
                <Grid item wrapper col={4} spacing={1} direction="column">
                  <Grid item><Snippet content="align='right'" dense /></Grid>
                  <Grid item>
                    <Table noBorder>
                      <TableBody>
                        <TableRow>
                          <TableCell align="right">right</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
]
