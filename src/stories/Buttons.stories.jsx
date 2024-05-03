import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { Grid } from '../lib/components/Grid'

import { Size } from '../lib/types'

export default {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sets automated spacing and wrapping behaviour on small devices for Button components. The spacing between buttons automatically increases on smaller devices for touch accuracy.'
      }
    }
  },
  argTypes: {
    direction: { defaultValue: 'landscape' },
    spacing: {
      defaultValue: 'md',
      options: Size,
      table: { type: { summary: Size } }
    },
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Buttons {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Button color="grey">Edit</Button>
      <Button color="primary">Cancel</Button>
    </>
  )
}

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid item>
      <Buttons>
        <Button color="grey">Landscape</Button>
        <Button>Landscape</Button>
      </Buttons>
    </Grid>
    <Grid item>
      <Buttons direction="portrait">
        <Button color="grey">Portrait</Button>
        <Button>Portrait</Button>
      </Buttons>
    </Grid>
  </Grid>
)
