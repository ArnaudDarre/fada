import React from 'react'

import { Card } from '../lib/components/Card'
import { CardContent } from '../lib/components/CardContent'
import { CardHeader } from '../lib/components/CardHeader'
import { Grid } from '../lib/components/Grid'
import { Table } from '../lib/components/Table'
import { TableBody } from '../lib/components/TableBody'
import { TableCell } from '../lib/components/TableCell'
import { TableHead } from '../lib/components/TableHead'
import { TableRow } from '../lib/components/TableRow'
import { Tag } from '../lib/components/Tag'
import { Snippet } from '../lib/components/Snippet'
import { Text } from '../lib/components/Text'

export default {
  title: 'Components/Data/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    dense: { defaultValue: false },
    children: { control: { type: null } },
    className: { control: { type: null } }
  }
}

const Template = (args) => <Table {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Instrument</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
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
      </TableBody>
    </>
  )
}

export const Guide = Template.bind({})

let tableExample = (
  <>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Instrument</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
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
    </TableBody>
  </>
)

Guide.decorators = [
  () => {
    return (
      <Grid wrapper spacing={6} direction="column">
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">dense</Text>}
              subtitle="Applies smaller padding around the cells."
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="checked" dense /></Grid>
                <Grid item>
                  <Table dense>
                    {tableExample}
                  </Table>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">noBorder</Text>}
              subtitle="Remove border and border radius."
            />
            <CardContent>
              <Grid wrapper spacing={1} direction="column">
                <Grid item><Snippet content="noBorder" dense /></Grid>
                <Grid item>
                  <Table noBorder>
                    {tableExample}
                  </Table>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card size="sm" noPadding transparent>
            <CardHeader
              title={<Text code component="span">withFooter</Text>}
              subtitle="Add pagination and columnn number select."
            />
            <CardContent>
              <Grid wrapper spacing={2}>
                <Grid item wrapper col={12} spacing={1} direction="column">
                  <Grid item><Snippet content="withFooter" dense /></Grid>
                  <Grid item>
                    <Table withFooter>
                      {tableExample}
                    </Table>
                  </Grid>
                </Grid>
                <Grid item wrapper col={12} spacing={1} direction="column">
                  <Grid item><Snippet content="withFooter dense" dense /></Grid>
                  <Grid item>
                    <Table withFooter dense>
                      {tableExample}
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
