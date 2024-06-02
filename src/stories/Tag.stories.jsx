import React from 'react'

import { Grid } from '../lib/components/Grid'
import { Tag } from '../lib/components/Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
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

const Template = (args) => <Tag {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Tag'
}

export const Color = () => (
  <Grid wrapper spacing={2}>
    <Grid item wrapper spacing={2}>
      <Grid item><Tag color="primary">Primary</Tag></Grid>
      <Grid item><Tag color="secondary">Secondary</Tag></Grid>
      <Grid item><Tag color="highlight">Highlight</Tag></Grid>
      <Grid item><Tag color="grey">Grey</Tag></Grid>
    </Grid>
    <Grid item wrapper spacing={2}>
      <Grid item><Tag color="success">Success</Tag></Grid>
      <Grid item><Tag color="info">Info</Tag></Grid>
      <Grid item><Tag color="warning">Warning</Tag></Grid>
      <Grid item><Tag color="error">Error</Tag></Grid>
    </Grid>
  </Grid>
)

export const Dense = () => (
  <Tag dense>Dense</Tag>
)
