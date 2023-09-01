import React from 'react'

import { Button } from '../lib/components/Button'
import { Buttons } from '../lib/components/Buttons'
import { ModalActions } from '../lib/components/ModalActions'

export default {
  title: 'Components/Interactions/ModalActions',
  component: ModalActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for the modal buttons. It is based on the ModalActions component and accepts the same props.'
      }
    }
  },
  argTypes: {
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <ModalActions {...args} />

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
