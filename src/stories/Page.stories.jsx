import React from 'react'

import { Page } from '../lib/components/Page'

export default {
  title: 'Components/Layout/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the root element of your layout, the component that encapsulate all of your page content.'
      }
    }
  },
  argTypes: {
    className: { control: { type: null } },
    children: { control: { type: null } }
  }
}

const Template = (args) => <Page {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Page'
}
