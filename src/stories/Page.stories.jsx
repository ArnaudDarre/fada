import React from 'react'

import { Page } from '../lib/components/Page'

export default {
  title: 'Components/Page',
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
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Page {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Page'
}
