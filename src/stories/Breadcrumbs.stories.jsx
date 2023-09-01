import React from 'react'

import { Breadcrumbs } from '../lib/components/Breadcrumbs'

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: { type: null } }
  }
}

const Template = (args) => <Breadcrumbs {...args} />

export const Playground = Template.bind({})

Playground.args = {
  // steps: (
  //   { label: 'Profile' },
  //   { label: 'Password' },
  //   { label: 'Address' }
  // )
}
