import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { CardActions } from '../lib/components/CardActions'

export default {
  title: 'Components/Layout/CardActions',
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
    className: { control: { type: null } },
    children: { control: { type: null } }
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
