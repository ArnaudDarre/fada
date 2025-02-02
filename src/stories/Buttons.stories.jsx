import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { Grid } from '../lib/components/Grid'

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
    spacing: { defaultValue: 'md' },
    className: { control: false },
    children: { control: false }
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

export const Directions = () => (
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
