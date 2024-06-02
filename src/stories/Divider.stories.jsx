import React from 'react'

import { Divider } from '../lib/components/Divider'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false }
  }
}

const Template = (args) => <Divider {...args} />

export const Playground = Template.bind({})

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid item><Divider direction="portrait" /></Grid>
    <Grid item className="fg-1"><Divider direction="landscape" /></Grid>
  </Grid>
)

export const Size = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Divider size="sm" /></Grid>
    <Grid item><Divider size="md" /></Grid>
    <Grid item><Divider size="lg" /></Grid>
  </Grid>
)
