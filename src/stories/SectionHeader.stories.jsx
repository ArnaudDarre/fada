import React from 'react'

import { SectionHeader } from '../lib/components/SectionHeader'

export default {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <SectionHeader {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Food',
  title: 'Edible mushrooms',
  subtitle: 'Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi.'
}

export const Guide = Template.bind({})

export const Dense = () => (
  <SectionHeader
    dense
    label="Dense"
    title="Dense section header"
    subtitle="Used for subheaders on pages, has smeller spacing between elements and smaller text styles."
  />
)
