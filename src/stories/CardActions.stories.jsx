import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { Card } from '../lib/components/Card'
import { CardActions } from '../lib/components/CardActions'
import { Grid } from '../lib/components/Grid'

export default {
  title: 'Components/CardActions',
  component: CardActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for the card buttons. If there is one direct child, it will always be on the right side of the card. If there is two direct children, they will be placed on the left and right side.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <CardActions {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Button color="grey-60">Back</Button>
      <Buttons>
        <Button color="error">Cancel</Button>
        <Button color="primary">Save</Button>
      </Buttons>
    </>
  )
}

export const Direction = () => (
  <Grid wrapper spacing={2}>
    <Grid item md={4} sm={12}>
      <Card>
        <CardActions direction="portrait">
          <Button color="grey">Portrait</Button>
          <Button color="primary">Portrait</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item md={8} sm={12}>
      <Card>
        <CardActions>
          <Button color="grey">Landscape</Button>
          <Button color="primary">Landscape</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
)
