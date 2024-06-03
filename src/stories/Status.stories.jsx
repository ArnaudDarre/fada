import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Status } from '../lib/components/Status'

export default {
  title: 'Components/Status',
  component: Status,
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
    className: { control: false }
  }
}

const Template = (args) => <Status {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Status'
}

export const Color = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Status color="success">Success</Status></Grid>
    <Grid item><Status color="info">Info</Status></Grid>
    <Grid item><Status color="warning">Warning</Status></Grid>
    <Grid item><Status color="error">Error</Status></Grid>
    <Grid item><Status color="inactive">Inactive</Status></Grid>
  </Grid>
)

export const Dense = () => (
  <Status dense>Dense</Status>
)
